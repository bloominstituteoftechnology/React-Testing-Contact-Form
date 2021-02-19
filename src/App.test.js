import React from "react";
import { render, screen } from "@testing-library/react";

import App from "./App"

test('renders the App component without errors', () => {

    // Arrange
    render(<App />);

    // Assert
    // no assertion needed
})
