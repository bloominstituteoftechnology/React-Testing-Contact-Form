import React from "react";
import { render, screen } from "@testing-library/react";
import ContactForm from "./ContactForm";
import userEvent from "@testing-library/user-event";

test("First Test", () => {
  console.log("my first test");
});

test("readers without errors", () => {
  render(<ContactForm />);
  const firstNameInput = screen.getByLabelText(/first name/i);
  const lastNameInput = screen.getByLabelText(/last name/i);
  const emailInput = screen.getByLabelText(/email/i);
    
  userEvent.type(firstNameInput, 'Edd');
  userEvent.type(lastNameInput, 'Ward');
  userEvent.type(emailInput, 'EddWard@gmail.com');

 const submitbutton = screen.getByRole('button');
  userEvent.click(submitbutton);
  
  const newPerson =  screen.findByText('Edd');
  expect(newPerson).toBeInTheDocument();
});
