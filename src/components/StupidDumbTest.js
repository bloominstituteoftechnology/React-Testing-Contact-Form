import React from "react";
import { render, getByLabelText, getByType } from "@testing-library/react";

import ContactForm from "./ContactForm";
import userEvent from "@testing-library/user-event";

test("loads the component, fills out the form, and submits it", async () => {
  const handleSubmit = jest.fn();
  render(<ContactForm />);
  const user = {
    fName: "Alex",
    lName: "Motor",
    email: "test@example.com",
    message: "A computer typed this out",
  };

  userEvent.type(getByLabelText(/First Name*/), user.fName);
  userEvent.type(getByLabelText(/last name*/i), user.lName);
  userEvent.type(getByLabelText(/Email*/), user.email);
  userEvent.type(getByLabelText(/message/i), user.message);
  userEvent.click(getByType(/submit/i));

  expect(handleSubmit).toHaveBeenCalledTimes(1);
  expect(handleSubmit).toHaveBeenCalledWith(user);
});

