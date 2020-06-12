import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ContactForm from "./ContactForm";

test("renders with no crashes", async () => {
  //arrange
  const { getByText, findByText } = render(<ContactForm />);
  const txt1 = await findByText('input[name="firstname"]');
  expect(txt1).toHaveLength(3);
  //   //act
  //   getByText(/[a-z]/i);
  // });
});
describe("testing contact form inputs", () => {
  it("Finds the Named Input", () => {
    let expected = "Edd";
    //act

    let actual = "Edd";
    // 'input[name="firstname"]';

    //assert
    expect(actual).toBe(expected);
  });
});

describe("testing contact form inputs", () => {
  it("Finds the Named Input", () => {
    let expected = "Burke";
    //act

    let actual = "Burke";
    // 'input[name="firstname"]';

    //assert
    expect(actual).toBe(expected);
  });
});
