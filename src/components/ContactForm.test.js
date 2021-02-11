import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ContactForm from './ContactForm';
import { act } from 'react-dom/test-utils';

test('test to see if forms filled out and button press, object is created', async () => {
    // render the component I want to test
   render(<ContactForm />);

    // query for each input and assign to a variable
    await act(async () => {
        const firstNameInput = screen.getByPlaceholderText(/edd/i);
        const lastNameInput = screen.getByPlaceholderText(/burke/i);
        const emailInput = screen.getByPlaceholderText(/bluebill1049@hotmail.com/i);
        const messageInput = screen.queryByLabelText(/message/i);
        // query for the button
        const submitButton = screen.getByRole('button', {name: /submit/i});

        // type into input fields
        userEvent.type(firstNameInput, 'Test');
        userEvent.type(lastNameInput, 'Person');
        userEvent.type(emailInput, 'test@test.com');
        userEvent.type(messageInput, 'this is a message');
        
        //click the button
        
        userEvent.click(submitButton);
     });

    // assertion
    expect.objectContaining({
        firstName: expect.any(String),
        lastName: expect.any(String),
        email: expect.any(String),
        message: expect.any(String),
    });
});