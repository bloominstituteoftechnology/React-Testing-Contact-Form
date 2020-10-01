import React from "react";
import { render, getByText } from "@testing-library/react";
import App from "./App";

test("renders App without crashing", () => {
  render(<App />);
});

test('first and last name, email, message render', () => {
  const {getByText} = render(<App/>);
  getByText(/First Name/i);
  getByText(/Last Name/i);
  getByText(/email/i);
  getByText(/message/i);
});

test('text fields return a string', () => {
  const {getByTestId} = render(<App/>);
  const firstName = getByTestId('first-name');
  expect(firstName.textContent).toBe('');
  //arrange
  //act
  //assert
});

test('submit button works', () => {
 
  
  //arrange
    const {getByTestId} = render(<App/>);
  //act
    const submitButton = getByTestId(/submit/i);
    console.log(submitButton.textContent);
  //assert
    expect(submitButton.textContent).toEqual("");
});