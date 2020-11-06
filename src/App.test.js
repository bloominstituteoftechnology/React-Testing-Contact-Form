import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ContactForm from "./components/ContactForm"
import { act } from "react-dom/test-utils"
import App from "./App";

test("renders App without crashing", () => {
  render(<App />);
});

test('firstName validilty', () =>{
  const {getByTestId } = render(<ContactForm />)
  const firstNameInput = getByTestId("Edd")
  fireEvent.change(firstNameInput, {target:{value:"Kato"}})
  expect(firstNameInput).toHaveValue("Kato")
})

test('LastName validilty', () =>{
  const {getByTestId } = render(<ContactForm />)
  const lastNameInput = getByTestId("Burke")
  fireEvent.change(lastNameInput, {target:{value:"Hernandez"}})
  expect(lastNameInput).toHaveValue("Hernandez")
})

test('Email validilty', () =>{
  const {getByTestId } = render(<ContactForm />)
  const emailInput = getByTestId("email")
  fireEvent.change(emailInput, {target:{value:"email@email.com"}})
  expect(emailInput).toHaveValue("email@email.com")
})