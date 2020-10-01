import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import ContactForm from './components/ContactForm';

test("renders App without crashing", () => {
  render(<App />);
});

test("blank firstname blur displays an error", async ()=>{
  const container = render(<ContactForm />);
  const firstNameField = container.getByTestId("firstName");
  act(()=> {
    fireEvent.blur(firstNameField);
  })
  const error = await waitForElement(()=>container.getByTestId("firstNameError"));
})