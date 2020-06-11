import React from "react";
import ContactForm from "./ContactForm";
import {render, fireEvent} from "@testing-library/react";

test("first and last name, email and message are being rendered", () => {
    const { getByLabelText } = render(<ContactForm />);
    getByLabelText(/first Name/i);
    getByLabelText(/last Name/i);
    getByLabelText(/email/i);
    getByLabelText(/message/i);
});

