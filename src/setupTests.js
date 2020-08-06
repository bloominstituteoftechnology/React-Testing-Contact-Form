// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';
import 'mutationobserver-shim';


import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ContactForm from "./components/ContactForm";

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
    target: {value: "Suh dude!" }
  })
})