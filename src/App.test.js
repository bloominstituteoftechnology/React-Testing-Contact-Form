import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";


test("renders App without crashing", () => {
  render(<App />);
});


test('user can fill out form', async () => {
    render(<App />)

const firstNameInput = screen.getByLabelText(/First Name/i);
const lastNameInput = screen.getByLabelText(/Last Name/i);
const emailInput = screen.getByLabelText(/email/i);

fireEvent.change (firstNameInput, {target: {value: 'edd'}})
fireEvent.change (lastNameInput, {target: {value: 'littlefield'}})
fireEvent.change (emailInput, {target: {value: 'gmail'}})

expect(firstNameInput).toHaveValue('edd')
expect(lastNameInput).toHaveValue('littlefield')
expect(emailInput).toHaveValue('gmail')

const button = screen.getByRole("button", {name: /submit/i })
fireEvent.click(button)

const newName = await screen.findByText(/edd/i);
  expect(newName).toBeTruthy();
  expect(newName).toHaveTextContent(/edd/);

  const newLastName = await screen.findByText(/littlefield/i);
  expect(newLastName).toBeTruthy();
  expect(newLastName).toHaveTextContent(/littlefield/);

  const newEmail = await screen.findByText(/gmail/i);
  expect(newEmail).toBeTruthy();
  expect(newEmail).toHaveTextContent(/gmail/);

})

// fireEvent.change(firstNameInput, {target: {value: 'edd'}})

//Input fields work
//submit button works
//renders info to page




