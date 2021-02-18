import React, { useState } from "react";
import { render, screen } from "@testing-library/react";
import ContactForm from './ContactForm';
import userEvent from '@testing-library/user-event';



//list of errors on form:
//pre-populated name for placeholder text, form doesn't clear upon submit, email doesnt require proper format

test('render the ContactForm component without errors', () => {
  render(<ContactForm />);
})

test('allow user to fill out form and submit when all fields complete', async () => {
  render(<ContactForm />)
  const firstNameInput = screen.getByLabelText(/First Name/i);
  const lastNameInput = screen.getByLabelText(/last Name/i);
  const emailInput = screen.getByLabelText(/email/i);
  const messageInput = screen.getByLabelText(/message/i);
  const submitButton = screen.getByRole('button', { name: /submit/i });

  userEvent.type(firstNameInput, 'Dan');
  userEvent.type(lastNameInput, 'Vazquez');
  userEvent.type(emailInput, 'da.vazquez@yahoo.com');
  userEvent.type(messageInput, 'lets fix this broken form');
  
})