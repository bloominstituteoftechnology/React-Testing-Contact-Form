import React from 'react';
import { act } from 'react-dom/test-utils';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ContactForm from './components/ContactForm';

const testValues = {
    firstName: 'Cameron',
    lastName: 'Mirza',
    email: 'mail@cmirza.com',
    message: 'test message'
}

test('Contact Form Renders Without Error', () => {
    render(<ContactForm/>);
});

test('Form can be filled out and submitted', async() => {

    //arrange
    render(<ContactForm/>)

    //act
    const firstNameInput = screen.getByTestId('firstName');
    const lastNameInput = screen.getByTestId('lastName');
    const emailInput = screen.getByTestId('email');
    const messageInput = screen.getByTestId('message');
    const button = screen.getByTestId('submit');

    userEvent.type(firstNameInput, testValues.firstName);
    userEvent.type(lastNameInput, testValues.lastName);
    userEvent.type(emailInput, testValues.email);
    userEvent.type(messageInput, testValues.message);

    await act(async () => {
        userEvent.click(button);
    });

    //assert
    expect(firstNameInput.value).toMatch(testValues.firstName);
    expect(lastNameInput.value).toMatch(testValues.lastName);
    expect(emailInput.value).toMatch(testValues.email);
    expect(messageInput.value).toMatch(testValues.message);

})