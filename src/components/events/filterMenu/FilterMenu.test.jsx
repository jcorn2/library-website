import React from 'react';
import { render } from '@testing-library/react';
import FilterMenu from './FilterMenu';

describe('render tests', () => {
    it('renders without crashing', () => {
        render(<FilterMenu />);
    });
});

