import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import Home from '../Home.module';

beforeAll(() => {
    Enzyme.configure({ adapter: new Adapter() });

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

    const mock = new MockAdapter(axios);
    mock.onGet('src/data/domains.json').reply(200, {
        'domains': [{
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
        }]
    });

});

describe('Home Module', () => {
    it('should match with the snapshot', () => {
        const wrapper = renderer.create(<Home />).toJSON();
        expect(wrapper).toMatchSnapshot();
    });

    describe('update()', () => {
        it('should update the domain object with the new object', () => {
            const domain = {
                id: 2,
                name: 'lalala',
                price: '$3.00'
            }

            const wrapper = shallow(<Home />);

            setImmediate(() => {
                wrapper.instance().update(domain);
                const newDomain = wrapper.state().domains.find(item => item.id === domain.id);
                expect(newDomain.price).toBe(domain.price);
            });
        });

        it('should not update because there isn\'t any domain with id 5', () => {
            const domain = { id: 5 }

            const wrapper = shallow(<Home />);

            setImmediate(() => {
                wrapper.instance().update(domain);
                const newDomain = wrapper.state().domains.find(item => item.id === domain.id);
                expect(newDomain).toBeUndefined();
            });
        });
    });

    describe('goEdit()', () => {
        it('should change set editMode true', () => {
            const domain = {
                id: 2,
                name: 'lalala',
                email: 'lalala@gmail.com',
                price: '$3.00'
            }

            const wrapper = shallow(<Home />);
            wrapper.instance().goEdit(domain);

            expect(wrapper.state().editMode).toBeTruthy();
        })
    });

    describe('setEditMode()', () => {
        it('should hide edit mode when null', () => {
            const wrapper = shallow(<Home />);
            wrapper.instance().setEditMode();

            expect(wrapper.state().editMode).toBeFalsy();
        });

        it('should show edit mode when true', () => {
            const wrapper = shallow(<Home />);
            wrapper.instance().setEditMode(true);

            expect(wrapper.state().editMode).toBeTruthy();
        });

        it('should hide edit mode when false', () => {
            const wrapper = shallow(<Home />);
            wrapper.instance().setEditMode(false);

            expect(wrapper.state().editMode).toBeFalsy();
        });
    });
});
