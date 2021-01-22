import userEvent from '@testing-library/user-event';
import React from 'react';
import { render, screen } from '@testing-library/react';
import ContactForm from './ContactForm';

test("renders ContactForm", () => {
    render(<ContactForm/>);
});

test("Can Fill in the form and display", () =>{
    render(<ContactForm/>);

    const firstNameInput = screen.getByPlaceholderText('Edd');
    const lastNameInput = screen.getByPlaceholderText('Burke');
    const emailInput = screen.getByPlaceholderText('bluebill1049@hotmail.com');
    const messageInput = screen.getByLabelText(/message/i);

    userEvent.type(firstNameInput, "Bipin");
    userEvent.type(lastNameInput, "Shrestha");
    userEvent.type(emailInput, "iambpn.shrestha@gmail.com");
    userEvent.type(messageInput, "Hello Everyone !!!!");

    expect(firstNameInput).toHaveValue("Bipin");
    expect(lastNameInput).toHaveValue("Shrestha");
    expect(emailInput).toHaveValue("iambpn.shrestha@gmail.com");
    expect(messageInput).toHaveValue("Hello Everyone !!!!");

});