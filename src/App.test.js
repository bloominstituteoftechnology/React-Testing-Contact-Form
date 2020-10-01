import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders App without crashing", () => {
  render(<App />);
});

test("Contains First Name input", () => {
  //Arrange
  const { getByText } = render(<App />);
  //Act
  getByText(/First Name/i);
  getByText(/Last Name/i);
  getByText(/Email/i);
  getByText(/Message/i);
  //Assert
});

test("has submit button", () => {
  const { getByTestId } = render(<App />);
  getByTestId(/submit/i);
});
