import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ContactForm from './ContactForm';
import { act } from 'react-dom/test-utils';

test('renders without errors', () => {
    render(<ContactForm />);
})

test('form is filled out and submits user information', async () => {

    render(<ContactForm />)

    const firstNameInput = screen.getByPlaceholderText(/edd/i);
    const lastNameInput = screen.getByPlaceholderText(/burke/i);
    const emailInput = screen.getByPlaceholderText(/bluebill1049@hotmail.com/i);
    const messageInput = screen.getByLabelText(/message/i);

    userEvent.type(firstNameInput, 'Edd');
    userEvent.type(lastNameInput, 'Burke');
    userEvent.type(emailInput, 'bluebill1049@hotmail.com');
    userEvent.type(messageInput, 'test');

   await act(async () => {
        const button = screen.getByRole('button', {name:/submit/i});
        expect.objectContaining({
            'firstName': 'Edd',
            'lastName': 'Burke',
            'email': 'bluebill1049@hotmail.com',
            'message': 'test'
        })
        userEvent.click(button);
    })

    // const userText = screen.queryByText(/edd/i);

    // expect(userText).toBeInTheDocument();

    // const button = screen.getByRole('button', {name:/submit/i});

    // userEvent.click(button);


})