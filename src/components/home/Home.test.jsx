import React from 'react';
import { render } from '@testing-library/react';
import Home from './Home';

describe('render tests', () => {
    it('renders without crashing', () => {
        render(<Home />);
    });
});
