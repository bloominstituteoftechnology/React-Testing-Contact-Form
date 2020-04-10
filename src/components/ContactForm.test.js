import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ContactForm from "./ContactForm";
import { act } from "react-dom/test-utils";
// import { act } from "react-dom/test-utils";

test("testing for form labels", () => {
  const { getByLabelText } = render(<ContactForm />);

  getByLabelText(/first name*/i);
  getByLabelText(/last name*/i);
});

test("check for submit form", () => {
  async () => {
    const { getByLabelText, findByTestId, getByTestId } = render(
      <ContactForm />
    );

    const inputEmail = getByLabelText(/email*/i);
    const inputMessage = getByLabelText(/message/i);

    fireEvent.change(inputEmail, {
      target: { value: "example@gmail.com" },
    });
    fireEvent.change(inputMessage, {
      target: { value: "this is the message" },
    });

    expect(inputEmail.value).toBe("example@gmail.com");
    expect(inputMessage.value).toBe("this is the message");

    fireEvent.change(findByTestId(/submit/i));

    const userInfo = await findByTestId(/value/i);
    expect(userInfo).toBeInTheDocument();
  };
});
