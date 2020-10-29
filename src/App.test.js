import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("renders App without crashing", () => {
  render(<App />);
  const fName = screen.getByLabelText(/first name/i)
  const lName = screen.getByLabelText(/last name/i)
  const email = screen.getByLabelText(/email/i)
  const message = screen.getByLabelText(/message/i)

  expect(fName).toBeInTheDocument()
  expect(lName).toBeInTheDocument()
  expect(email).toBeInTheDocument()
  expect(message).toBeInTheDocument()

  expect(fName.value).toEqual('')
  fireEvent.change(fName, {target: {value: 'Bob'}})
  expect(fName.value).not.toEqual('')
  expect(fName.value.length).toBeLessThanOrEqual(3)

  expect(lName.value).toEqual('')
  fireEvent.change(lName, {target: {value: 'Douglas'}})
  expect(lName.value).not.toEqual('')

  expect(email.value).toEqual('')
  fireEvent.change(email, {target: {value: 'email@email.com'}})
  expect(email.value).not.toEqual('')
});
