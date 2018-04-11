import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

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

    global.fetch = (url) => new Promise((resolve, reject) => {
        resolve({
            name: 1
        })
    });
});

describe('Home Module', () => {
    it('should match with the snapshot', () => {
        const wrapper = renderer.create(<Home />).toJSON();
        expect(wrapper).toMatchSnapshot();
    });

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

    it('should update the domain object with the new object', () => {
        // const domain = {
        //     id: 2,
        //     name: 'lalala',
        //     email: 'lalala@gmail.com',
        //     price: '$3.00'
        // }

        // const wrapper = shallow(<Home />);
        // wrapper.instance().update(domain);

        // const newDomain = wrapper.state().domains.find(item => item.id === domain.id);

        // expect(newPrice.price).toBe(domain.price);
    })

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
