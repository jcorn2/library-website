import React from 'react';
import { render } from '@testing-library/react';
import LibraryCard from './LibraryCard';

describe('render tests', () => {
    it('renders without crashing', () => {
        render(<LibraryCard />);
    });
});

