import React from 'react';
import { render } from '@testing-library/react';
import DonateForm from './DonateForm';

describe('render tests', () => {
    it('renders without crashing', () => {
        render(<DonateForm />);
    });
});

