import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import ContactForm from "./ContactForm"

test('renders ContactForm', () => {
    render(<ContactForm />);
  });

  test('user can fill out and submit the form', async () => {
    render(<ContactForm />); 
    const firstNameInput = screen.getByLabelText(/first name/i)
    const lastNameInput = screen.getByLabelText(/last name/i)
    const emailInput = screen.getByLabelText(/email/i)
    const messageInput = screen.getByLabelText(/message/i)


    fireEvent.change (firstNameInput, {target: {value: 'cam'}})
    fireEvent.change (lastNameInput, {target: {value: 'young'}})
    fireEvent.change (emailInput, {target: {value: 'kidleo0794@yahoo.com'}})
    fireEvent.change (messageInput, {target: {value: 'hello world'}})

    expect(firstNameInput).toHaveValue('cam')

    const button = screen.getByRole("button", { name: /submit/i });
    fireEvent.click(button);

    const addFirstName = await screen.findByText(/cam/i);
    expect(addFirstName).toBeTruthy();
    expect(addFirstName).toHaveTextContent(/cam/);

})