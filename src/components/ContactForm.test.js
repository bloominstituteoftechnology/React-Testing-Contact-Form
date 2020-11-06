import React from "react";
import { fireEvent, render, screen, getByTestId } from "@testing-library/react";
import ContactForm from "./ContactForm";

test('renders ContactForm', () =>{
    (<ContactForm />)
})

test('user can fill out and submit form',async () =>{
    render(<ContactForm />)

    const firstNameInput= screen.getByTestId("Edd");
    const lastNameInput = screen.getByTestId("Burke")
    const emailInput = screen.getByTestId("email")
    //fill out the form (top to bottom)
    fireEvent.change(firstNameInput,{target:{value:'Nacho'}})
    fireEvent.change(lastNameInput,{target:{value:'Cheese'}})
    fireEvent.change(emailInput,{target:{value:'nacho_cheese@gmail.com'}})
    //assert the forms have the values
    expect(firstNameInput).toHaveValue('Nacho')
    expect(lastNameInput).toHaveValue('Cheese')
    expect(emailInput).toHaveValue('nacho_cheese@gmail.com')
    //submit the form - click button - this will sometime update the page asynchronously
    const button = screen.getByTestId("button")
    fireEvent.click(button);

    //assert the user has been added to the list
    const newUser = await screen.findByText(/Nacho/i)
    expect(newUser).toBeTruthy();


})