import React from 'react';
import { render, screen } from '@testing-library/react';
import ContactForm from './ContactForm';
import userEvent from '@testing-library/user-event'

test("renders without problem", async ()=>{
    render(<ContactForm/>);

    const firstNameInput = screen.getByLabelText(/first name/i)
    const lastNameInput = screen.getByLabelText(/Last name/i)
    const emailInput = screen.getByLabelText(/Email/i)
    const messageInput = screen.getByLabelText(/message/i)

    userEvent.type(firstNameInput, 'Jea')
    userEvent.type(lastNameInput,'luciano');
    userEvent.type(emailInput, 'jeanluciano@mailbox.org');
    userEvent.type(messageInput,'blah blah blah')

   
    const button = screen.getByRole('button');
    userEvent.click(button);

    const newFirstName = await screen.findByText(/jea/i);
    expect(newFirstName).toBeInTheDocument();
})