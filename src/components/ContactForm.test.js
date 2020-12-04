import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ContactForm from './ContactForm';

test('renders without errors',  () => {
    render(<ContactForm/>);
});

test('user can fill and submit form', () => {
    //arrange
    render(<ContactForm/>);

    //act
    const firstName = screen.getByPlaceholderText(/edd/i);
    const lastName = screen.getByPlaceholderText(/burke/i);
    const eMail = screen.getByPlaceholderText(/bluebill1049@hotmail.com/i);
    // const message

    userEvent.type(firstName, 'Juan');
    userEvent.type(lastName, 'Ruiz');
    userEvent.type(eMail, 'boo@google.com')
    //assert



})