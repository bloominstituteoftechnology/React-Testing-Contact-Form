// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';
import 'mutationobserver-shim';
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ContactForm from './components/ContactForm';

test('', () => {
    // render the component I want to test
    render(<ContactForm />);

    // query for each input and assign to a variable
    const firstNameInput = screen.queryByLabelText(/firstname/i);
});
