import React from 'react'
import { render, screen } from '@testing-library/react'
import ContactForm from './ContactForm'
import userEvent from '@testing-library/user-event'


test( 'when a user types something into the form it will recieve it ', async () => {
    // arrange 
render (<ContactForm/>)
const firstInput = screen.getByLabelText(/first name/i);
const lastInput = screen.getByLabelText(/last name/i);
const emailInput = screen.getByLabelText(/message/i);


// act 
userEvent.type(firstInput, 'n')
userEvent.type(lastInput, 'b')
userEvent.type(emailInput,'c')


// assert
const newText = screen.findByText(/n/i)

newText.then((e)=>{
    expect(e).toBeTruthy
})
})

test( 'submit button works', async ()=>{
    const submitInput = screen.getByRole('submit' , {name: /submit/i});

userEvent.click(submitInput)
})