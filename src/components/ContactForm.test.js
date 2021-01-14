import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import ContactForm from './ContactForm';

test('Form renders without errors', ()=>{
    //Arrange
    render(<ContactForm />);

    //Act:
    //1. Get first and last name input as well as email as they are required inputs. Will also get Message though optional it is an optional input.
    const firstNameInput = screen.getByLabelText(/first name/i);
    const lastNameInput = screen.getByLabelText(/last name/i);
    const emailInput = screen.getByLabelText(/email/i);
    const messageInput = screen.getByLabelText(/Message/i);
    
    //2.Type values into inputs
    userEvent.type(firstNameInput,'Diego');
    userEvent.type(lastNameInput,'Roman');
    userEvent.type(emailInput,'Diego@gmail.com');
    userEvent.type(messageInput,'Test message to see if this works');

    //3. click submit button
    // const button = screen.getByRole('button');
    // userEvent.click(button);

})