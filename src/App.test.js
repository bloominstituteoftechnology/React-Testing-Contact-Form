import React from "react"
import { render, screen } from "@testing-library/react";
import App from "./App"

// Arrange: render our component
// Act: Get the thing we are testing
// Assert: Make sure it actually exists

// _______________________________________________________________
// Sanity Checker
test("renders App without errors", () => {
    render(<App />);
})

// Actual Tests are on the componentForm page because all we have is a form.
