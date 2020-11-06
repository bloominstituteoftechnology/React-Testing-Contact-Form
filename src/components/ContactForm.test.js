import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react';

import ContactForm from './ContactForm'

  test('user can fill out and submit', async () => {
    render(<ContactForm />)

    const firstNameInput = screen.getByLabelText(/first Name/i) 
    const lastNameInput = screen.getByLabelText(/last name/i)
    const emailInput = screen.getByLabelText(/email/i)


    fireEvent.change(firstNameInput, { target: { value: 'Jimmy' } });
  fireEvent.change(lastNameInput, { target: { value: 'Ho' } });
  fireEvent.change(emailInput, { target: { value: 'jimmyvietho@gmail.com' } });
  
  expect(firstNameInput).toHaveValue('Jimmy')
  expect(lastNameInput).toHaveValue('Ho')
  expect(emailInput).toHaveValue('jimmyvietho@gmail.com')

  const button = screen.getByRole("button", { name: /submit/i });
  fireEvent.click(button);

  const newPerson = await screen.findByText(/Jimmy/i);
  expect(newPerson).toBeTruthy();

  expect(newPerson).toHaveTextContent(/Jimmy/);
})