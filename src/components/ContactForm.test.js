import React from "react";
import ContactForm from "./ContactForm";
import {render, fireEvent} from "@testing-library/react";


test("renders form", () => {
    render(<ContactForm />)
});

test("first and last name, email and message are being rendered", () => {
    const { getByLabelText } = render(<ContactForm />)
    getByLabelText(/first Name/i);
});

