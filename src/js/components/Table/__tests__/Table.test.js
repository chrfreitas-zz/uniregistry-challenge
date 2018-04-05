import React from 'react';
import Table from '../Table.component';
import { shallow } from 'enzyme';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });


test('x', () => {
    const label = shallow(
        <Table/>
    );

    expect(true).toEqual(true);
});
