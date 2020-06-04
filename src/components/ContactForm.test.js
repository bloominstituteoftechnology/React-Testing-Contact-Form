import React from 'react'
import { render, fireEvent, getAllByTestId } from '@testing-library/react'
import ContactForm from './ContactForm'

test('ContactForm adds new contact info', () => {
    const { getByLabelText, getByTestId, getByText } = render(<ContactForm />)
    
    const firstNameInput = getByLabelText(/first name/i)
    const lastNameInput = getByLabelText(/last name/i)
    const emailInput = getByLabelText(/email/i)
    const messageInput = getByLabelText(/message/i)

    fireEvent.change(firstNameInput, { target: { value: 'Karen' }})        
    fireEvent.change(lastNameInput, { target: { value: 'Lei' }})        
    fireEvent.change(emailInput, { target: { value: 'karen@karen.com' }})        
    fireEvent.change(messageInput, { target: { value: 'hello' }})        

    const submitButton = getByTestId(/submit/i)
    fireEvent.click(submitButton)

    expect(firstNameInput.value).toBe('Karen')
    expect(lastNameInput.value).toBe('Lei')
    expect(emailInput.value).toBe('karen@karen.com')
    expect(messageInput.value).toBe('hello')
})
