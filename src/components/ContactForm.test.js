import React from 'react';
import { render, screen } from  "@testing-library/react";
import ContactForm from "./ContactForm";

test('renders ContactForm without errors ', ()=>{
    render(<ContactForm />)
})

test('the user can fill out all portions of the form and submit', async()=>{
    render(<ContactForm />)
    const firstNameInput = screen.getByLabelText(/firstName/i);
    const lastNameInput = screen.getByLabelText(/lastName/i);
    const emailInput = screen.getByLabelText(/name/i);
    const messageInput = screen.getByLabelText(/name/i);
    const nameInput = screen.getByLabelText(/name/i);


})