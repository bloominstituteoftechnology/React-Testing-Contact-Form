import React from "react";
import { render, screen } from '@testing-library/react'
import App from "./App"

test("renders without errors", () => {
  render(<App />);
  //checks if we have an error on all of App.
})
