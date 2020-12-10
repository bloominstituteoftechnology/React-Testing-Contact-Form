// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import React from "react";
import { render, screen } from "@testing-library/jest-dom"
import "mutationobserver-shim";

import App from "./App";

//apparently this test does not exist so I cant run it. This is WAAAAAAYYY faster than just manually typing the input into the component. I see why testing is important. You have to be able to build a component and then get frustrated as to why it is not testing the way it should be. Just the time I spent typing this comment is taking longer than manually testing the component. 

// Find the fixed one in the components folder. The hour or so it will take me just to write a simple test is time well spent. I could have thuroughly manually tested the component in that time and probably created 1 -2 MORE components, but hey we gotta make sure a machine can also fill out our form. 

test("Ensures that all labels mounted successfully", async () => {
  //Arrange
  render(<App />);
  //Act
  const fName = screen.getByText(/First Name*/);
  const lName = screen.getByLabelText(/Last Name*/);
  const email = screen.getByText(/email*/i);
  const message = screen.getByLabelText(/message/i);
  //Assert
  expect(fName, lName, email, message).toBeInTheDocument();
});
