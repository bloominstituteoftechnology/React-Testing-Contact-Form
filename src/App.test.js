import React from "react";
import { render, screen, fireEvent, getByTestId } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";
import ContactForm from "./components/ContactForm";

test("renders App without crashing", () => {
  render(<App />);
});

test("renders component", () => {
  render(<ContactForm />);
});

test("form works with good inputs", () => {
  render(<ContactForm />);

  screen.debug();

  // fireEvent.change(screen.getByTestId("firstName"), {
  //   target: { value: "Rya" },
  // });

  // fireEvent.change(screen.getByTestId("lastName"), {
  //   target: { value: "Clark" },
  // });

  // fireEvent.change(screen.getByTestId("email"), {
  //   target: { value: "rbclark244@gmail.com" },
  // });

  const nameField = screen.getByTestId("firstName").querySelector("input");
  fireEvent.change(nameField, { target: { value: "Rya" } });

  const lastField = screen.getByTestId("lastName").querySelector("input");
  fireEvent.change(lastField, { target: { value: "Clark" } });

  const emailField = screen.getByTestId("email").querySelector("input");
  fireEvent.change(emailField, { target: { value: "rbclark244@gmail.com" } });
});

// test("click submit button", async () => {
//   render(<ContactForm />);
//   const submit = screen.getByTestId(/submit/i);
//   fireEvent.click(submit);
// });

// test("name max", () => {
//   const { getByTestId } = render(<ContactForm />);

//   let firstName = getByTestId("firstName")

//   expect(firstName.)
// });

// test("name exists", () => {
//   const { toHaveTextContent } = render(<ContactForm />)
// })

// test("works", () => {
//   const { getByText } = render(<ContactForm />);

//   const firstNameInput = screen.getAllByLabelText(/First Name*/i);
//   const lastNameInput = screen.getByLabelText(/Last Name*/i);
//   const emailInput = screen.getByLabelText("Email*");

//   const firstNameValue = "Baba";
//   const lastNameValue = "Yaga";
//   const emailValue = "babayaga@gmail.com";

//   userEvent.type(firstNameInput, firstNameValue);
//   userEvent.type(lastNameInput, lastNameValue);
//   userEvent.type(emailInput, emailValue);

//   // fireEvent.change(firstNameInput, { target: { value: firstNameValue } });
//   // fireEvent.change(lastNameInput, { target: { value: lastNameValue } });
//   // fireEvent.change(emailInput, { target: { value: emailValue } });

//   expect(firstNameInput).toHaveTextContent(firstNameValue);
//   expect(lastNameInput).toHaveTextContent(lastNameValue);
//   expect(emailInput).toHaveTextContent(emailValue);
// });
