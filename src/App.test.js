import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders App without crashing", () => {
  render(<App />);
});

test("checks for the first name", ()=>{
  const {getByText} = render(<App />);
  const header = getByText(/First Name/i);
  expect(header).toBeInTheDocument();
});
test("checks for the last name", ()=>{
  const {getByText} = render(<App />);
  const header = getByText(/lasst Name/i);
  expect(header).toBeInTheDocument();
});