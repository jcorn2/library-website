import React from 'react';
import { render } from '@testing-library/react';
import EventCard from './EventCard';

describe('render tests', () => {
    it('renders without crashing', () => {
        render(<EventCard />);
    });
});

