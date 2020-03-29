import React from 'react'
import { render } from '@testing-library/react';
import App from './App';

describe('render tests', () => {
    it('renders without crashing', () => {
        render(<App />);
    });
});


