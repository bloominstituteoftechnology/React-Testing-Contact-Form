import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
// import { App } from './App';
import ContactForm from './components/ContactForm';

// test("renders App without crashing", () => {
//   const { getByText } = render(<App />);

//   console.log(getByText);
// });

test('first name input max length 10', () => {
  const container = render(<ContactForm />);

  // console.log(container);

  const firstnameInput = container.queryByPlaceholderText(/edd/i);

  fireEvent.input(firstnameInput, { target: { value: '0123465789' } });

  expect(firstnameInput.maxlength).toBe(10);
  expect(firstnameInput.value).toBe('0123456789')



})

