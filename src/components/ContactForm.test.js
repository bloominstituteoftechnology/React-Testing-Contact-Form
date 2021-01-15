import React from "react";
import ContactForm from "./ContactForm";
import { render, fireEvent, screen, userEvent } from "@testing-library/react";

test("testing", () => {
  render(<ContactForm />);

  const firstName = screen.getByLabelText("First Name*");
  const lastName = screen.getByLabelText("Last Name*");
  const email = screen.getByLabelText("Email*");
  const textbox = screen.getByRole("textbox");
  const submit = screen.queryByText("submit");

  fireEvent.change(firstName, {
    target: { name: "firstName", value: "Jen" },
  });
  fireEvent.change(lastName, {
    target: { name: "lastName", value: "Stewart" },
  });
  fireEvent.change(email, {
    target: { name: "email", value: "jstewart8053@gmail.com" },
  });
});

test("testing", () => {
  render(<ContactForm />);
  const firstName1 = screen.getByLabelText("First Name*");
});
