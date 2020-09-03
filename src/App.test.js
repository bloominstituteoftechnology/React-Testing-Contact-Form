import React from "react";
import { render, fireEvent, getByText } from "@testing-library/react";
import App from "./App";
import ContactForm from "./components/ContactForm";

const breakTheTest = () => {
  throw new Error();
};
test("renders App without crashing", () => {
  render(<App />);
  // breakTheTest();
});

test("testing contact form", () => {
  const { getByPlaceholderText, getByLabelText , getByText} = render(<ContactForm />);

  const User = {
    eName: "Mike",
    eLastname: "Mitchell",
    eEmail: "mm@email.com",
    eMessage: "This is my message",
  };

  const expectedEmail = "this@email.com"; //another option

  const firstName = getByPlaceholderText("Edd");
  const lastName = getByText('Last Name*');
  const email =  getByText('Email*');
  const message = getByText('Message'); 



  fireEvent.change(firstName, {target:{value:User.eName}})
  fireEvent.change(lastName, { target: 'lastName' }) 
  fireEvent.change(email, {target:'email'})
  fireEvent.change(message, { target: 'Message' }) 
  //remember that you are having to " await" the response of the button. 

});
