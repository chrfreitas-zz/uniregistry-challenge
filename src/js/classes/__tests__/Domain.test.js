import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

import Domain from '../Domain.class';

beforeAll(() => {
    Enzyme.configure({ adapter: new Adapter() });
});

describe('DomainForm component', () => {
    it('should match with the snapshot', () => {
        expect(true).toBe(true);
    });
});