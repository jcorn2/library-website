import React from 'react';
import { render } from '@testing-library/react';
import Events from './Events';

describe('render tests', () => {
    it('renders without crashing', () => {
        render(<Events />);
    });
});

