import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ContactForm from "./components/ContactForm";

test("testing if my info is working", async () => {
  render(<ContactForm />);

  const firstNameInput = await screen.getByLabelText(/first name/i);
  const lastNameInput = await screen.getByLabelText(/last name/i);
  const emailInput = await screen.getByLabelText(/email/i);
  const messageInput = await screen.getByLabelText(/message/i);
  const submitInput = await screen.getByRole("button", { name: /submit/i });

  fireEvent.change(firstNameInput, { target: { value: "Will" } });
  fireEvent.change(lastNameInput, { target: { value: "Wearing" } });
  fireEvent.change(emailInput, { target: { value: "willwearing@gmail.com" } });
  fireEvent.change(messageInput, {
    target: { value: "test test test" },
  });
  fireEvent.click(submitInput);

  await screen.findByText(/will/i);
  await screen.findByText(/wearing/i);
  await screen.findByText(/willwearing@gmail.com/i);
  await screen.findByText(/test test test/i);
});
