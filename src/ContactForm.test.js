import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ContactForm from "./components/ContactForm";

test("renders without errors", () => {
  render(<ContactForm />);
});

test("User can fill out and submit new entry", () => {
  // render
  render(<ContactForm />);
  // query for all inputs
  const firstNameInput = screen.getByLabelText(/First Name/i);
  const lastNameInput = screen.getByLabelText(/Last Name/i);
  const emailInput = screen.getByLabelText(/Email/i);
  const messageInput = screen.getByLabelText(/message/i);

  // type into inputs
  userEvent.type(firstNameInput, "Onaje");
  userEvent.type(lastNameInput, "Oladuwa");
  userEvent.type(emailInput, "me@me.com");
  userEvent.type(messageInput, "Let's Rock!");

  // query for the button
  const button = screen.getByRole("button", { name: /submit/i });

  // click button
  userEvent.click(button);

  // query for the text "Onaje"
  const formText = screen.queryByText(/Onaje Oladuwa/i);

  // assert
  // expect(formText).toBeInTheDocument();
});
