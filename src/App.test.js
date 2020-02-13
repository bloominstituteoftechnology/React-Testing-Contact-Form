import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

import 'mutationobserver-shim';

test("renders App without crashing", () => {
  render(<App />);
});

test('first name* is on form', async () => {
  const {getByText} = render(<App />);
  const firstName = getByText(/first name*/i);
  expect(firstName).toBeInTheDocument();
});