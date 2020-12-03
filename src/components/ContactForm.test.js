import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import ContactForm from './ContactForm';


test('Render without errors',()=>{
    render(<ContactForm/>);
});


test('User can fill out and submit', ()=>{
    render(<ContactForm/>);

    const firstName = screen.getByPlaceholderText(/Edd/i);
    const lastName = screen.getByPlaceholderText(/Burke/i);
    const email = screen.getByPlaceholderText(/bluebill1049@hotmail.com/i);
    
    
console.log(firstName)
//enter text in fields//

    userEvent.type(firstName, "cas");
    userEvent.type(lastName,"cerrito");
    userEvent.type(email, 'casemail4634@gmail.com');
   
    
    


//submit tests//
    
    const button = screen.getByRole('button');
    userEvent.click(button);
    
    expect(firstName).toBeInTheDocument();
    expect(lastName).toBeInTheDocument();
    expect(email).toBeInTheDocument();
  
    
    

    
});