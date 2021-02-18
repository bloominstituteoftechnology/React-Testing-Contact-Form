import React, { useState } from "react";
import { render, screen } from "@testing-library/react";
import ContactForm from './ContactForm';
import userEvent from '@testing-library/user-event';



//list of noticeable errors on form before test:
//❌pre-populated name for placeholder text, form doesn't clear upon submit, email doesnt require proper format, max chars for first name

test('render the ContactForm component without errors', () => {
  render(<ContactForm />);
})

test('allow user to fill out form and submit when all fields complete', async () => {
  render(<ContactForm />)

  //Arrange
  const firstNameInput = screen.getByLabelText(/First Name/i);
  const lastNameInput = screen.getByLabelText(/last Name/i);
  const emailInput = screen.getByLabelText(/email/i);
  const messageInput = screen.getByLabelText(/message/i);
  const submitButton = screen.getByRole('button', { name: /submit/i });

  //Act
  userEvent.type(firstNameInput, 'Daniel');
  userEvent.type(lastNameInput, 'Vazquez');
  userEvent.type(emailInput, 'testing@gmail.com');
  userEvent.type(messageInput, 'lets fix this broken form');
  userEvent.click(submitButton);

  //Assert
  const newFirstName = screen.findByText(/daniel/i);
  const newLastName = screen.findByText(/vazquez/i);
  const newEmail = screen.findByText(/testing@gmail.com/i);
  const newMessage = screen.findByText(/lets fix this broken form/i);


  newFirstName.then((element) => {
    expect(element).toBeInTheDocument();
  })

  newLastName.then((element) => {
    expect(element).toBeInTheDocument();
  })

  newEmail.then((element) => {
    expect(element).toBeInTheDocument();
  })

  newMessage.then((element) => {
    expect(element).toBeInTheDocument();
  })
  
})