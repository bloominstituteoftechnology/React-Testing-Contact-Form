import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ContactForm from "./ContactForm";

test('renders ContactForm', () => {
  render(<ContactForm />);
})

test('user can fill out and submit the form', async()  => {
    render(<ContactForm />);
    // Use aria-label instead of name for jsx label
    const firstName = screen.getByLabelText(/firstName/i)
    const lastName = screen.getByLabelText(/Last/i)
    const email = screen.getByLabelText(/email/i)
    const message = screen.getByLabelText(/message/i)


    fireEvent.change(firstName, { target:  {value: 'eddy'}})
    fireEvent.change(lastName, {target: {value: 'smooth'}});
    fireEvent.change(email, {target: {value: 'roofs@gmail.com'}});
    fireEvent.change(message, { target:  {value: 'heres extra messages'}})

    expect(firstName).toHaveValue('eddy')
    expect(lastName).toHaveValue('smooth')
    expect(email).toHaveValue('roofs@gmail.com')
    expect(message).toHaveValue('heres extra messages')

    const button = screen.getByRole("button", { name: /submit/i });
    fireEvent.click(button);
   
    const aFirst = await screen.findAllByText(/First/i)
    const aLast = await screen.findAllByText(/last name/i)

    expect(aFirst).toBeTruthy();
    expect(aLast).toBeTruthy();


})
  