import React from "react"
import {fireEvent, getByDisplayValue, getByText, render, screen} from "@testing-library/react";
import ContactForm from './ContactForm'

test('renders contactForm', ()=>{
  render(<ContactForm/>)
})

test('user can fill out and submit form', () =>{
  render(<ContactForm/>)

const firstNameInput = screen.getByText(/First Name/i)

fireEvent.change(getByDisplayValue(/firstname/i),{target:{name}})

})
