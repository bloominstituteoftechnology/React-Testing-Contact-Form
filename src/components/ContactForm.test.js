import React from 'react';
import { render, screen } from '@testing-library/react';
import ContactForm from './ContactForm';

test('Contact form render and if it is in the document node', () => {
	//Arrange
	render(<ContactForm />);
});

test('ContactForm add data to the dom', () => {
	//Arrange
	render(<ContactForm />);

	//Act
	const fistNameInput = screen.getByLabelText(/first name/i);
	const lastNameInput = screen.getByLabelText(/last name/i);
	const emailInput = screen.getByLabelText(/email/i);
	const messageTextArea = screen.getByLabelText(/message/i);
	const submitInput = screen.getByTestId(/submit/i);

	//Assert
});
