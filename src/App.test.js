import React from "react";
import { render, fireEvent, getByTestId } from "@testing-library/react";
import App from "./App";
import ContactForm from './components/ContactForm';




test(" form renders without errors", () => {
  render(<ContactForm />);
})

test("all input fields are working", async () => {

const { getByLabelText } = render(<ContactForm />);

const firstNameInput = getByLabelText(/first name*/i);

expect(firstName).toBeTruthy();

const lastNameInput = getByLabelText(/last name*/i);

expect(lastName).toBeTruthy();

const emailInput = getByLabelText(/Email/i);

expect(email).toBeTruthy();

const message = getByLabelText(/message*/i);

expect(message).toBeTruthy();

fireEvent.change(firstNameInput,{target: {name:'firstName', value:'Battle'}
});
fireEvent.change(lastNameInput,{target: {name:'lastName', value:'Cat'}
});
fireEvent.change(emailInput,{target: {name:'email', value:'skeletor@greystonemanner.com'}
});

}) 










test("renders App without crashing", () => {
  render(<App />);
});
