import React from "react";
import { render,screen } from "@testing-library/react";
import App from "./App";

test("renders App without crashing", () => {
  render(<App />);
});

test('render the app label', ()=>{
  render(<App/>)

const label = screen.getByText(/First Name/i)

// console.log(label)
expect(label).toBeInTheDocument()
expect(label).toBeTruthy()
expect(label).not.toHaveTextContent(/The dogs are out/i)



})