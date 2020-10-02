import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import ContactForm from "./components/ContactForm";

test("renders App without crashing", () => {
  render(<App />);
});

test("renders h1 with no errors", () => {
  //Arrange
  render(<App />);

  //Act
  const header = screen.getByText("Add User!");

  console.log(header);

  //Assert
  expect(header).toBeInTheDocument();
});

describe("Tests Contact Form", () => {
  test("user can fill out and submit form", () => {
    //Arrange
    render(<ContactForm />);
    //Act
    //query each input
    const firstNameInput = screen.getByLabelText(/firstName/i); // Breaks here//
    const lasNameInput = screen.getByLabelText(/lastName/i);
    const emailInput = screen.getByLabelText(/email/i);
    const messageInput = screen.getByLabelText(/message/i);
    const button = screen.getByRole("button", { name: /submit/i });

    // fireEvent.change(firstNameInput, {target:{name:'firstName', value: ''}})
    // fireEvent.change(lastNameInput, {target:{name:'lastName', value: ''}})
    // fireEvent.change(emailInput, {target:{name:'email', value: ''}})
    // fireEvent.change(messageInput, {target:{name:'message', value: ''}})

    //fill out form
    //click
    //Assert
    //test that our for input exists
  });
});
