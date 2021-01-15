import React from 'react';
import ContactForm from './ContactForm';
import {render, screen} from '@testing-library/react';

    test('Contact form renders', () => {
        render(<ContactForm/>)
    })

    let firstName = screen.queryByLabelText(/First Name*/i);
    let lastName = screen.queryByLabelText(/Last Name*/i);
    let email = screen.queryByLabelText(/Email*/i);
    let message = screen.queryByLabelText(/Message/i);
    let Maxerror = screen.queryByText(/Looks like there was an error: maxLength/i)
    let requiredError = screen.queryByText(/Looks like there was an error: required/i)

    test('first name renders', () => {
        render(<ContactForm/>);

        expect(firstName).not.toBeUndefined();
    })

    test('last name renders', () => {
        render(<ContactForm/>);
        expect(lastName).not.toBeUndefined();
    })

    test('email renders', () => {
        render(<ContactForm/>);
        expect(email).not.toBeUndefined();
    })

    test('message renders', () => {
        render(<ContactForm/>);
        expect(message).not.toBeUndefined();
    })
    test('error displays when text goes over 3 characters', () => {
        render(<ContactForm/>);
        expect(Maxerror).toBeInTheDOM();
    })

    test('required error displays when there is no text', () => {
        render(<ContactForm/>);
        expect(requiredError).not.toBeInTheDOM();
    })