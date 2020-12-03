import React from "react";
import { render, screen } from "@testing-library/react";
import ContactForm from './ContactForm'
import userEvent from '@testing-library/user-event';

test("renders App without crashing", () => {
  render(<ContactForm />);
});

// test that you can type into all fields
// test that you can submit
// test an object field renders with your data

 test('can type into all fields', () => {
     render(<ContactForm />)
   //Arrange: gain access
   const nameInput = screen.getByPlaceholderText('Edd')
   const lastInput = screen.getByPlaceholderText('Burke')
   const emailInput = screen.getByPlaceholderText('bluebill1049@hotmail.com')
   const messageInpute = screen.getByLabelText(/message/i)
   const button = screen.getByRole('button')
   

   //Act: type into fields
   userEvent.type(nameInput, 'Ben')
   userEvent.type(lastInput, 'Varner')
   userEvent.type(emailInput, 'bena@gmail.com')
   userEvent.type(messageInpute, 'message')

    userEvent.click(button)
   
    


 })