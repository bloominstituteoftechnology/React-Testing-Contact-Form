import React from "react"
import {fireEvent, getByDisplayValue, getByTestId, getByText, render, screen} from "@testing-library/react";
import ContactForm from './ContactForm'

test('renders contactForm', ()=>{
  render(<ContactForm/>)
})

test('user can fill out and submit form', () =>{
  const {getByTestId}= render(<ContactForm/>)
  const expectedFirstName = "aaron";
  const firstNameInput = getByTestId("firstname")

  fireEvent.change(firstNameInput, {target:{value:'aaron'}})
  expect(firstNameInput.value).toBe(expectedFirstName)
})
