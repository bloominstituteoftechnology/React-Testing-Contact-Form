import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import ContactForm from './ContactForm';

test('Form renders without errors', async () =>{
    //Arrange
    render(<ContactForm />);

    //Act:
    //1. Get first and last name input as well as email as they are required inputs. Will also get Message though optional it is an optional input.
    const firstNameInput = screen.getByLabelText(/first name/i);
    const lastNameInput = screen.getByLabelText(/last name/i);
    const emailInput = screen.getByLabelText(/email/i);
    const messageInput = screen.getByLabelText(/Message/i);
    

        //2.Type values into inputs
        userEvent.type(firstNameInput,'Di');
        userEvent.type(lastNameInput,'Roman');
        userEvent.type(emailInput,'Diego@gmail.com');
        userEvent.type(messageInput,'Test message to see if this works');

        //3. click submit button
        const button = screen.getByRole('button');
        userEvent.click(button);
    
    //Assert:
    //inputs recieved
    const newFirstName = await screen.findByText(/Di/i);
    const newLastName = await screen.findByText(/Roman/i);
    const newEmail = await screen.findByText(/Diego@gmail.com/i);
    const newMessage = await screen.findByText(/Test message to see if this works/i);

    expect(newFirstName).toBeInTheDocument(/Di/i); 
    expect(newLastName).toBeInTheDocument(/Roman/i); 
    expect(newEmail).toBeInTheDocument(/Diego@gmail.com/i); 
    expect(newMessage).toBeInTheDocument(/Test message to see if this works/i); 


});