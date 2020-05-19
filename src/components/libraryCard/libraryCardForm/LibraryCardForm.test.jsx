import React from 'react';
import { render } from '@testing-library/react';
import LibraryCardForm from './LibraryCardForm';

describe('render tests', () => {
    it('renders without crashing', () => {
        render(<LibraryCardForm />);
    });
});

