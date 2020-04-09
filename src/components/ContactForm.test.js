import React from 'react';
import { render } from '@testing-library/react';
import ContactForm from './ContactForm';

test("test this", () => {
    const { getByLabelText, getByText, getByTestId } = render(<ContactForm />);

    const firstName = getByLabelText(/First Name*/i);
    expect(firstName).toBeInTheDocument();

});