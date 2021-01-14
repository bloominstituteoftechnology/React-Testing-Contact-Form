import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ContactForm from './components/ContactForm'

test("renders without errors", () => {
render(<ContactForm/>)

const firstName = screen.getByPlaceholderText(/edd/i);
const lastName = screen.getByPlaceholderText(/burke/i);
const email = screen.getByPlaceholderText(/bluebill1049@hotmail.com/i);

userEvent.type(firstName, "Jacob")
userEvent.type(lastName, "Stephens")
userEvent.type(email, "jacobstephens.work@gmail.com")


const button = screen.getByRole('button')
userEvent.click(button)


});
