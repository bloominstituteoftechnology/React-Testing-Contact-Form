import React from "react";
import ReactDOM from "react-dom";
import ContactForm from "./ContactForm";
import {render, fireEvent, screen, waitFor, findByText} from "@testing-library/react";

// test 1, if contact form renders


test("renders form", () => {
    render(<ContactForm />)
});

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<ContactForm />, div)
})

// test 2, if labels are being rendered

test("first and last name, email and message are being rendered", () => {
    const { getByLabelText } = render(<ContactForm />)
     getByLabelText(/first name/i);
    getByLabelText(/last Name/i);
     getByLabelText(/email/i);
     getByLabelText(/message/i);
});

// to see if there's a bug...

// screen.debug(screen.getByText(/first name/i));

// testing for appearance

test('first name appears', async () => {
    await waitFor(() => {
        expect(getByText(/first name/i)).toBeInTheDocument()
    })

    const nameinput = await findByText(/first name/i)
})

test('submit adds new inputs', () => {
    const {getByLabelText} = render(<ContactForm />)
    const firstNameInput =  getByLabelText(/first name/i);
    const lastNameInput = getByLabelText(/last Name/i);
     const emailInput = getByLabelText(/email/i);
     const messageInput = getByLabelText(/message/i);

     fireEvent.change(firstNameInput, {target: {value: 'test first name'}});
    fireEvent.change(lastNameInput, {target: {value: 'test last name'}});
    fireEvent.change(emailInput, {target: {value: 'test email input'}});
    fireEvent.change(messageInput, {target: {value: 'test message input'}});

    expect(firstNameInput.value).toBe('test first name');
})

