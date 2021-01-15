import React from "react";
import { render, screen, } from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import ContactForm from "./ContactForm"
import { act } from "react-dom/test-utils"

test("renders without errors", async () => {
  render(<ContactForm />);
  //checks if we have an error on all of App.
})

test('user can fill out and submit form', async () => {
  //arrange: setup our react component
  render(<ContactForm />)
  //app: submit our form: 
  
  const firstNameInput = screen.getByLabelText(/first name/i)
  const lastNameInput = screen.getByLabelText(/last name/i)
  const emailInput = screen.getByLabelText(/email/i)
  const messageInput = screen.getByLabelText(/message/i)

  // act(() => {
    userEvent.type(firstNameInput, "jane")
  userEvent.type(lastNameInput, "doe")
  userEvent.type(emailInput, "janedoe@aol.com")
  userEvent.type(messageInput, "lorem ipsum")
  // })
  
  
  
  const button = screen.getByRole("button")
  userEvent.click(button)

  //assert: test to see submit works
  // find our submitted info

  const newFirstName = await screen.findByText(/jane/i)
  const newLastName = await screen.findByText(/doe/i)
  expect(newFirstName).toBeInTheDocument();
  expect(newLastName).toBeInTheDocument();
})