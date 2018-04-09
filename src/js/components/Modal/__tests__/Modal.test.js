import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

import Modal from '../Modal.component';

beforeAll(() => {
    Enzyme.configure({ adapter: new Adapter() });
});

describe('Modal component', () => {
    it('should match with the snapshot', () => {
        const domain = {
            id: 2,
            name: 'lalala',
            email: 'lalala@gmail.com',
            price: '$3.00'
        }

        const wrapper = renderer.create(<Modal domain={domain}/>).toJSON();
        expect(wrapper).toMatchSnapshot();
    });
});