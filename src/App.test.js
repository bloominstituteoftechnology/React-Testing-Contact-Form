import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("renders App without crashing", () => {
  render(<App />);

});

test("checks the form fields", async ()=> {
  //Arrange
  const app = render(<App />);
  //Act
  //1. Get access to form fields
  const firstNameInput = screen.getByPlaceholderText(/edd/i);
  const lastNameInput = screen.getByPlaceholderText(/burke/i);
  const button = screen.getByTestId('button');
  const email = screen.getByPlaceholderText(/email/i);
  
  //2. add text to our fields
  
  fireEvent.change(firstNameInput,{target: {value: 'Meghann', name:'firstName'}});
  fireEvent.change(lastNameInput, {target: {value: 'Benson', name: 'lastName'}});
  fireEvent.change(email, {target: {value: 'meg@meg.com', name: 'email'}});
  //3.get access and click the button
  //fireEvent.click(button);
  //Assert
  async ()=> {
    fireEvent.click(button);
    await clearedFields (() => {
    const objectInfo = screen.getByTestId('objectInfo');  
    expect(objectInfo).toBeInTheDocument();
    
  });



  }

})

// ---What to Test---
// 1. The first name input only allows 2 chars
// 2.w