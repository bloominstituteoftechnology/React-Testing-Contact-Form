import React from 'react'
// import { render } from 'test-library/react';
import ContactForm from './ContactForm';
import { render, fireEvent, getByTestId } from '@testing-library/react';

test("test to render", () => {
    render(<ContactForm />);
});

test("contact will submit", () => {
    const { getByLabelText, getByTestId }=render(<ContactForm/>);

    const firstNameInput = getByLabelText(/first name/i);
    const lastNameInput = getByLabelText(/last name/i);
    const emailInput = getByLabelText(/email/i);
    fireEvent.change(firstNameInput,{target: {name: "firstName", value:"james"}
});
    fireEvent.change(lastNameInput,{target: {name: "lastName", value:"bond"}
});
    fireEvent.change(emailInput,{target: {name: "email", value:"jamesbond@007.com"}
});
const submitButton= getByTestId("submit");
fireEvent.click(submitButton);
});