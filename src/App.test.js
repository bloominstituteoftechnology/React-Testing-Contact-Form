import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders App without crashing", () => {
  render(<App />);
});

test('first name is rendering', () => {
  const { getByTestId } = render(<App />);
  const firstName = getByTestId('firstName-input');
  expect(firstName.textContent).toBe("");
});

test('last name is rendering', () => {
  const { getByTestId } = render(<App />);
  const lastName = getByTestId('lastName-input');
  expect(lastName.textContent).toBe("");
});

test('email is rendering', () => {
  const { getByTestId } = render(<App />);
  const email = getByTestId('email-input');
  expect(email.textContent).toBe("");
});

test('message textarea is rendering', () => {
  const { getByTestId } = render(<App />);
  const message = getByTestId('message-textarea');
  expect(message.textContent).toBe("");
});