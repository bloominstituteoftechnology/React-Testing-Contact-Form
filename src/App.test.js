import React from 'react';
// import * as rtl from '@testing-library/react'; // Don't need because we imported render specifically
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders App without errors', () => {
  render(<App />);
});

test('renders the App', () => {
  const appRendered = render(<App/>);
  expect(appRendered).toBeTruthy;
});
