import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";

import 'mutationobserver-shim';

test("renders App without crashing", () => {
  render(<App />);
});

test('first name* is on form', async () => {
  const {getByText} = render(<App />);
  const firstName = getByText(/first name*/i);
  expect(firstName).toBeInTheDocument();
});

test('last name is on the form', () => {
  const {getByText} = render(<App />);
  const lastName = getByText(/last name*/i);
  expect(lastName).toBeInTheDocument();
});

test('email is on the form', () => {
  const {getByText} = render(<App />);
  const email = getByText(/email*/i);
  expect(email).toBeInTheDocument();
});