import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event"

import ContactForm from "./ContactForm";

test('renders ContactForm component without errors', () => {
    render(<ContactForm />);
})

test('when user fills form and submits, the set of data will be rendered to screen', () => {

    // Arrange - render  the component  and get access to  the form elements in the DOM
    render(<ContactForm />);

    const firstNameInput = screen.getByLabelText(/first name/i);
    const lastNameInput = screen.getByLabelText(/last name/i);
    const emailInput = screen.getByLabelText(/email/i);
    const messageInput = screen.getByLabelText(/message/i);
    const submitButton = screen.getByRole("button", {name: /submit/i})

    // Act

    userEvent.type(firstNameInput, "Allison");
    userEvent.type(lastNameInput, "Castaneda");
    userEvent.type(emailInput, "allraec@email.com");
    userEvent.type(messageInput, "henlo");
    userEvent.click(submitButton);

    expect(firstNameInput).toHaveValue("Allison");
    expect(lastNameInput).toHaveValue("Castaneda");
    expect(emailInput).toHaveValue("allraec@email.com");
    expect(messageInput).toHaveValue("henlo");

})