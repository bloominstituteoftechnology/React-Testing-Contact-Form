import React from "react";
import { render } from "@testing-library/react";
import * as rtl from '@testing-library/react';
import App from "./App";
import 'mutationobserver-shim';
// import { italic } from "ansi-colors";

afterEach(rtl.cleanup);

test("renders App without crashing", () => {
  render(<App />);
});

test("renders submit form header", () => {

  const { getByText } = render(<App />);

  const header = getByText(/submit form/i);

  expect(header).toBeInTheDocument();

})