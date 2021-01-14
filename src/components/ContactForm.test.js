import React from 'react';
import {render , screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ContactForm from './ContactForm'


test('Contact Form is rendering', async () => {
    render(<ContactForm/>);

// make sure inputs work on form including (get Byrole) for button

const firstNameInput  = screen.getByLabelText(/First Name/i)
const lastNameInput = screen.getByLabelText(/Last Name/i)
const emailInput = screen.getByLabelText(/email/i)
const messageInput = screen.getByLabelText(/message/i)


//user events to test the actual user inputs


userEvent.type(firstNameInput, 'Brandon')
userEvent.type(lastNameInput, 'Santos')
userEvent.type(emailInput, 'brandon@gmail.com')
userEvent.type(messageInput, 'I love you coding')

const button = screen.getByRole('button')
userEvent.click(button)


const newFirstName= await screen.findByText(/Brandon/i)
expect(newFirstName).toBeInTheDocument();
const newLastName = await screen.findByText(/santos/i)
expect(newLastName).toBeInTheDocument()
const newEmail = await screen.findByText(/brandon@gmail.com/i)
expect(newEmail).toBeInTheDocument()
const newMessageInput = await screen.findByText(/I love you coding/i)
expect(newMessageInput).toBeInTheDocument()


})

