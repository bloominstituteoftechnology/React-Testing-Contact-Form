import React from 'react';
import { fireEvent, render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ContactForm from './ContactForm';

test('Contact form render and if it is in the document node', () => {
	//Arrange
	render(<ContactForm />);
});

test('ContactForm add data to the dom', () => {
	//Arrange
	render(<ContactForm />);

	//Act
	const firstNameInput = screen.getByLabelText(/first name/i);
	const lastNameInput = screen.getByLabelText(/last name/i);
	const emailInput = screen.getByLabelText(/email/i);
	const messageTextArea = screen.getByLabelText(/message/i);
	const submitInput = screen.getByTestId(/submit/i);

	//RLT events
	userEvent.type(firstNameInput, 'Carlos');
	userEvent.type(lastNameInput, 'Ramos');
	userEvent.type(emailInput, 'something@email.com');
	userEvent.type(messageTextArea, 'Something === something');
	act(() => userEvent.click(submitInput));

	//Assert
	const data = screen.getByTestId(/output/i);
	expect(data).toBeInTheDocument();
});
