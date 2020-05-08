import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders App without crashing", () => {
  render(<App />);
});

// test("renders Submit header", () => {
//   // arrange
//   const { getByText } = render(<App />);
//   // act
//   const header = getByText(/submit/i);
//   // assert 
//   expect(header).toBeInTheDocument();

// });