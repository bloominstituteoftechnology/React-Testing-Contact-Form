import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ContactForm from "./ContactForm";

test('renders AnimalForm', () => {
  render(<ContactForm />);
})

test('user can fill out and submit the form',  async() => {
    render(<ContactForm />);
    const nameInput = screen.getByLabelText(/First Name/i)
    const lastNameInput = screen.getByLabelText(/Last Name/i)
    const emailInput = screen.getByLabelText(/email/i)


    fireEvent.change(firstName, { target:  {value: 'eddy'}})
    fireEvent.change(lastName, {target: {value: 'smooth'}});
    fireEvent.change(email, {target: {value: 'roofs@gmail.com'}});


    expect(nameInput).toHaveValue('eddy')


    const button = screen.getByRole("button", { name: /submit/i });
    fireEvent.click(button);
    // Sometimes in a form text may render before the form submits so you may need to run it async
    // Async version must use await and have async declared up before the parenthesis uptop 
    // const newAnimal = await screen.findByText(/dog/i)
    // const newAnimal = await screen.findByText(/dog/i)
    // expect(newAnimal).toHaveValue(/dog/i)
    // expect(newAnimal).toBeTruthy();
    // expect(newAnimal).toHaveTextContent(/dog/i)

    // These can use aria roles 

})
  