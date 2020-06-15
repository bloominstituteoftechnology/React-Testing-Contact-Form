import React from "react";
import { render, fireEvent, getByLabelText } from "@testing-library/react";
import App from "./App";
import ContactForm from "./components/ContactForm";

test("renders App without crashing", () => {
  render(<App />);
});

test("renders form", () => {
  render(<ContactForm />);
});

test("shows labels", () => {
  const { getByLabelText } = render(<App />);
  const firstNameLabel = getByLabelText(/first name/i);
  const lastNameLabel = getByLabelText(/last name/i);
  const emailLabel = getByLabelText(/email/i);
  const textBoxLabel = getByLabelText(/message/i);
  expect(firstNameLabel).toBeVisible();
  expect(lastNameLabel).toBeVisible();
  expect(emailLabel).toBeVisible();
  expect(textBoxLabel).toBeVisible();
});

test("button exist and work", () => {
  const { getByTestId, getByLabelText } = render(<ContactForm />);
  const button = getByTestId("button");
  const firstNameLabel = getByLabelText(/first name/i);
  const lastNameLabel = getByLabelText(/last name/i);
  const emailLabel = getByLabelText(/email/i);
  const textBoxLabel = getByLabelText(/message/i);

  fireEvent.change(firstNameLabel, { target: { value: "Ryan" } });
  fireEvent.change(lastNameLabel, { target: { value: "Mersmann" } });
  fireEvent.change(emailLabel, { target: { value: "sample@gmail.com" } });
  fireEvent.change(textBoxLabel, { target: { value: "type your message here" } });
  fireEvent.click(button);

  expect(firstNameLabel.value).toBe("Ryan");
  expect(lastNameLabel.value).toBe("Mersmann");
  expect(emailLabel.value).toBe("sample@gmail.com");
  expect(textBoxLabel.value).toBe("type your message here");

  expect(button).toBeVisible();
});