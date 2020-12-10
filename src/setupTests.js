// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import React from "react";
import { render, screen } from "@testing-library/jest-dom"
import "mutationobserver-shim";

import App from "./App";


// Find the fixed one in the components folder.

test("Ensures that all labels mounted successfully", async () => {
  //Arrange
  render(<App />);
  //Act
  const fName = screen.getByText(/First Name*/);
  const lName = screen.getByLabelText(/Last Name*/);
  const email = screen.getByText(/email*/i);
  const message = screen.getByLabelText(/message/i);
  //Assert
  expect(fName, lName, email, message).toBeInTheDocument();
});
