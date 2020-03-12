import React from "react";
import { render } from "@testing-library/react";
import * as rtl from '@testing-library/react';
import App from "./App";

test("renders App without crashing", () => {
  render(<App />);
  console.log("hello");
});
