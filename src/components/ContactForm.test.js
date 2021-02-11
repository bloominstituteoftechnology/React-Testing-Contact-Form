import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ContactForm from './ContactForm';
import "@testing-library/jest-dom";
import { act } from 'react-dom/test-utils';


test('renders without errors', async () => {
    render(<ContactForm />);
});

test('test input functionality', async () => {

});

test('form input validation and submission', async () => {
    act(() => {
        render(<ContactForm />);
    })

    // Grab our inputs
    const firstNameInput = screen.getByLabelText(/last name/i);
    const lastNameInput = screen.getByLabelText(/last name/i);
    const emailInput = screen.getByPlaceholderText(/bluebill1049@hotmail.com/i);
    const messageInput = screen.getByRole('textbox', {name: /message/i});

    // Test our inputs

    userEvent.type(firstNameInput, 'Pau');
    userEvent.type(lastNameInput, 'St.Germain');
    userEvent.type(emailInput, 'test@email.com');
    userEvent.type(messageInput, 'Something');

// await act(async () => {
//     userEvent.click(screen.getByTestId(/submit/i));
// })

    const button = screen.getByTestId(/submit/i);

    userEvent.click(button);

    const firstNameResult = screen.findByText(/paul/i);

    console.log(await firstNameResult);

    

    // expect(await firstNameResult).toBeInTheDocument();

    // const result = screen.findByLabelText(/data-display/i);

    // console.log(await result);
    
    // expect(result).toBeTruthy();

//  const result = screen.findByText('"firstName": "Paul", "lastName": "St.Germain, "email": "test@email.com", "message": "Something"')

// expect.objectContaining({
// "firstName": "Paul",
// "lastName": "St.Germain",
// "email": "test@email.com",
// "message": "Something"
// })
    
})