import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import ContactForm from './ContactForm'
import { act } from 'react-dom/test-utils'

test('renders form without errors', () => {
  render(<ContactForm/>)
})
test('inputs fields exist and are functional',async () => {
  render(<ContactForm/>)
  const firstName = screen.getByLabelText(/first name*/i)
  const lastName = screen.getByLabelText(/last name*/i)
  const email = screen.getByLabelText(/email*/i)
  const message = screen.getByLabelText(/message/i)

  act( () => {
    fireEvent.change(firstName, {target:{value: 'Cameron'}})
  })
  expect(firstName).toHaveValue('Cameron')
  act(() => {
    fireEvent.change(lastName, {target:{value: 'Honis'}})
  })
  expect(lastName).toHaveValue('Honis')
  act(() => {
    fireEvent.change(email, {target:{value: 'cam@cam.com'}})
  })
  expect(email).toHaveValue('cam@cam.com')
  act(() => {
    fireEvent.change(message, {target:{value: 'message'}})
  })
  expect(message).toHaveValue('message')
  act(() => {
    fireEvent.click(screen.getByRole('button'))
  })
})