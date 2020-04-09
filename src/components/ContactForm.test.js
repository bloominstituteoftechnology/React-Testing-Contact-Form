import React from 'react';
import { render,fireEvent} from '@testing-library/react';
import ContactForm from './ContactForm';

test("render a component!", () => {
    const result = render(<ContactForm />);
    // console.log(result)
})

test("test the label text of first name", () => {
    const { getByLabelText, getByTestId } = render(<ContactForm />);

    const firstName = getByLabelText(/First/);
    expect(firstName).toBeInTheDocument();

    const firstNameId = getByTestId("firstName");
    expect(firstNameId).toBeInTheDocument();
});

test('form submit adds new info to the list', () => {
    
  });

test("test to sure that the inputs can be filled in", () => {
    const {getByLabelText} = render(<ContactForm />)

    const firstNameInput = getByLabelText(/First/i);
    const lastNameInput = getByLabelText(/Last/i);
    const emailInput = getByLabelText(/Email/i);
    const messageInput = getByLabelText(/Message/i);

    fireEvent.change(firstNameInput, {target: {value:"hue"}});
    fireEvent.change(lastNameInput, {target: {value:"will"}});
    fireEvent.change(emailInput, {target: {value:"email@mail.com"}})
    fireEvent.change(messageInput, {target: {value:"gretting"}})
    
   expect(firstNameInput.value).toBe("hue")
})