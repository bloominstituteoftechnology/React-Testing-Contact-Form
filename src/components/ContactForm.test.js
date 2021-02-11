import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ContactForm from "./ContactForm";
import React from "react";

//each individual test NEEDS a render in it to work.

test("Contact Form is rendering w/ button and inputs", async () => {
  render(<ContactForm />);

  // make sure inputs work on form including (get By role) for button

  const firstNameInput = screen.getByLabelText(/First Name/i);
  const lastNameInput = screen.getByLabelText(/Last Name/i);
  const emailInput = screen.getByLabelText(/email/i);
  const messageInput = screen.getByLabelText(/message/i);

  //user events to test the actual user inputs

  userEvent.type(firstNameInput, "Brandon");
  userEvent.type(lastNameInput, "Santos");
  userEvent.type(emailInput, "brandon@gmail.com");
  userEvent.type(messageInput, "I love you coding");

  const button = screen.getByRole("button");
  userEvent.click(button);

  const newFirstName = await screen.findByText(/Brandon/i);
  expect(newFirstName).toBeInTheDocument();

  const newLastName = await screen.findByText(/santos/i);
  expect(newLastName).toBeInTheDocument();

  const newEmail = await screen.findByText(/brandon@gmail.com/i);
  expect(newEmail).toBeInTheDocument();

  const newMessageInput = await screen.findByText(/I love you coding/i);
  expect(newMessageInput).toBeInTheDocument();
});

// test("Contact form renders", () => {
//   render(<ContactForm />);
// });

// test("Form Renders and Inputs and Submit work", async () => {
//   render(<ContactForm />);

//   const firstNameInput = screen.getByLabelText(/First Name*/i);
//   const lastNameInput = screen.getByLabelText(/last name*/i);
//   const emailInput = screen.getByLabelText(/email*/i);
//   const messageInput = screen.getByLabelText(/message*/i);

//   userEvent.type(firstNameInput, "Brandon");
//   userEvent.type(lastNameInput, "Santos");
//   userEvent.type(emailInput, "Brandonx1123@gmail.com");
//   userEvent.type(messageInput, "It is a good day to test right ?");

//   const button = screen.getByRole("button");
//   userEvent.click(button);
// });
