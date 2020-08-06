import React from 'react'
import {render, screen, fireEvent, waitFor} from '@testing-library/react'
import ContactForm from './ContactForm'

test('renders Contact Form component without errors.', () => {
    render(<ContactForm/>)
})

test('Able to submit the form when information is filled out.', async () => {
    render(<ContactForm/>)

    const firstNameInput = screen.getByLabelText(/first name/i)
    const lastNameInput = screen.getByLabelText(/last name/i)
    const emailInput = screen.getByLabelText(/email/i)
    const messageInput = screen.getByLabelText(/message/i)

    fireEvent.change(firstNameInput, {target: {value: 'Mr'}})
    fireEvent.change(lastNameInput, {target: {value: 'Brown'}})
    fireEvent.change(emailInput, {target: {value: 'marc@brown.net'}})
    fireEvent.change(messageInput, {target: {value: 'Hello, my name is Marc Brown.'}})

    const submitBtn = screen.getByRole('button', {name: /submit/i})

    fireEvent.click(submitBtn)

    waitFor(() => {
        expect(screen.findByTestId(/result/i)).toBeInTheDocument()
    })
})