import React from 'react';
import { render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ContactForm from './ContactForm';

test("Contact form renders without errors", ()=>{
    //Arrange
    render(<ContactForm/>);

    //Act
    const firstNameInput = screen.getByPlaceholderText(/edd/i);
    const lastNameInput = screen.getByPlaceholderText(/burke/i);
    const emailInput = screen.getByPlaceholderText(/bluebill1049@hotmail.com/i)
    const messageInput = screen.queryByLabelText(/message/i)

    userEvent.type( firstNameInput, 'sebasd');
    userEvent.type( lastNameInput, "espeset");

    //Assert
        //1.first name input length should be longer than three
    expect( firstNameInput ).toBeInTheDocument();
    expect( firstNameInput ).toHaveValue("sebasd");
  
});
    


