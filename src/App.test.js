import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";
import ContactForm from "./components/ContactForm";

test("finds input First Name, Last Name, Email and Message without crashing", () => {
  const { getByLabelText, getByText, findAllByText } = render(<App />);

  const firstName = getByText(/first name/i);
  const lastName = getByText(/last name/i);
  const email = getByText(/email/i);
  const message = getByText(/message/i);

  expect(firstName).toBeInTheDocument();
  expect(lastName).toBeInTheDocument();
  expect(email).toBeInTheDocument();
  expect(message).toBeInTheDocument();

  // fireEvent.change(firstName, {
  //   target: { name: "First Name", value: "Edd" }
  // });
});

test("this test allows users to fill out forms", () => {
  const { getByLabelText } = render(<ContactForm />);

  fireEvent.change(getByLabelText(/first name/i), {
    target: { value: "code" }
  });
  fireEvent.change(getByLabelText(/last name/i), {
    target: { value: "codecode" }
  });
  fireEvent.change(getByLabelText(/email/i), {
    target: { value: "code@code.com" }
  });
  fireEvent.change(getByLabelText(/message/i), {
    target: { value: "this is just another test message" }
  });
});

//
// test("form fills in fields and submits", () => {
//   const { getByLabelText, getByText, findAllByText } = render(<ContactForm />);
//
//   // query for the form inputs
//   const fnInput = getByLabelText(/firstName/i);
//   const lnInput = getByLabelText(/lastName/i);
//   const emailInput = getByLabelText(/email/i);
//   const messageInput = getByLabelText(/message/i);
//
//   // fireEvent function from RTL to fill in the inputs
//   fireEvent.change(fnInput, {
//     target: { name: "firstName", value: "aa" }
//   });
//   fireEvent.change(lnInput, {
//     target: { name: "lastName", value: "codecode" }
//   });
//   fireEvent.change(emailInput, {
//     target: { name: "email", value: "code@code.com" }
//   });
//   fireEvent.change(messageInput, {
//     target: { name: "message", value: "this is the message" }
//   });

// console.log(speciesInput.value);

// query for the submit button
// const submitButton = getByText(/submit!/i);

// clicking the button
// fireEvent.click(submitButton);
// fireEvent.click(submitButton);

// assertion
// findAllByText(/elephant/i);
// });
