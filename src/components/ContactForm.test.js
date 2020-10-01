import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ContactForm from "./ContactForm";

describe("the contact form", () => {
  const { getByPlaceholderText, container } = render(<ContactForm />);

  const fnInput = getByPlaceholderText("First Name");
  const lnInput = getByPlaceholderText("Last Name");
  const emInput = getByPlaceholderText("Email");
  const msgInput = getByPlaceholderText("enter message here...");
  const subBtn = container.querySelector("input[type=submit]");

  it("renders the first name input", () => {
    expect(fnInput).toBeTruthy();
  });
  it("renders the last name input", () => {
    expect(lnInput).toBeTruthy();
  });
  it("renders the email input", () => {
    expect(emInput).toBeTruthy();
  });
  it("renders the message input", () => {
    expect(msgInput).toBeTruthy();
  });
  it("renders the message input", () => {
    expect(subBtn).toBeTruthy();
  });
  it("triggers onChange on each field with an addition of input", () => {
    fireEvent.change(fnInput, {
      target: { value: "edd" },
    });
    expect(fnInput.value).toBe("edd");

    fireEvent.change(lnInput, {
      target: { value: "burke" },
    });
    expect(lnInput.value).toBe("burke");

    fireEvent.change(emInput, {
      target: { value: "burke@burke.com" },
    });
    expect(emInput.value).toBe("burke@burke.com");

    fireEvent.change(msgInput, {
      target: { value: "Have a nice day!" },
    });
    expect(msgInput.value).toBe("Have a nice day!");
  });
});
