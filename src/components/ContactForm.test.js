import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ContactForm from "./ContactForm";

describe("Tests ContactForm", () => {
  test("App renders without errors", () => {
    render(<ContactForm />);
  });

  test("user can fill out and submit form", async () => {
    //Arrange
    render(<ContactForm />);

    //Act
    const firstNameInput = screen.getByLabelText(/First Name/i);
    const lastNameInput = screen.getByLabelText(/Last Name/i);
    const emailInput = screen.getByLabelText(/Email/i);
    const messageInput = screen.getByLabelText(/Message/i);
    const button = screen.getByRole("button", { name: /submit!/i });

    fireEvent.change(firstNameInput, {
      target: { name: "firstName", value: "Jane" }
    });
    fireEvent.change(lastNameInput, { target: { name: "lastName", value: "Doe" } });
    fireEvent.change(emailInput, {
      target: { name: "email", value: "simone.a.ballard@gmail.com" }
    });
    fireEvent.change(messageInput, {
        target: { name: "message", value: "hello world!" }
      });
    fireEvent.click(button);

  });
});
