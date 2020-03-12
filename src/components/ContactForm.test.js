import React from "react";
import { render, getByLabelText, fireEvent } from "@testing-library/react";
import ContactForm from "./ContactForm";

test("renders App without crashing", () => {
  render(<ContactForm />);
});
test('testing inputs on contact form', () => {
const {getByLabelText} = render(<ContactForm/>)
  const firstInput = getByLabelText(/first name/i)
  const lastInput = getByLabelText(/last name/i)
  const email = getByLabelText(/email/i)
  const message = getByLabelText(/message/i)

  fireEvent.change(firstInput, {target: {name: 'firstName', value: 'River'}})
  fireEvent.change(lastInput, {target: {name: 'lastName', value:'padgett'}})
  fireEvent.change(email, {target: {name: 'email', value:'padgett@gmail'}})
  fireEvent.change(message, {target: {name: 'message', value:'padgett'}})
});
