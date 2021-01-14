import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ContactForm from "./ContactForm";
import { act } from "react-dom/test-utils";

test("render Contact form without errors", async () => {
  render(<ContactForm />);
});

test("renders without errors", async () => {
  render(<ContactForm />);

  const firstNameInput = screen.getByLabelText(/First Name/i);
  const lastNameInput = screen.getByLabelText(/Last Name/i);
  const emailInput = screen.getByLabelText(/Email/i);
  const messageInput = screen.getByLabelText(/Message/i);
  //// type into unput field/////

  userEvent.type(firstNameInput, "daniel");
  userEvent.type(lastNameInput, "wright");
  userEvent.type(emailInput, "daniel.wright1207@gmail.com");
  userEvent.type(messageInput, "is this working");

  const button = screen.getByRole("button");
  userEvent.click(button);

  const newName = await screen.findByText(/daniel/i);
  const newLastName = await screen.findByText(/wright/i);
  const newEmail = await screen.findByText(/daniel.wright1207@gmail.com/i);
  const newMessage = await screen.findByText(/is this working/i);

  expect(newName).toBeInTheDocument();
  expect(newLastName).toBeInTheDocument();
  expect(newEmail).toBeInTheDocument();
  expect(newMessage).toBeInTheDocument();
});
