import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders App without crashing", () => {
  render(<App />);
});

test('First name is rendering', () => {
  const { getByTestId } = render(<App />);
  const firstName = getByTestId('firstName-input');
  expect(firstName.textContent).toBe("");
});

test('Last name is rendering', () => {
  const { getByTestId } = render(<App />);
  const lastName = getByTestId('lastName-input');
  expect(lastName.textContent).toBe("");
});
