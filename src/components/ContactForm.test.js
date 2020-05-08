import React from 'react'
// import { render } from 'test-library/react';
import ContactForm from './ContactForm';
import { render, fireEvent, getByTestId } from '@testing-library/react';

test("test to render", () => {
    render(<ContactForm />);
});

test("contact form will submit", () => {
    const { getByLabelText, getByTestId }=render(<ContactForm/>);

    const firstNameInput = getByLabelText(/First Name/i);
    const lastNameInput = getByLabelText(/Last Name/i);
    const emailInput = getByLabelText(/Email/i);
    fireEvent.change(firstNameInput,{target: {name: "firstName", value:"james"}
});
    fireEvent.change(lastNameInput,{target: {name: "lastName", value:"bond"}
});
    fireEvent.change(emailInput,{target: {name: "email", value:"jamesbond@007.com"}
});
const submitBtn= getByTestId("submit");
fireEvent.click(submitBtn);

setTimeout(() => {
    const formRes = getByTestId(/dataInfo/i);
    expect(formRes).toBeInTheDocument();
  }, 1);
});