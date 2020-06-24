import React from "react";
import { render, fireEvent, waitForElement } from "@testing-library/react";
import App from "../App";
import ContactForm from "./ContactForm";

// test("renders ContactForm without crashing", () => {
//   render(<ContactForm />);
// });

test("runs required error for firstName input", async () => {
  const container = render(<ContactForm />)
  const button = container.getByTestId("form-submit")
  fireEvent.click(button)
  const warningNode = await waitForElement(() => container.getAllByText(/required/i)[0])  
  console.log(warningNode.innerHTML)
  expect(warningNode.innerHTML).toBe("Looks like there was an error: required")
})