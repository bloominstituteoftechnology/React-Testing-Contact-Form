import React from 'react';
import { render } from '@testing-library/react';
import ContactForm from './ContactForm';

test('ContactForm Renders', () => {
    render(<ContactForm />);
});

test('Adding items to the contact form and Submitting the form.', () => {
    const(getByLabelText, getByText, getByTestId) = render(<ContactForm />)
    

    const fNameInput = getLabelByText(/firstName/i)
    const lNameInput = getLabelByText(/lastName/i)
    const email = getLabelByText(/email/i)
    const message = getLabelByText(/message/i)

    
})