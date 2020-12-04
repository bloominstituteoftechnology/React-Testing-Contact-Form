import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ContactForm from './ContactForm';
import { act } from 'react-dom/test-utils';

test('renders without errors',  () => {
    render(<ContactForm/>);
});

test('user can fill and submit form', async() => {
    //arrange
    render(<ContactForm/>);

    //act
    const firstName = screen.getByPlaceholderText(/edd/i);
    const lastName = screen.getByPlaceholderText(/burke/i);
    const eMail = screen.getByPlaceholderText(/bluebill1049@hotmail.com/i);
    const message = screen.getByTestId('message')

    userEvent.type(firstName, 'Jua');
    userEvent.type(lastName, 'Ruiz');
    userEvent.type(eMail, 'boo@google.com')
    userEvent.type(message, 'hello');

    const button = screen.getByRole('button')
    
    await act(async () => {
        userEvent.click(button);
    });

    //assert
     expect(firstName.value).toBe('Jua')
     expect(lastName.value).toBe('Ruiz')
     expect(eMail.value).toBe('boo@google.com')
     expect(message.value).toBe('hello')
     



})