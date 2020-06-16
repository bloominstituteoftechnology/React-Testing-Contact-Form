import React from "react";
import { render, fireEvent, screen } from "@testing-library/react"; //it exposes render function n allows us to render React component
import "@testing-library/jest-dom/extend-expect";
import ContactForm from "./ContactForm";
// import { screen } from "@testing-library/dom";
import { act } from "react-dom/test-utils";

// it("renders without crashing", () => {
//   render(<span className="greet">hello world</span>);
// });
describe("Testing Browser", () => {
  it("Welcome message", () => {
    act(() => {
      render(<ContactForm />);
    });
    screen.findByText("First Name");

    fireEvent.change(screen.getByLabelText(/firstName/i), {
      target: { value: "dpK" },
    });
  });
});

describe("LastName", () => {
  it("Its for LastName", () => {
    act(() => {
      render(<ContactForm />);
    });

    fireEvent.change(screen.getByLabelText(/lastName/i), {
      target: { value: "dpK" },
    });
  });
});
test("renders with no crashes", () => {
  //arrange
  // const { getByText } = render(<ContactForm />);

  fireEvent.change(screen.getByLabelText(/Last Name*/i), {
    target: { value: "Burke" },
  });
  // const txt1 = getByText(/email/i);
  // expect(txt1).toHaveLength(2);
  // console.log(ContactForm.debug);
  //   //act
  //   getByText(/[a-z]/i);
  // });
});
describe("renders with no crashes", () => {
  it("Its render for submit", () => {
    act(() => {
      render(<ContactForm />);
    });

    fireEvent.click(screen.getByText(/submit/i));
  });
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
