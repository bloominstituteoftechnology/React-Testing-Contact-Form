import React from "react";
import { render, getByPlaceholderText, fireEvent, queryByPlaceholderText } from "@testing-library/react";
import App from "./App";
import ContactForm from './components/ContactForm'
import { Simulate } from "react-dom/test-utils";


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

test('Email allows input', ()=>{
  const {getByTestId} = render(<ContactForm/>)
  const email = getByTestId(/emaill/i)
  expect(email.value).toBe('')
})

test('Submits', () =>{
  const {getByTestId} = render(<ContactForm/>)
  const submits = getByTestId(/submits/i)
 expect(submits).toBeInTheDocument
})
