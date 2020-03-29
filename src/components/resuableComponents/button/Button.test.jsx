import React from 'react';
import { render } from '@testing-library/react';
import Button from './Button';

describe('render tests', () => {
    it('renders without crashing', () => {
        render(<Button />);
    });
});

