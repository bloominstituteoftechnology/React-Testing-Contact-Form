import React from "react";
import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import ContactForm from "./ContactForm"

test("testing form", () => {
    render(<ContactForm />)

    const firstName = screen.getByLabelText((/first name/i));
    const lastName=screen.getByLabelText((/last name/i));
    const email = screen.getByLabelText(/email/i);
    const message = screen.getByLabelText(/message/i);
})