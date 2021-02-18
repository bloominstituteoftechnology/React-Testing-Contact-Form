import React from 'react';
// import * as rtl from '@testing-library/react'; // don't need
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';

import ContactForm from './ContactForm';

test('renders ContactForm without errors', () => {
  // Arrange
  render(<ContactForm />);

  // Act - Testing Labels
  const firstNameLabel = screen.getByText(/First Name/i);
  const lastNameLabel = screen.getByText(/Last Name/i);
  const emailLabel = screen.getByText(/email/i);
  const messageLabel = screen.getByText(/message/i);
  // Assert
  expect(firstNameLabel).toBeInTheDocument();
  expect(lastNameLabel).toBeInTheDocument();
  expect(emailLabel).toBeInTheDocument();
  expect(messageLabel).toBeInTheDocument();

  // console.log(screen.debug());

  // Act - Testing Inputs
  const firstNameInput = screen.getByPlaceholderText(/edd/i);
  const lastNameInput = screen.getByPlaceholderText(/burke/i);
  const emailInput = screen.getByPlaceholderText(/bluebill1049@hotmail.com/i);
  // Assert
  expect(firstNameInput).toBeVisible();
  expect(lastNameInput).toBeVisible();
  expect(emailInput).toBeVisible();

  // get the message & button elements here ??
  // const message = screen.getByRole("textarea", { name: /message/i });


  // const messageTextArea = screen.getByTestId(/message/i);
  // console.log("message:", message)



  // expect(element).toBeInTheDocument(); // jest-dom matcher
  // expect(element).toBeTruthy(); // jest matcher
  // expect(element).toBeInTheDocument(); // jest-dom matcher
  // expect(element).toBeVisible(); // jest-dom matcher


  // console.log(screen.debug());

});

test('when a user fills out and submits the form, a new user is created and displayed', async () => {
  // Arrange - render component & get access to form elements
  render(<ContactForm/>);

  const firstNameInput = screen.getByLabelText(/First Name/i);
  const lastNameInput = screen.getByLabelText(/Last Name/i);
  const emailInput = screen.getByLabelText(/email/i);
  const messageInput = screen.getByLabelText(/message/i);
  const submitButton = screen.getByTestId(/submit-button/i);

  // Act - type into form, filling out all form fields, and submit
  act(() => {
    /* fire events that update state */
    userEvent.type(firstNameInput, "Rhiannon");
    userEvent.type(lastNameInput, "Stanford");
    userEvent.type(emailInput, "1234@mail.com");
    userEvent.type(messageInput, "Aloha");
    userEvent.click(submitButton);
  });

  // Assert - make sure the new user is created & displayed
  const newUser = screen.findByText(/Rhiannon/i);

  newUser.then((element) => {
    expect(element).toBeTruthy();
    expect(element).toBeInTheDocument();
    expect(element).toBeVisible();
  }); // this comes after the API fetch

});



test('displays the text in the firstNameInput while typing', () => {
  render(<ContactForm />);

  const firstNameInput = screen.getByPlaceholderText(/edd/i);

  expect(firstNameInput.value).toBe("");
  fireEvent.change(firstNameInput, { target: { value: "Rhiannon" }});
  expect(firstNameInput.value).toBe("Rhiannon");
  // expect(screen.queryByText(/Looks like there was an error: maxLength/)).toBeInTheDocument();

  expect(screen.queryByText(/Looks like there was an error: maxLength/i)).toBeNull();
});

test('displays the text in the lastNameInput while typing', () => {
  render(<ContactForm />);

  const lastNameInput = screen.getByPlaceholderText(/burke/i);

  expect(lastNameInput.value).toBe("");
  fireEvent.change(lastNameInput, { target: { value: "Stanford" }});
  expect(lastNameInput.value).toBe("Stanford");
});

test('displays the text in the emailInput while typing', () => {
  render(<ContactForm />);

  const emailInput = screen.getByPlaceholderText(/bluebill1049@hotmail.com/i);

  expect(emailInput.value).toBe("");
  fireEvent.change(emailInput, { target: { value: "1234@mail.com" }});
  expect(emailInput.value).toBe("1234@mail.com");
});


