import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ContactForm from "./ContactForm";
import React from "react";

test("Contact form renders", () => {
  render(<ContactForm />);
});
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
  userEvent.type(messageInput, "good day to code");

  const button = screen.getByRole("button");
  userEvent.click(button);

  //   const newFirstName = await screen.findByText(/Brandon/i);
  //   expect(newFirstName).toBeInTheDocument();

  //   const newLastName = await screen.findByText(/santos/i);
  //   expect(newLastName).toBeInTheDocument();

  //   const newEmail = await screen.findByText(/brandon@gmail.com/i);
  //   expect(newEmail).toBeInTheDocument();

  //   const newMessageInput = await screen.findByText(/good day to code/i);
  //   expect(newMessageInput).toBeInTheDocument();
});

//gotta test new inputs later
