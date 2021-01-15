import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ContactFrom from './ContactForm';

test('renders Contact From without errors', () => {
    render(<ContactFrom />);
});

test('User can fill out and submit form', () => {
    render(<ContactFrom />);

    const firstNameInput = screen.getAllByText(/First Name/i);
    const lastNameInput = screen.getAllByText(/Last Name/i);
    const emailInput = screen.getAllByText(/Email*/i);

    fireEvent.change(firstNameInput, {
        target: {
            id: 'firstname', name: 'Mya'
        }
    });
    fireEvent.change(lastNameInput, {
        target: {
            id: 'lastname', name: 'Angelou'
        }
    });
    fireEvent.change(emailInput, {
        target: {
            id: 'email', name: 'MA@strong.com'
        }
    });

    const newContact = screen.findByText(/firstname/i);
    expect(newContact).toBeTruthy();

    const newContact0 = screen.findByText(/Angelou/i);
    expect(newContact0).toBeTruthy();

    const newContact1 = screen.findByText(/email/i);
    expect(newContact1).toBeTruthy();

})