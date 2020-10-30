import React from 'react'
import { render } from '@testing-library/react'
import ContactForm from './components/ContactForm'

test('renders ContactForm without errors', () => {
    render(<ContactForm/>)
})

test('User can fill out and submit form', async () => {
    const firstNameInput = screen.getByLabelText(/firstName/i);
    const lastNameInput = screen.getByLabelText(/lastName/i);
    const emailInput = screen.getByLabelText(/email/i);
    const messageInput = screen.getByLabelText(/message/i);

    fireEvent.change(firstNameInput, { target:{ value: 'Edd', name: 'firstName'}});
    fireEvent.change(lastNameInput, { target:{ value: 'Burke', name: 'lastName'}});
    fireEvent.change(emailInput, { target:{ value: 'bluebill1049@hotmail.com', name: 'email'}});
    fireEvent.change(messageInput, { target:{ value: '', name: 'message'}});

    const inputType = screen.getByRole('input')
    fireEvent.click(inputType)

    const newUserText = await screen.getByText(/Edd/i);
    expect(newUserText).toBeTruthy();

});
