import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ContactForm from "./ContactForm";
import { act } from "react-dom/test-utils";

test("Renders form without errors", () => {
  render(<ContactForm />);
});

test("Adds person to list when form is filled out and submitted", async() => {
  
    render(<ContactForm />);

    const firstNameInput = await screen.findByLabelText(/First Name/i);
    const lastNameInput = await screen.findByLabelText(/Last Name/i);
    const emailInput = await screen.findByLabelText(/Email/i);
    const messageInput = await screen.findByLabelText(/Message/i);

    
    fireEvent.change(firstNameInput, { target: { value: "Ole" } });
    fireEvent.change(lastNameInput, { target: { value: "M" } });
    fireEvent.change(emailInput, { target: { value: "oleg@oleg.com" } });
    fireEvent.change(messageInput, { target: { value: "Hello, I'm here!" } });
    // query for the submit button
    const submitBtn = screen.getByRole("button", { name: /submit/i });
    // click on the submit button
    await act(async() => fireEvent.click(submitBtn))
  
})

