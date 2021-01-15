import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ContactForm from './ContactForm';

test("renders without errors",  ()=>{
    render(<ContactForm/>); //Arrange
    
    //Act
    //  1. Get all of the input fields.
    const firstNameInput = screen.getByPlaceholderText(/Edd/i)
    const lastNameInput = screen.getByLabelText(/Last Name/i)
    const emailInput = screen.getByLabelText(/Email*/i)
    const messageInput = screen.getByLabelText(/Message/i)
    const button = screen.getByRole('button')

    //2 .Type Values into the inputs


        
        userEvent.type(firstNameInput, "Ruben");
        userEvent.type(lastNameInput, "Ramirez");
        userEvent.type(emailInput, "ra15@outlook.com")
        userEvent.click(button)

    //3 Push the Submit Button

    //Assert
    const newFirstNameInput = screen.getByDisplayValue('Ruben')
    expect(newFirstNameInput).toBeInTheDocument()

    const newLastNameInput = screen.getByDisplayValue('Ramirez')
    expect(newLastNameInput).toBeInTheDocument()

    const newEmail = screen.getByDisplayValue("ra15@outlook.com")
    expect(newEmail).toBeInTheDocument();
    //All names are input
   
});


