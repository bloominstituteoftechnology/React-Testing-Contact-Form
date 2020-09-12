import React from "react";
import { fireEvent, getByTestId, render, screen } from "@testing-library/react";
import App from "./App";
import ContactForm from "./components/ContactForm";
import { act } from "react-dom/test-utils";

test("renders App without crashing", () => {
  render(<App />);
  const container = render(<App />);
  // console.log(container);
});

test("renders ContactForm", () => {
  render(<ContactForm />);
});

it("contains first name, last name, email and message forms", () => {
  const { getByText } = render(<App />);
  // console.log(getByText);

  getByText(/First Name*/i);
  getByText(/Last Name*/i);
  getByText(/Email*/i);
  getByText(/Message/i);
});

test("has a submit button", () => {
  // Arrange
  const { getByText } = render(<App />);

  // Act
  const submitButton = getByText(/submit/i);
  // console.log(submitButton);
  expect(submitButton).toBeInTheDocument();
});

test("First Name should accept more than 3 letters", () => {
  const { getByTestId } = render(<App />);

  const firstName = getByTestId("first-name");
  const error = screen.getByText(/error/i);
  fireEvent.change(firstName, { target: { value: "1234" } });
  fireEvent.click(getByTestId("submit"));

  expect(error).not.toBeInTheDocument();
});
