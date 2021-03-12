import React from 'react';
import { screen, render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ContactForm from './components/ContactForm';


test("renders ContactForm without errors", async ()=> {
  render(<ContactForm/>);
});

test('renders the contact form header', ()=> {
  render(<ContactForm/>);
  //get form header
  document.getElementsByTagName('h1').value = 'Contact Form';
  screen.getByText(/Contact Form/i);
});

test('renders ONE error message if user enters less then 5 characters into firstname.', async () => {
  render(<ContactForm/>);

  const firstName = 'Edd';
  const fNameInput = screen.getByLabelText('First Name*');
  userEvent.type(fNameInput, firstName);
   //-find and click submit button
 const buttonSubmit = screen.getByRole('button');
 expect(buttonSubmit).not.toBeDisabled();
 userEvent.click(buttonSubmit);
 //find one error message for firstName
 screen.getByText('Error: firstName must have at least 5 characters.')


});

test('renders THREE error messages if user enters no values into any fields.', async () => {
  render(<ContactForm/>);

   //-find and click submit button
 const buttonSubmit = screen.getByRole('button');
 expect(buttonSubmit).not.toBeDisabled();
 userEvent.click(buttonSubmit);
//check for 3 error messages
screen.getByText('Error: firstName must have at least 5 characters.')
screen.getByText('Error: lastName is a required field.')
screen.getByText('Error: email must be a valid email address.')

});


test('renders ONE error message if user enters a valid first name and last name but no email.', async () => {
   //Arrange: Setup our component
  render(<ContactForm/>);

  const firstName = 'Edded';
  const lastName = 'Burke';
   //Act:
 const fNameInput = screen.getByLabelText('First Name*');
 userEvent.type(fNameInput, firstName);
 const lNameInput = screen.getByLabelText('Last Name*');
 userEvent.type(lNameInput, lastName);
 //-find and click submit button
 const buttonSubmit = screen.getByRole('button');
 expect(buttonSubmit).not.toBeDisabled();
 userEvent.click(buttonSubmit);
//check for one error message
screen.getByText('Error: email must be a valid email address.')

});

test('renders "email must be a valid email address" if an invalid email is entered', async () => {
  render(<ContactForm/>);

  const email = 'bluebill1049@com';
  const emailInput = screen.getByLabelText('Email*');
 userEvent.type(emailInput, email);

 //-find and click submit button
 const buttonSubmit = screen.getByRole('button');
 expect(buttonSubmit).not.toBeDisabled();
 userEvent.click(buttonSubmit);
 //check for email error
  screen.getByText('Error: email must be a valid email address.')
});


test('renders "lastName is a required field" if an last name is not entered and the submit button is clicked', async () => {
  render(<ContactForm/>);

  //-find and click submit button
 const buttonSubmit = screen.getByRole('button');
 expect(buttonSubmit).not.toBeDisabled();
 userEvent.click(buttonSubmit);
 //check for last name error message
  screen.getByText('Error: lastName is a required field.')
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