import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import ContactForm from "./components/ContactForm";

test("renders App without crashing", () => {
	render(<App />);
});

test("gets by testid", () => {
	const { getByTestId } = render(<App />);
	expect(getByTestId(/app/i)).toBeInTheDocument();
});

test("input with placeholder 'bill' is in the dom", () => {
	const { getByPlaceholderText } = render(<App />); //arrange
	const lastNameInput = getByPlaceholderText("luo"); //act
	expect(lastNameInput).toBeTruthy(); //assert
	expect(lastNameInput).toBeInTheDocument();
});


test("submit button", () => {
  const {getByText} = render(<ContactForm/>);
  const submitButton = getByText("submit");
  expect(submitButton).toBeInTheDocument();
})
