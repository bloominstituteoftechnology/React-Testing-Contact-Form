import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ContactForm from './ContactForm';
import App from '../App';

test('Renders App without crashing', () => {
  render(<App />);
});
test('Renders ContactForm without crashing', () => {
  render(<ContactForm />);
});

test('Render First Name and Last Name in ContactForm', () => {
  const text = render(<ContactForm />);
  const getByText = (/first name/, /last name/i);
});
