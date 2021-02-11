import React from "react";
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ContactForm from './components/ContactForm'

test('renders form successfully', () => {
    render(<ContactForm />)
})

test('user can fill and submit the form', () => {
    
    render(<ContactForm />)
    const firstName = screen.getByLabelText(/first name/i)
    const lastName = screen.getByLabelText(/last name/i)
    const email = screen.getByLabelText(/email/i)
    const message = screen.getByLabelText(/message/i)

    userEvent.type(firstName, 'notorious')
    userEvent.type(lastName, 'BIG')
    userEvent.type(email, 'biggiesmalls@biggie.com')
    userEvent.type(message, 'gotta be notorious')

    const button = screen.getByRole('button', { name: /submit/i })
    userEvent.click(button)

    const formText = screen.queryAllByText(/notorious BIG/i)
})