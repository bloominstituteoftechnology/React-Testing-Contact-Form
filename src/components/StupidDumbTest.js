import React from "react";
import { render, getByLabelText, getByType } from "@testing-library/react";

import ContactForm from "./ContactForm";
import userEvent from "@testing-library/user-event";

test("loads the component, fills out the form, and submits it. The same thing anyone can do manually by just spinning up an instance of the server but we have to write code to do the same thing we could very easily do much more efficiently because we are cool or something like that. I keep hoping that MAYBE we can get to a point were we are writing tests that are beneficial and do things more efficiently than just manually completing the action, however I am getting the impression that the entire reason testing exists is to force the developer to do more work so the managers or executives that want to test their feature do not have to submit any information manually. They just push a button or type a line of code and see everything working", async () => {
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

// This test STILL DOES NOT RUN with npm test. I will take a fat 0 for this assignment. I don't even care. I ran npm start. i filled out the form. I saw the but myself. I fixed it. i wrote what SHOULD BE a working test. I spent too much time troubleshooting it. I looked up countless recources at this point. I have lost my will to care about this project anymore.
