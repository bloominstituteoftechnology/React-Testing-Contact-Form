// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';
import 'mutationobserver-shim';
import React, { useState } from 'react'
import { render, fireEvent, wait} from '@testing-library/react'


import ContactForm from './components/ContactForm'

const setup = () => {
    const utils = render(<ContactForm />)
    const firstName = utils.getByPlaceholderText('Edd')
    const lastName = utils.getByPlaceholderText('Burke')
    const email = utils.getByPlaceholderText('bluebill1049@hotmail.com')
    const message = utils.getByRole('textbox', {name: /message/i})
    const sub = utils.getByRole('button', {name: /sub/i})

    return {firstName, lastName, email , message, sub}
  }
  
  

test('It should let me enter a first name', () => {
    const { firstName } = setup()
    fireEvent.change(firstName, { target: { value: 'Jacob' } })
    expect(firstName.value).toBe('Jacob')
})

test('It should let me enter a last name', () => {
    const { lastName } = setup()
    fireEvent.change(lastName, { target: { value: 'Morris' } })
    expect(lastName.value).toBe('Morris')
})

test('It should let me enter an email', () => {
    const { email } = setup()
    fireEvent.change(email, { target: { value: 'jacobthomasmorris@gmail.com' } })
    expect(email.value).toBe('jacobthomasmorris@gmail.com')
})

test('It should let me enter a message', () => {
    const { message } = setup()
    fireEvent.change(message, { target: { value: 'Hello, this message is a test' } })
    expect(message.value).toBe('Hello, this message is a test')
})

test('It should let me click submit button', async () => {
    const { sub } = setup()
    
    fireEvent.click(sub)
    await wait()
})
