import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

import DomainTable from '../DomainTable.component';

beforeAll(() => {
    Enzyme.configure({ adapter: new Adapter() });
});

describe('DomainTable component', () => {
    it('should match with the snapshot', () => {
        const wrapper = renderer.create(<DomainTable />).toJSON();
        expect(wrapper).toMatchSnapshot();
    });

    describe('renderBody()', () => {
        it('should render a html list', () => {
            const domains = [{
                    id: 1,
                    name: 'foofighter.lol',
                    uniregistry: 'Yes',
                    price: '$12.00'
            }];

            const wrapper = shallow(<DomainTable domains={domains} />);
            const amountDomains = domains.length;
            const amountDomainsRendered = wrapper.find('tbody tr').length;

            expect(amountDomains).toEqual(amountDomainsRendered);
        });

        it('should not render a html list', () => {
            const wrapper = shallow(<DomainTable />);
            const amountDomainsRendered = wrapper.find('tbody tr').length;

            expect(amountDomainsRendered).toEqual(0);
        });
    });
});
