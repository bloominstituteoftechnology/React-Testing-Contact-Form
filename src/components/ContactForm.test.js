import React from "react";
import { render, fireEvent, getByText } from "@testing-library/react";
import ContactForm from "./ContactForm";
import { act } from "react-dom/test-utils";

test("inputs rendering", () => {
    const { getByLabelText } = render(<ContactForm />);

    getByLabelText(/first name/i);
    getByLabelText(/last name/i);
    getByLabelText(/email/i);
    getByLabelText(/message/i);
});

test("submit rendering", () => {
    const { getByText } = render(<ContactForm />);

    getByText(/submit/i);
});

test("can submit input", async () => {
    const { getByLabelText, getByText } = render(<ContactForm />);

    const firstName = getByLabelText(/first name/i);
    const lastName = getByLabelText(/last name/i);
    const email = getByLabelText(/email/i);
    const message = getByLabelText(/message/i);

    fireEvent.change(firstName, { target: { name: 'firstName', value: 'firstInput' } });
    fireEvent.change(lastName, { target: { name: 'lastName', value: 'lastInput' } });
    fireEvent.change(email, { target: { name: 'email', value: 'emailInput' } });
    fireEvent.change(message, { target: { name: 'message', value: 'messageInput' } });

    const submit = getByText(/submit/i);
    await act(async () => {
        fireEvent.click(submit);
    });

    getByText(/firstInput/i);
    getByText(/lastInput/i);
    getByText(/emailInput/i);
    getByText(/messageInput/i);
});