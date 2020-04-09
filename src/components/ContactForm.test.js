import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent } from '@testing-library/react';
import ContactForm from './ContactForm';
import { act } from 'react-dom/test-utils';

test('ContactForm Renders', () => {
    render(<ContactForm />);
});

test('Make sure the inputs are visible.', () => {
    const { getByLabelText } = render(<ContactForm />);

    getByLabelText(/first Name/i);
    getByLabelText(/last Name/i);
    getByLabelText(/email/i);
    getByLabelText(/message/i);
});

test('Adding items to the contact form and Submitting the form.', () => {
    const { getByLabelText, getByText } = render(<ContactForm />);

    const fNameInput = getByLabelText(/first Name/i);
    const lNameInput = getByLabelText(/last Name/i);
    const email = getByLabelText(/email/i);
    const message = getByLabelText(/message/i);

    fireEvent.change(fNameInput, { target: { value: 'MyFirstName' } });
    fireEvent.change(lNameInput, { target: { value: 'MyLastName' } });
    fireEvent.change(email, { target: { value: 'MyEmail@email.com' } });
    fireEvent.change(message, {
        target: {
            value:
                'Gotta type in a fake message dj dfsjak fnasd fe fv er vs dg rtg gbv tyyj hbfg rytjh grfv btrehgv ty jhtg.',
        },
    });

    expect(fNameInput.value).toBe('MyFirstName');
    expect(lNameInput.value).toBe('MyLastName');
    expect(email.value).toBe('MyEmail@email.com');
    expect(message.value).toBe(
        'Gotta type in a fake message dj dfsjak fnasd fe fv er vs dg rtg gbv tyyj hbfg rytjh grfv btrehgv ty jhtg.'
    );

    fireEvent.click(getByText(/submit/i));
});
