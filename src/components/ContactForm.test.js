import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ContactForm from './ContactForm';

test('Shows first name', () => {

  const { getByText } = render(<ContactForm />);

  const testForFName = getByText(/first Name/i);
  expect (testForFName).toBeInTheDocument();

});

test('Shows last name', () => {

  const { getByText } = render(<ContactForm />);

  const testForLName = getByText(/last Name/i);
  expect (testForLName).toBeInTheDocument();

});

test('Shows email', () => {

  const { getByText } = render(<ContactForm />);

  const testForEmail = getByText(/email/i);
  expect (testForEmail).toBeInTheDocument();

});

test('Shows message', () => {

  const { getByText } = render(<ContactForm />);

  const testForMessage = getByText(/message/i);
  expect (testForMessage).toBeInTheDocument();

});


