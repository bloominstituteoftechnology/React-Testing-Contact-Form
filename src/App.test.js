import React from "react";
import { render, getByTestId, getByLabelText, getAllByText, fireEvent, screen } from "@testing-library/react";
import App from "./App";
import ContactForm from "./components/ContactForm";

test("renders App without crashing", () => {
  const {getByText} = render(<App />);
});

test('input', ()=>{
  const {getByText} = render (<ContactForm/>);

  const firstName = getByText(/first name*/i);
   const lastName = getByText(/last name*/i);
   const email = getByText(/email*/i);
   const firstNameInput = screen.getByTestId(/fname/i);

  expect(firstName).toBeInTheDocument;
  expect(firstName).toHaveFormValues;

  expect(lastName).toBeInTheDocument;
  expect(lastName).toHaveFormValues;

  expect(email).toBeInTheDocument;
  expect(email).toHaveFormValues;

  fireEvent.change(firstNameInput, {target : {value: 'Lindsay'}} );
  
})
