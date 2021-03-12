import React from 'react';
import { screen, render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ContactForm from './components/ContactForm';


test("renders ContactForm without errors", async ()=> {
  render(<ContactForm/>);
});

test('Fill and submit renders required inputs', async () => {
 //Arrange: Setup our component
 render(<ContactForm/>);

 const firstName = 'Edded';
 const lastName = 'Burke';
 const email = 'bluebill1049@gmail.com';
 const message = 'Hello, World';
 //Act:
 const fNameInput = screen.getByLabelText('First Name*');
 userEvent.type(fNameInput, firstName);
 const lNameInput = screen.getByLabelText('Last Name*');
 userEvent.type(lNameInput, lastName);
 const emailInput = screen.getByLabelText('Email*');
 userEvent.type(emailInput, email);
 const messageTextArea = screen.getByLabelText('Message');
 userEvent.type(messageTextArea, message);

 //-find and click submit button
 const buttonSubmit = screen.getByRole('button');
 expect(buttonSubmit).not.toBeDisabled();
 userEvent.click(buttonSubmit);

//-renders all fields fext when all fields are submitted
screen.getByText(firstName);
screen.getByText(lastName);
screen.getByText(email);
screen.getAllByText(message);
})

test('renders "lastName is a required field" if an last name is not entered and the submit button is clicked', async () => {
    
});

test('renders all firstName, lastName and email text when submitted. Does NOT render message if message is not submitted.', async () => {
  //Arrange: Setup our component
  render(<ContactForm/>);
    const firstName = 'Edded';
    const lastName = 'Burke';
    const email = 'bluebill1049@gmail.com';
    const message = '';
    //Act:
    const fNameInput = screen.getByLabelText('First Name*');
    userEvent.type(fNameInput, firstName);
    const lNameInput = screen.getByLabelText('Last Name*');
    userEvent.type(lNameInput, lastName);
    const emailInput = screen.getByLabelText('Email*');
    userEvent.type(emailInput, email);
    const messageTextArea = screen.getByLabelText('Message');
    userEvent.type(messageTextArea, message);
   
    //-find and click submit but
    const buttonSubmit = screen.getByRole('button');
    expect(buttonSubmit).not.toBeDisabled();
    userEvent.click(buttonSubmit);
   
   //-renders all fields fext when all fields are submitted
   screen.getByText(firstName);
   screen.getByText(lastName);
   screen.getByText(email);
   const noMessage = screen.queryByTestId('messageDisplay')
   expect(noMessage).not.toBeInTheDocument();
});

test('Fill and submit renders required inputs', async () => {
  //Arrange: Setup our component
  render(<ContactForm/>,);
  const firstName = 'Edded';
  const lastName = 'Burke';
  const email = 'bluebill1049@gmail.com';
  const message = 'Hello, World';
  //Act:
  const fNameInput = screen.getByLabelText('First Name*');
  userEvent.type(fNameInput, firstName);
  const lNameInput = screen.getByLabelText('Last Name*');
  userEvent.type(lNameInput, lastName);
  const emailInput = screen.getByLabelText('Email*');
  userEvent.type(emailInput, email);
  const messageTextArea = screen.getByLabelText('Message');
  userEvent.type(messageTextArea, message);
 
  //-find and click submit button
  const buttonSubmit = screen.getByRole('button');
  expect(buttonSubmit).not.toBeDisabled();
  userEvent.click(buttonSubmit);
 
 //-renders all fields fext when all fields are submitted
 screen.getByText(firstName);
 screen.getByText(lastName);
 screen.getByText(email);
 screen.getAllByText(message);
 
})