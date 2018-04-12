import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

import DomainForm from '../DomainForm.component';

beforeAll(() => {
    Enzyme.configure({ adapter: new Adapter() });
});

describe('DomainForm component', () => {
    let domain = {};
    beforeAll(() => {
        domain = {
            id: 2,
            name: 'lalala',
            email: 'lalala@gmail.com',
            price: '$3.00'
        }
    });

    it('should match with the snapshot', () => {
        const wrapper = renderer.create(<DomainForm domain={domain}/>).toJSON();
        expect(wrapper).toMatchSnapshot();
    });

    describe('handleChange()', () => {
        it('should update values in domain state', () => {
            const event = {
                target: {
                    name: 'description',
                    value: 'chrfreitas.com'
                }
            }

            const wrapper = shallow(<DomainForm domain={domain}/>);
            wrapper.find('[name="description"]').simulate('change', event);

            expect(wrapper.state().domain.description).toBe(event.target.value);
        });
    })
});