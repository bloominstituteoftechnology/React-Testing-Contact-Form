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

// test('first name appears', async () => {
//     await waitFor(() => {
//         expect(getByText(/first name/i)).toBeInTheDocument()
//     })

//     const nameinput = await findByText(/first name/i)
// })

test('form submit adds new items', () => {
    const { getByLabelText } = render(<ContactForm />)

    const firstNameInput = getByLabelText(/first Name/i);
    const lastNameInput = getByLabelText(/last Name/i);
    const emailInput = getByLabelText(/email/i);
    const messageInput = getByLabelText(/message/i);

    fireEvent.change(firstNameInput, { target: { value: 'testing firstName'} })
    fireEvent.change(lastNameInput, { target: { value: 'testing lastName'} })
    fireEvent.change(emailInput, { target: { value: 'testing email'} })
    fireEvent.change(messageInput, { target: { value: 'testing message'} })

    expect(firstNameInput.value).toBe('testing firstName');
    expect(lastNameInput.value).toBe('testing lastName');
    expect(emailInput.value).toBe('testing email');
    expect(messageInput.value).toBe('testing message');
})

test("button works", () => {
    const { getByTestId } = render(<ContactForm />);
    const button = getByTestId("submit");

    fireEvent.click(button);
    expect(button).toBeVisible();
})
