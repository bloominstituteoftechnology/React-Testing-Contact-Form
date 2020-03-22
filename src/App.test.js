import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";
import { exportAllDeclaration } from "@babel/types";

test("renders App without crashing", () => {
  render(<App />);
});

test("renders First Name", () => {
  const { getByText } = render(<App/>);
  const firstName = getByText(/first name/i);
  expect(firstName).toBeInTheDocument();
})

test("renders Last Name", () => {
  const { getByText } = render(<App/>);
  const LastName = getByText(/last name/i);
  expect(LastName).toBeInTheDocument();
})

test("renders Email", () => {
  const { getByText } = render(<App/>);
  const email = getByText(/email/i);
  expect(email).toBeInTheDocument();
})

test("renders Message", () => {
  const { getByText } = render(<App/>);
  const message = getByText(/message/i);
  expect(message).toBeInTheDocument();
})

test("click me button adds 1 to numClicks", () => {
  const { getByText } = render(<App/>)
  const numClickButton = getByText(/click me/i);
  fireEvent.click(numClickButton)
  expect(numClickButton.innerHTML).toBe("click me: 1")
})