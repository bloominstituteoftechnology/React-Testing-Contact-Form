import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import  ContactForm  from './ContactForm';

test ('renders Contact Form without errors', ()=>{
    render(<ContactForm />);
});

test ('users can fill out Contact Form and submit it', ()=>{
    // Arrange
    render(<ContactForm />);

    //Act
    //query for each input field

    const firstNameInput = screen.getByLabelText(/first name/i);
    //This test failed without add an id to the input field.
    const lastNameInput = screen.getByLabelText(/last name/i);
    const emailInput = screen.getByLabelText(/email/i);
    //this test failed without changing the input field.
    const messageInput = screen.getByLabelText(/message/i);
    const submit = screen.getByRole(/submit/i);
    //add text to the fields
    //fill out the form
    userEvent.type(firstNameInput, 'Crystal');
    userEvent.type(lastNameInput, 'Martin');
    userEvent.type(emailInput, 'drcrystalm@gmail.com');
    userEvent.type(messageInput, 'Hope this works');

    //click the button
    userEvent.click(submit);


});