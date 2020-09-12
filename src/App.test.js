import React from "react";
import {
  fireEvent,
  getByTestId,
  getByText,
  render,
  screen,
} from "@testing-library/react";
import App from "./App";
import ContactForm from "./components/ContactForm";

test("renders App without crashing", () => {
  render(<App />);
  // const container = render(<App />);
  // console.log(container);
});

test("renders ContactForm", () => {
  render(<ContactForm />);
});

it("contains first name, last name, email and message forms", () => {
  const { getByText } = render(<ContactForm />);
  // console.log(getByText);

  getByText(/First Name*/i);
  getByText(/Last Name*/i);
  getByText("Email*");
  getByText("Message");
});

test("has a submit button", () => {
  // Arrange
  render(<ContactForm />);

  // Act
  const submitButton = screen.getByRole("button", { name: /submit/i });
  // console.log(submitButton);
  expect(submitButton).toBeInTheDocument();
});

test("Input fields should accept input", () => {
  render(<ContactForm />);

  const firstName = screen.getByText("First Name*").querySelector("input");
  const lastName = screen.getByText(/last name/i).querySelector("input");
  const email = screen.getByText("Email*").querySelector("input");

  const submit = screen.getByText(/submit/i);

  fireEvent.change(firstName, { target: { value: "Tony" } });
  fireEvent.change(lastName, { target: { value: "Sorensen" } });
  fireEvent.change(email, { target: { value: "tony48853@gmail.com" } });
  // fireEvent.change(message, { target: { value: "random text" } });
  fireEvent.click(submit);

  expect(firstName.value).toBe("Tony");
  expect(lastName.value).toBe("Sorensen");
  expect(email.value).toBe("tony48853@gmail.com");
  // expect(message.value).toBe("random text");
});

// Can't figure out how to get this working
// test("form shows error when first name is more than 3 characters", () => {
//   const { getByTestId, getByText } = render(<ContactForm />);

//   const firstNameInput = screen.getByText("First Name*").querySelector("input");
//   const submitButton = getByText(/submit/i);

//   fireEvent.change(firstNameInput, { target: { value: "Tony" } });
//   console.log(firstNameInput.value);
//   expect(firstNameInput.value).toBe("Tony");
//   fireEvent.click(submitButton);

//   expect(screen.getByTestId("error")).toBeInTheDocument();
// });
