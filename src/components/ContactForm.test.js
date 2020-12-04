import React from "react";
import {act} from "react-dom/test-utils";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ContactForm from "./ContactForm"


describe("Test the contact form", () => {
test("form should not have an error", async () => {
    act(() => {
      render(<ContactForm />);
    });
    //Act
    // 1) Set Variables
        const firstNameInput = screen.getByLabelText(/First Name/i)
        const lastNameInput = screen.getByLabelText(/last name/i)
        const emailInput = screen.getByLabelText(/email/i)
        const messageInput = screen.getByLabelText(/message/i)
    // 2) Simulate Typing 
        userEvent.type(firstNameInput, "Bob")
        userEvent.type(lastNameInput, "Robbie")
        userEvent.type(emailInput, "email@email.com")
        userEvent.type(messageInput, "Hello From the Otherside!")
        // console.log(firstNameInput.value);
        // console.log(lastNameInput.value);
        // console.log(emailInput.value);
        // console.log(messageInput.value);
    // 3) Creat Button Variable and Click On it
        const button = screen.getByRole("button", {type:"submit"})
        await act (async () => {
            userEvent.click(button);
          });
    const error = await screen.findByText((content) =>
      content.includes("Looks like there was an error")
    );
  });
});








test("User Can Fill in Form and Submit", async() => {
//Arrange-Render the page
    act(() => {
        render(<ContactForm />);
    });
// Act
// 1) Set Variables
    const firstNameInput = screen.getByLabelText(/First Name/i)
    const lastNameInput = screen.getByLabelText(/last name/i)
    const emailInput = screen.getByLabelText(/email/i)
    const messageInput = screen.getByLabelText(/message/i)
// 2) Simulate Typing 
    userEvent.type(firstNameInput, "Bob")
    userEvent.type(lastNameInput, "Robbie")
    userEvent.type(emailInput, "email@email.com")
    userEvent.type(messageInput, "Hello From the Otherside!")
    // console.log(firstNameInput.value);
    // console.log(lastNameInput.value);
    // console.log(emailInput.value);
    // console.log(messageInput.value);
// 3) Creat Button Variable and Click On it
    const button = screen.getByRole("button", {type:"submit"})
    await act (async () => {
        userEvent.click(button);
      });
    // console.log(button);

    const firstNameResult = await screen.findByText(/"firstName": "Bob"/i);
    console.log(firstNameResult);
  });


    // const newPerson = await screen.getByDisplayValue("firstName")
    // console.log(newPerson)
    // expect(newPerson).toBeInTheDocument();
// });



