import React from 'react';
import { render, fireEvent } from "@testing-library/react";
import ContactForm from "./ContactForm";

test('test for form labels', () => {
    const {getByLabelText} = render(<ContactForm/>)

    getByLabelText(/first name*/i);
    getByLabelText(/last name*/i);

})

test('testing form submit', () => {
    const {getByLabelText, getByText} = render(<ContactForm/>)
    // const firstNameInput = getByText(/first name/i)
    // const LastNameInput = getByLabelText(/Last Name/i)
    // console.log(render(<ContactForm/>))
    const firstNameInput = getByLabelText(/First Name*/i)
    const lastNameInput = getByLabelText(/Last Name*/i)
    const emailInput =  getByText(/email/i)
    const message = getByLabelText(/message/i)

})

 test('Changing inputs', () => {
    const {getByLabelText, getByTestId} = render(<ContactForm/>)


    const firstNameInput = getByLabelText(/First Name*/)
    const emailInput =  getByLabelText(/email/i)
    
    fireEvent.change(firstNameInput, {target: { value: "Test" },});
    
    expect(firstNameInput.value).toBe("Test");


    fireEvent.change(emailInput, {target: { value: "test@email.com" },});

    expect(emailInput.value).toBe("test@email.com");

 })



