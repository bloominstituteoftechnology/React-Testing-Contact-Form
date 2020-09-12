import React from "react";
import {
  fireEvent,
  getByTestId,
  getByText,
  render,
  screen,
} from "@testing-library/react";
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
  getByText("Email*");
  getByText("Message");
});

test("has a submit button", () => {
  // Arrange
  const { getByText } = render(<App />);

  // Act
  const submitButton = getByText(/submit/i);
  // console.log(submitButton);
  expect(submitButton).toBeInTheDocument();
});

test("Input fields should accept input", () => {
  render(<ContactForm />);

  const firstNameInput = screen.getByLabelText(/first name/i);
  const lastNameInput = screen.getByLabelText(/last name/i);
  const emailInput = screen.getByLabelText(/email/i);
  const messageInput = screen.getByLabelText(/message/i);
  const submit = screen.getByText(/submit/i);
  fireEvent.change(firstNameInput, { target: { value: "Tony" } });
  fireEvent.change(lastNameInput, { target: { value: "Sorensen" } });
  fireEvent.change(emailInput, { target: { value: "tony48853@gmail.com" } });
  fireEvent.change(messageInput, { target: { value: "random text" } });
  fireEvent.click(submit);

  expect(screen.getByText(/tony/i)).toBeInTheDocument();
  expect(screen.getByText(/sorensen/i)).toBeInTheDocument();
  expect(screen.getByText(/tony48853@gmail.com/i)).toBeInTheDocument();
  expect(screen.getByText(/random text/i)).toBeInTheDocument();
});
