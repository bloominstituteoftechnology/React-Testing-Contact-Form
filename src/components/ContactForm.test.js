import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ContactForm from './ContactForm';

test('renders correctly', () => {
  render(<ContactForm />);
});

test('Contact form adds new contact', async () => {
  const { getByLabelText, findByTestId } = render(<ContactForm />);

  const firstNameInput = getByLabelText(/First Name*/i);
  const lastNameInput = getByLabelText(/Last Name*/i);
  const emailInput = getByLabelText(/Email*/i);
  const messageInput = getByLabelText(/Message/i);

  fireEvent.change(firstNameInput, {
    target: { name: 'firstName', value: 'Dav' },
  });
  fireEvent.change(lastNameInput, {
    target: { name: 'lastName', value: 'Shestopal' },
  });
  fireEvent.change(emailInput, {
    target: { name: 'email', value: 'dshestopal@yahoo.com' },
  });
  fireEvent.change(messageInput, {
    target: { name: 'message', value: 'message' },
  });

  fireEvent.click(document.getElementById('submit'));

  await findByTestId('output');
});

test(' error for not including a name', async () => {
  const { getByLabelText, findByTestId } = render(<ContactForm />);

  const firstNameInput = getByLabelText(/First Name*/i);
  const lastNameInput = getByLabelText(/Last Name*/i);
  const emailInput = getByLabelText(/Email*/i);
  const messageInput = getByLabelText(/Message/i);

  fireEvent.change(firstNameInput, {
    target: { name: 'firstName', value: '' },
  });
  fireEvent.change(lastNameInput, {
    target: { name: 'lastName', value: 'Shestopal' },
  });
  fireEvent.change(emailInput, {
    target: { name: 'email', value: 'dshestopal@yahoo.com' },
  });
  fireEvent.change(messageInput, {
    target: { name: 'message', value: 'message' },
  });

  fireEvent.click(document.getElementById('submit'));

  await findByTestId('errorFName');
});
