import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

import Home from '../Home.module';

beforeAll(() => {
    Enzyme.configure({ adapter: new Adapter() });
});

describe('Home Module', () => {
    it('should match with the snapshot', () => {
        const wrapper = renderer.create(<Home />).toJSON();
        expect(wrapper).toMatchSnapshot();
    });

    it('should change modal.opened to true', () => {
        const wrapper = shallow(<Home />);
        wrapper.instance().toggleModal();
        expect(wrapper.state().modal.opened).toBeTruthy();
    })
});
