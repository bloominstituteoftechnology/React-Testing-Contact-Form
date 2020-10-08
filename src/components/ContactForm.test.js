import React from "react";
import { fireEvent, render,screen } from "@testing-library/react";
import ContactForm from './ContactForm';

test("renders ContactForm without crashing", () => {
    render(<ContactForm />);
  
  });

test('lets you submit your the form',async()=>{
    // arrange 
    render(<ContactForm/>);
    // act 
    const firstNameInput= screen.getByPlaceholderText(/edd/i);
    const lastNameInput= screen.getByPlaceholderText(/burke/i);
    const emailInput= screen.getByLabelText(/email/i);
    // const messageInput= screen.getByLabelText(/message/i);
    const button=screen.getByRole('button',{name:/submit/i})
    

    fireEvent.change(firstNameInput,{target:{value:'Terry'}});
    fireEvent.change(lastNameInput,{target:{value:'Edwards'}});
    fireEvent.input(emailInput,{target:{value:'terryedwardsjr113@gmail.com'}});
    // fireEvent.change(messageInput,{target:{value:'the debates on'}});
    fireEvent.click(button);


    // assert 
    // expect(firstNameInput).toHaveValue('Terry');
    // expect(lastNameInput).toHaveValue('Edwards');
    // expect(emailInput).toHaveValue('terryedwardsjr113@gmail.com');
    // expect(messageInput).toHaveValue('the debates on');
    const newPerson=await screen.findByText(/terry/i)
    expect(newPerson).toHaveTextContent('Terry')

})

