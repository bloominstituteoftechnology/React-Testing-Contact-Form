import React from "react"
import App from "../App"
import ContactForm from "../components/ContactForm"
import {render, screen} from "@testing-library/react"
import userEvent from "@testing-library/user-event"

test("Use the form without errors", async () => {
    //arrange
    render(<ContactForm/>)

    //act
    const firstName = screen.getByLabelText(/first name/i)
    const lastName = screen.getByLabelText(/last name/i)
    const email= screen.getByLabelText(/email/i)
    const message = screen.getByLabelText(/message/i)

    userEvent.type(firstName, "Declan");
    userEvent.type(lastName, "Casey");
    userEvent.type(email, "dpcaseyboy99@gmail.com");
    userEvent.type(message, "Hellow World!");

    const button = screen.getByRole('button');
    userEvent.click(button);

    const user = await screen.findByText(/declan/i);
    expect(user).toBeInTheDocument();
})