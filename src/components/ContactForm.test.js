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

test('Adding items to the contact form and Submitting the form.', async () => {
    //Starting off the tests with these.
    const { getByLabelText, getByText } = render(<ContactForm />);
    //Had an error about act(), looked up a solution
    const promise = Promise.resolve();
    const handleUpdateUsername = jest.fn(() => promise);

    //Retrieving each different form
    const fNameInput = getByLabelText(/first Name/i);
    const lNameInput = getByLabelText(/last Name/i);
    const email = getByLabelText(/email/i);
    const message = getByLabelText(/message/i);

    //Type in information for each input
    fireEvent.change(fNameInput, { target: { value: 'MyFirstName' } });
    fireEvent.change(lNameInput, { target: { value: 'MyLastName' } });
    fireEvent.change(email, { target: { value: 'MyEmail@email.com' } });
    fireEvent.change(message, {
        target: {
            value:
                'Gotta type in a fake message dj dfsjak fnasd fe fv er vs dg rtg gbv tyyj hbfg rytjh grfv btrehgv ty jhtg.',
        },
    });

    //Should output this bit of info
    expect(fNameInput.value).toBe('MyFirstName');
    expect(lNameInput.value).toBe('MyLastName');
    expect(email.value).toBe('MyEmail@email.com');
    expect(message.value).toBe(
        'Gotta type in a fake message dj dfsjak fnasd fe fv er vs dg rtg gbv tyyj hbfg rytjh grfv btrehgv ty jhtg.'
    );
    //Click on submit
    fireEvent.click(getByText(/submit/i));
    await act(() => promise);
});
