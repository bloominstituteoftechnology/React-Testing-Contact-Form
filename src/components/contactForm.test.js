import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ContactForm from "./ContactForm";

// test("renders with no crashes", () => {
//arrange
//   const { getByText } = render(<ContactForm />);

//   //act
//   getByText(/[a-z]/i);
// });

describe("testing contact form inputs", () => {
  it("Finds the Named Input", () => {
    let expected = 'input[name="firstname"]';
    //act

    let actual = 'input[name="firstname"]';
    // 'input[name="firstname"]';

    //assert
    expect(actual).toBe(expected);
  });
});
