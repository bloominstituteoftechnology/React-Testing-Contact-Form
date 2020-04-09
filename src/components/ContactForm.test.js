import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ContactForm from './ContactForm';

test('ContactForm Renders', () => {
    render(<ContactForm />);
});

test('Adding items to the contact form and Submitting the form.', () => {
    const { getByLabelText, getByText, getByTestId } = render(<ContactForm />);

    const fNameInput = getByLabelText(/firstName/i);
    const lNameInput = getByLabelText(/lastName/i);
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
