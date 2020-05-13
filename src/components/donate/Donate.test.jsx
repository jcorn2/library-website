import React from 'react';
import { render } from '@testing-library/react';
import Donate from './Donate';

describe('render tests', () => {
    it('renders without crashing', () => {
        render(<Donate />);
    });
});

