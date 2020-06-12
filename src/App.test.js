import React from "react";
import { render, getByPlaceholderText, fireEvent } from "@testing-library/react";
import App from "./App";
import ContactForm from './components/ContactForm'

test("renders App without crashing", () => {
  render(<App />);
});

test('First name allows text', () =>{
  const {getByPlaceholderText} = render(<ContactForm />)

 
const FName =  getByPlaceholderText(/edd/i)
expect(FName.value).toBe('')

})

// test('Name Length', () =>{
//   const NameLength = getBy(/edd/i)
//   fireEvent.change(NameLength,{target:{value: 'Eddy'}})
//   expect(NameLength.value).toBe('Eddy')
// })