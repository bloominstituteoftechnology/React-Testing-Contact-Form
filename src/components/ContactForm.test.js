import React from 'react'
import {fireEvent, render, screen} from '@testing-library/react'
import ContactForm from './ContactForm'

describe ('Tests ContactForm', ()=>{
    test ('App renders without errors', ()=>{
    render (<ContactForm/>)

    })

    test('user can fill out and submit form', async ()=>{
        //1.arrange
        render(<ContactForm/>);
        //2.act
            //a.query each input
        const firstNameInput= screen.getByLabelText(/first name/i);
        const lastNameInput = screen.getByLabelText(/last name/i);
        const emailInput = screen.getByLabelText(/email/i);
        const messageInput = screen.getByLabelText(/message/i);
         const submitButton = screen.getByRole('button', {type: /submit/i})


        //const button = screen.getByRole("button", {name:/submit!/i})


            //b.fill out our form elements
                        //note: second param is the event object 
        fireEvent.change(firstNameInput,{target:{ value:'Ashley'}})
        fireEvent.change(lastNameInput,{target:{ value:'Slater'}});
        fireEvent.change(emailInput,{target:{ value:'AshleySlater@gmail.com'}})
        fireEvent.change(messageInput,{target:{ value:'test'}})

            //c.click our button

        fireEvent.click(submitButton);

        //3.assert
            // test that an our form input exists on the page
             const newUser = await screen.findByText(/slater/i);
            // console.log(newUser);
    })


    });
