import React from 'react'
import { fireEvent, getByRole, render } from '@testing-library/react'
import App from './App'

test('App is rendering', () => {
    render(<App />);
})

test('checks for first name input', () => {
    const {getAllByText} = render(<App />)
    const firstName = getAllByText(/First Name/i);
})

test('checks for last name input', () => {
    const {getAllByText} = render(<App />)
    const lastName = getAllByText(/Last Name/i);
})

test('checks for email input', () => {
    const {getAllByText} = render(<App />)
    const email = getAllByText(/email/i);
})

test('checks for message input', () => {
    const {getAllByText} = render(<App />)
    const message = getAllByText(/message/i);
})

test('checks for submit button', () => {
    const {getByPlaceholderText} = render(<App />)
    const inputSubmit = getByPlaceholderText(/submit/i)
})