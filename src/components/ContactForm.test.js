import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ContactForm from "./ContactForm";

test("renders ContactForm without crashing", () => {
  // Arrange
  render(<ContactForm />);
});

test("user can fill out and submit form", async () => {
  // Arrange
  render(<ContactForm />);

  // Act
  const firstNameInput = screen.getByTestId("firstNameField");
  const lastNameInput = screen.getByTestId("lastNameField");
  const emailInput = screen.getByTestId("emailField");
  const messageInput = screen.getByTestId("messageField");
  const button = await screen.getByRole("button", { name: /submit/i });

  fireEvent.change(firstNameInput, {
    target: {
      name: "firstName",
      value: "dummyFirst",
    },
  });
  fireEvent.change(lastNameInput, {
    target: {
      name: "lastName",
      value: "dummyLast",
    },
  });
  fireEvent.change(emailInput, {
    target: {
      name: "email",
      value: "email@email.com",
    },
  });
  fireEvent.change(messageInput, {
    target: {
      name: "message",
      value: "Hi!12345",
    },
  });
  fireEvent.click(button);

  // Assert
  // expect(screen.getByDisplayValue(firstNameInput)).toBe(true);
});
