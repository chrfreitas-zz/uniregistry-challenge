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
        const wrapper = renderer.create(<Modal />).toJSON();
        expect(wrapper).toMatchSnapshot();
    });

    it('should return just base class modal', () => {
        const wrapper = shallow(<Modal />);
        expect(wrapper.instance().getClass()).toContain('modal')
    });
});