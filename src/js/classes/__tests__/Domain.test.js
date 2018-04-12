import React from 'react';

import Domain from '../Domain.class';

beforeAll(() => {
    class LocalStorageMock {
        constructor() {
            this.store = {};
        }

        clear() {
            this.store = {};
        }

        getItem(key) {
            return this.store[key] || null;
        }

        setItem(key, value) {
            this.store[key] = value.toString();
        }

        removeItem(key) {
            delete this.store[key];
        }
    };
    global.localStorage = new LocalStorageMock;
});

describe('DomainForm component', () => {
    let STORE_KEY = '';
    let domains = [];
    beforeAll(() => {
        STORE_KEY = 'domains';

        domains = [{
            'id': 1,
            'description': 'foodfighters.lol',
            'price': 1200
        }, {
            'id': 2,
            'description': 'greendiamondsky.com',
            'price': 900
        }, {
            'id': 3,
            'description': 'selfdriving.cars',
            'price': 1600
        }];

        localStorage.setItem(STORE_KEY, JSON.stringify(domains));
    });

    describe('getAll()', () => {
        it('should return all domains in the storage', () => {
            expect(Domain.getAll()).toEqual(domains);
        });
    });

    describe('addAll()', () => {
        it('should add [] in the storage', () => {
            Domain.addAll();
            const storage = JSON.parse(localStorage.getItem(STORE_KEY));

            expect(storage).toEqual([]);
        });

        it('should add paramters in the storage', () => {
            const domains = [{ name: 'Christian' }]
            Domain.addAll(domains);
            const storage = JSON.parse(localStorage.getItem(STORE_KEY));

            expect(storage).toEqual(domains);
        });
    });

    describe('add()', () => {
        it('should add a new item in the storage', () => {
            const oldStorage = JSON.parse(localStorage.getItem(STORE_KEY));

            Domain.add({
                name: 'Christian'
            });

            const newStorage = JSON.parse(localStorage.getItem(STORE_KEY));

            expect(oldStorage.length + 1).toEqual(newStorage.length);
        });

        it('should return false because it doesn\'t have paramters', () => {
            expect(Domain.add()).toBe(false);
        });
    });

    describe('update()', () => {
        it('should update the item with id 1', () => {
            const newDomain = {
                id: 1,
                description: 'Christian'
            };

            Domain.update(newDomain);
            const storage = JSON.parse(localStorage.getItem(STORE_KEY))
            const filterDomain = storage.find(item => item.id === newDomain.id);

            expect(filterDomain.description).toEqual(newDomain.description);
        });

        it('should return false because it doesn\'t have paramters', () => {
            expect(Domain.update()).toBe(false);
        });
    });

    describe('remove()', () => {
        it('should remove the item with id 1', () => {
            const id = 1;
            Domain.remove(id);

            const storage = JSON.parse(localStorage.getItem(STORE_KEY))
            const filterDomain = storage.find(item => item.id === id);

            expect(filterDomain).toBeUndefined();
        });

        it('should return false because it doesn\'t have paramters', () => {
            expect(Domain.remove()).toBe(false);
        });
    });
});