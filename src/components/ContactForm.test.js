import App from '../App'
import ContactForm from './ContactForm'
import React from 'react'

import { render, screen, fireEvent } from "@testing-library/react";


test("renders correctly with first name", () => {
  render(<ContactForm />);

  const firstNameInput = screen.getByTestId(/firstName/i)
  const lastNameInput = screen.getByTestId(/lastName/i)
  const emailInput = screen.getByTestId(/email/i)
  const messageInput = screen.getByTestId(/message/i)


  fireEvent.change(firstNameInput, {
    target: {value: "Parker" }
  });
  fireEvent.change(lastNameInput, {
    target: {value: "Williams" }
  });
  fireEvent.change(emailInput, {
    target: {value: "parker@parker.com" }
  });
  fireEvent.change(messageInput, {
    target: {value: "Suh Dude!" }
  });



});