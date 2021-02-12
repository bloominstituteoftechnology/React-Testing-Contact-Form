import React from "React";
import { render, screen } from "@testing-library/react";
import ContactForm from './ContactForm'
import userEvent from "@testing-library/user-event";

test("Component Renders", () => {
    
    render(<ContactForm />);
  
});

test("input fields behave normally", () => {
    // render
    render(<ContactForm />);
    // query for all inputs
    // getByLabelText NOT WORKING
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


  
    // query for the text "tiger"
    //const emailText = screen.queryByText(/karate@jackblack.com/i);
  
    // assert
    //expect(emailText).toBeInTheDocument();
  });

// test("renders without errors", async () => {
//     render(<ContactForm/>);
  
//     // get input fields
//     const firstNameInput = screen.getByLabelText(/first name/i);
//     const lastNameInput = screen.getByLabelText(/last name/i);
//     const emailInput = screen.getByLabelText(/email/i);
//     const messageInput = screen.getByLabelText(/message/i);
  
//     //type in input fields
//     userEvent.type(firstNameInput, 'Andrew');
//     userEvent.type(lastNameInput, 'Sohrabi');
//     userEvent.type(emailInput, 'andrew@gmail.com');
//     userEvent.type(messageInput, 'test test test');
  
//     //submit
//     const submit = screen.getByRole('button');
//     userEvent.click(submit);
  
//     //check that the text appears on the screen
//     const newContact = await screen.findByText("Andrew", { exact: false });
//     expect(newContact).toBeInTheDocument();
//   });