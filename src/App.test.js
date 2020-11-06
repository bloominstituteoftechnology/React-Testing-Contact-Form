import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders App without crashing", () => {
  render(<App />);
});


test('renders the app head', () =>{
  render(<App />)
})



//Input fields work
//submit button works
//renders info to page




