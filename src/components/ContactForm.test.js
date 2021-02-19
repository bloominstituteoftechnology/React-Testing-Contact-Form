import React from 'react'
import { render, screen } from '@testing-library/react'
import ContactForm from './ContactForm'

//import user event
import userEvent from '@testing-library/user-event'

//Test to make sure the Contact form is rendering
test('render ContatForm without any errors', () =>{
    //Arrange
    render(<ContactForm />)
})


//Test to ensure user can type in each field and submit form
test('When a user fills out the form, their information is properly displayed on screen', async () => {
    //Arrange - Render component, then grab form elements from the DOM
    render(<ContactForm />);
    const firstName = screen.getByLabelText(/first name/i);
    const lastName = screen.getByLabelText(/last name/i);
    const eMail = screen.getByLabelText(/email/i);
    const message = screen.getByLabelText(/message/i);
    const submitButton = screen.getByRole("button", {name: /submit/i });

    //rendered after submission

    const newFirstName = screen.findByText(/shane/i);
    const newLastName = screen.findByText(/shenanigans/i);
    const newEmail = screen.findByText(/heyheyhey@email.com/i);
    const newMessage = screen.findByText(/hello there, i hope you are doing well/i);



    //Act - type into the form fields, then submit the form
    userEvent.type(firstName, "Shane");
    userEvent.type(lastName, "Shenanigans");
    userEvent.type(eMail, "Heyheyhey@email.com");
    userEvent.type(message, "Hello there, I hope you are doing well");
    userEvent.click(submitButton);



    //Assert - make sure that the new object containing our information is displayed

    newFirstName.then((element)=> {
        expect(element).toBeTruthy();
        expect(element).toBeInTheDocument();
        expect(element).toBeVisible();
    })

    newLastName.then((element)=> {
        expect(element).toBeTruthy();
        expect(element).toBeInTheDocument();
        expect(element).toBeVisible();
    })

    newEmail.then((element)=> {
        expect(element).toBeTruthy();
        expect(element).toBeInTheDocument();
        expect(element).toBeVisible();
    })
    
    newMessage.then((element)=> {
        expect(element).toBeTruthy();
        expect(element).toBeInTheDocument();
        expect(element).toBeVisible();
    })


})


