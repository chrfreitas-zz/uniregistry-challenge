import React from 'react';
import Label from './Label';
import { shallow } from 'enzyme';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });


test('Label basic test', () => {
    const label = shallow(
        <Label name="Hi!" />
    );

    expect(label.text()).toEqual('Hi!');
});
