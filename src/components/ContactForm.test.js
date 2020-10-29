import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ContactForm from './ContactForm';

test('renders ContactForm w/o errors', () => {
    render(< ContactForm />);
});
test('User can fill out and submit form', async () => {

    render(<ContactForm />);

    const firstName = await screen.getByText(/first name/i);
    const lastName = await screen.getByText(/last name/i);
    const emailAdrs = await screen.getByText(/email/i);
    const msg = await screen.getByText(/message/i);

//lets us enter text in the fields
    fireEvent.change(firstName, {
        target: { name: 'Ram'}});

    fireEvent.change(lastName, {
        target: { name: 'Nasir' }});

    fireEvent.change(emailAdrs, {
        target: { name: 'rnasir@gmail.com' }});

    fireEvent.change(msg, {
        target: { name: 'This is a test' }});

    //submit button test
    const button = screen.getByRole('button');
    fireEvent.click(button);
    
    await screen.queryByText(/ram/i);
    await screen.queryByText(/nasir/i);
    await screen.queryByText(/rnasir@gmail.com/i);
    await screen.queryByText(/this is a test/i);

});