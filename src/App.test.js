import React from "react";
import { render, getByPlaceholderText, fireEvent } from "@testing-library/react";
import App from "./App";

// test("renders App without crashing", async () => {
//   //arrange
//   const { getByLabelText } = render(<App />);
//   //act
//   const emailInput = getByText(/email/i);
//   //assert
//   expect(name).toBeTruthy();
// });

// 

test("check for submit form", () => {
  async () => {
    const { getByLabelText } = render(
      <App />
    );

    const inputEmail = getByLabelText(/email*/i);
    const inputName = getByLabelText(/firstname/i);

    expect(inputEmail.value).toBe("example@gmail.com");
    expect(inputName.value).toBe("Alexis");
  

    fireEvent.change(inputEmail,{target: {name:'email', value:'billburr@billyB.com'}
    fireEvent.change
  });
}})
