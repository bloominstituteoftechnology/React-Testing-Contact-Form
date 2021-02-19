import React from 'react';
import { render, screen } from '@testing-library/react';
import ContactForm from './ContactForm';
import userEvent from '@testing-library/user-event';

test('renders the ContactForm component without errors', () => {
    render(<ContactForm />);
}); 

test('Can type into each field with no errors', () => {

    render(<ContactForm />);

    const firstNameInput = screen.getByLabelText('First Name*');
    const lastNameInput = screen.getByLabelText('Last Name*');
    const emailInput = screen.getByLabelText('Email*')
    const messageInput = screen.getByLabelText('Message');
    const submitButton = screen.getByRole('button', { name: /submit/i });

    userEvent.type(firstNameInput, 'Kelsey');
    userEvent.type(lastNameInput, 'Nielsen');
    userEvent.type(emailInput, 'kelseywnielsen@gmail.com');
    userEvent.type(messageInput, 'Hello World');
    userEvent.click(submitButton);

    const error = screen.findByText(/Looks like there was an error: maxLength/i);
    error.then((err) => {
        expect(err).not.toBeInTheDocument()
    })

    const displayedInput = screen.findByText(/Kelsey Nielsen kelseywnielsen@gmail.com Hello World/i);
    displayedInput.then(input => {
        expect(input).toBeInTheDocument()
    })
});