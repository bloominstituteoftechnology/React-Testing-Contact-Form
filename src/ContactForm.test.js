import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ContactForm from './components/ContactForm'

test("renders without errors", () => {
    render(<ContactForm/>)
});

test("testing first name", () => {

    render(<ContactForm/>)

    const firstName = screen.getByPlaceholderText(/Edd/i);

    userEvent.type(firstName, "Jacob")

    expect(firstName).toBeTruthy();
    expect(firstName).toBeInTheDocument();
    expect(firstName).toHaveTextContent('');

});

test("testing last name", () => {
    render(<ContactForm/>)
    const lastName = screen.getByPlaceholderText(/burke/i);
    userEvent.type(lastName, "Stephens")
    
    expect(lastName).toBeTruthy();
    expect(lastName).toBeInTheDocument();
    expect(lastName).toHaveTextContent('');

});

test("testing email",() => {
    render(<ContactForm/>)
    const email = screen.getByPlaceholderText(/bluebill1049@hotmail.com/i);
    userEvent.type(email, "jacobstephens.work@gmail.com")

    expect(email).toBeTruthy();
    expect(email).toBeInTheDocument();
    expect(email).toHaveTextContent('');
});

test("testing button", () => {
    render(<ContactForm/>)
    const button = screen.getByRole('button')
    userEvent.click(button)

    expect(button).toBeInTheDocument();
});

