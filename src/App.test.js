import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

// test("renders App without crashing", () => {
//   render(<App />);
// });

test('Shows the name Anthony', () => {
  const { getByText } = render(<App />);
  const Anthony2 = getByText(/anthony/i);
  expect(Anthony2).toBeVisible();
})
