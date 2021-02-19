import React from 'react';
import { findByText, render, screen } from  "@testing-library/react";
import ContactForm from "./ContactForm";
import  userEvent  from "@testing-library/user-event";

test('renders ContactForm without errors ', ()=>{
    render(<ContactForm />)
})

test('the user can fill out all portions of the form and submit', async()=>{
    render(<ContactForm />)
    // const firstNameInput = screen.getByLabelText(/firstName/i);
    const lastNameInput = screen.getByLabelText(/lastName/i);
    const emailInput = screen.getByLabelText(/email/i);
    const messageInput = screen.getByLabelText(/message/i);
    const submitButton = screen.getByRole('submit', {name: /submit/i});

    // userEvent.type(firstNameInput, "Joe");
    userEvent.type(lastNameInput, "Baker");
    userEvent.type(emailInput, "JB123@email.com");
    userEvent.type(messageInput, "Hello World")
    userEvent.click(submitButton)

    const newUser = findByText
})