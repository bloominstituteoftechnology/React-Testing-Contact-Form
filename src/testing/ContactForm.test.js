import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import ContactForm from '../Components/ContactForm';

test("renders without errors", async () => {
    render(<ContactForm/>);
  
    // get input fields
    const firstNameInput = screen.getByLabelText(/first name/i);
    const lastNameInput = screen.getByLabelText(/last name/i);
    const emailInput = screen.getByLabelText(/email/i);
    const messageInput = screen.getByLabelText(/message/i);
  
    //type in input fields
    userEvent.type(firstNameInput, 'Andrew');
    userEvent.type(lastNameInput, 'Sohrabi');
    userEvent.type(emailInput, 'andrew@gmail.com');
    userEvent.type(messageInput, 'test test test');
  
    //submit
    const submit = screen.getByRole('button');
    userEvent.click(submit);
  
    //check that the text appears on the screen
    const newContact = await screen.findByText("Andrew", { exact: false });
    expect(newContact).toBeInTheDocument();
  });