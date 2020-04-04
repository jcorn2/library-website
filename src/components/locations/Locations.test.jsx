import React from 'react';
import { render } from '@testing-library/react';
import Locations from './Locations';

describe('render tests', () => {
    it('renders without crashing', () => {
        render(<Locations />);
    });
});

