import React from 'react'
import { getByLabelText , render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import ContactForm from './ContactForm'

test("renders the contact form",()=>{
    render(<ContactForm/>)
})
test("user can fill out form",async ()=>{
    //arrange : testing the form
    render(<ContactForm/>);

    //act : submit to our form
    //1.query into our form elements
    
    const firstNameInput = screen.getByPlaceholderText(/Edd/);
    const lastNameInput = screen.getByPlaceholderText(/burke/i)
    const emailInput = screen.getByPlaceholderText(/bluebill1049@hotmail.com/i)
    const messageInput = screen.getByText(/message/i)

    //2.type into our elements using userEvent
    
    userEvent.type(firstNameInput,"Calvin")
    userEvent.type(lastNameInput,"Hobbs")
    userEvent.type(emailInput,"rascal")

})