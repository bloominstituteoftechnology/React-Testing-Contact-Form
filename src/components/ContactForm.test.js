import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import ContactForm from './ContactForm'


test('renders forms without crashing', () => {
    render(<ContactForm />)
})

test('user can fill out and submit form', async () => {
    render(<ContactForm />);

    // query the virtual DOM for each input field, so we can work with them
    const firstNameInput = screen.getByPlaceholderText(/edd/i)
    const lastNameInput = screen.getByPlaceholderText(/burke/i)
    const emailInput = screen.getByPlaceholderText(/hotmail/i)
    const messageInput = screen.getByLabelText(/message/i)

    // fill out the form
    fireEvent.change(firstNameInput, { target: { value: "dwaine" } });
    fireEvent.change(lastNameInput, { target: { value: "jade" } });
    fireEvent.change(emailInput, { target: { value: "dwaine@gmail.com" } });
    // fireEvent.change(messageInput, { target: { value: "he works hard for the money" } });

    // assert that the form inputs contain the values we typed in
    expect(firstNameInput).toHaveValue("dwaine")
    expect(lastNameInput).toHaveValue("jade")
    expect(emailInput).toHaveValue("dwaine@gmail.com")
    // expect(messageInput).toHaveValue("he works hard for the money")

    // submit the form (state changes can happen asynchronously)
    const button = screen.getByRole("button", { name: /submit/i });
    fireEvent.click(button)

    // assert that the animal was added to the list
    const newUser = await screen.findByText(/dwaine/i);
    expect(newUser).not.toHaveStyle({ display: 'none' });
})