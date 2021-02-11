import React from "react"
import {  render, screen, fireEvent } from "@testing-library/react";
import ContactForm from "./ContactForm"

import { act } from "react-dom/test-utils";

    test("renders ContactForm without errors", ()=>{
        render(<ContactForm />);
    });
    
    test("test the inputs and labels", async () => {
        render(<ContactForm />)
        const inputFirstName = await screen.findByLabelText(/first name*/i)
        const inputLastName = await screen.findByLabelText(/last name*/i)
        const inputEmail = await screen.findByLabelText(/email*/i)
        const inputMessage = await screen.findByLabelText(/message*/i)
        
        fireEvent.change(inputFirstName, { target: { value: "Ava", name: "firstName" } })
        fireEvent.change(inputLastName, { target: { value: "Murad", name: "lastName" } })
        fireEvent.change(inputEmail, { target: { value: "avaMurad@gmail.com", name: "email" } })
        fireEvent.change(inputMessage, { target: { value: "hi", name: "message" } })
        
        const submit = screen.getByTitle('submit')
        act(() => {
            fireEvent.click(submit)
        })
})






  


