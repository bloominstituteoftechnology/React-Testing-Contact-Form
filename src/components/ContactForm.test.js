import React from 'react';
import { render, screen } from '@testing-library/react';
import ContactForm from './ContactForm';
import userEvent from '@testing-library/user-event';

// ContactForm renders without errors
test('render ContactForm without errors', () => {
    render(<ContactForm />)
})
//a new user can be added and rendered
test('when a user fill out all required info correctly ', async() => {
    render(<ContactForm />);
    const firstNameInput = screen.getByLabelText(/first name/i);
    const lastNameInput = screen.getByLabelText(/last name/i);
    const emailInput = screen.getByLabelText(/email/i);
    const submitButton = screen.getByRole('button', {name: /submit/i});

    userEvent.type(firstNameInput, "Santiago");
    userEvent.type(lastNameInput, "Jaspe");
    userEvent.type(emailInput, "santijas22@santijas.com");
    userEvent.click(submitButton);
    
    const newUser = screen.findByText(/santiago jaspe/i);

    newUser.then((element) => {
        expect(element).toBeVisible();
        expect(element).toBeInTheDocument();
        
        
    })
})
//shoud not be able to submit form with an empty required(*) input field
// test('shoud not be able to submit form with an empty required(*) input field', async() => {
//     render(<ContactForm />);
//     const firstNameInput = screen.getByLabelText(/first name/i);
//     const lastNameInput = screen.getByLabelText(/last name/i);
//     const emailInput = screen.getByLabelText(/email/i);
//     const submitButton = screen.getByRole('button', {name: /submit/i});

//     userEvent.type(firstNameInput, "Paco");
//     // userEvent.type(lastNameInput, "");
//     userEvent.type(emailInput, "santijas22@santijas.com");
//     userEvent.click(submitButton);

//     const newUser = screen.findByText(/Paco/i);

    
//         // expect(newUser).toBeInTheDocument();
//         expect(newUser).not.toBeInTheDocument();
        


// })
//should not be able to submit form with incorrect email format

//should not be able to submit form if password is not long enough
