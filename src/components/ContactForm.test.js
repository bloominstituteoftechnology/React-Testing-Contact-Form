import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ContactForm from './ContactForm'

test('renders without errors', ()=>{
    render(<ContactForm/>)
})



test('form is filled out and submit adds new contact', ()=>{
    //render
render(<ContactForm/>)
    //query for all inputs
const firstNameInput = screen.getByLabelText(/first name/i)
const lastNameInput = screen.getByLabelText(/last name/i)
const emailInput = screen.getByLabelText(/email/i)
const messageInput = screen.getByLabelText(/message/i)
    //type into inputs
userEvent.type(firstNameInput, 'Corie')
userEvent.type(lastNameInput, 'Stewart')
userEvent.type(emailInput, 'cc00262@gmail.com')
userEvent.type(messageInput, 'Hello')

    //query for button
const button = screen.getByRole('button', {name: /submit/i})
    //click button
userEvent.click(button)
    //querry for new text rendering
const firstNameText = screen.queryByText(/corie/i)
const lastNameText = screen.queryByText(/stewart/i)
const emailText = screen.queryByText(/cc00262@gmail.com/i)
const messageText = screen.queryByText(/hello/i)
    //accersions
expect(firstNameText).toBeInTheDocument()
expect(lastNameText).toBeInTheDocument()
expect(emailText).toBeInTheDocument()
expect(messageText).toBeInTheDocument()
})