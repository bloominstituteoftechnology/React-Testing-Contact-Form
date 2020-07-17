import React from "react";
import { render, fireEvent } from "@testing-library/react";
// import { App } from './App';
import ContactForm from './components/ContactForm';
import { act } from "react-dom/test-utils";

test('test form inputs', async () => {
    const { getByTestId } = render(<ContactForm />);

    const firstName = getByTestId('firstName');
    fireEvent.change(firstName, {
        target: { value: 'Jennifer' }
    });
    expect(getByTestId('firstName')).toHaveValue('Jennifer');

    const lastName = getByTestId('lastName');
    fireEvent.change(lastName, { target: { value: 'Vest' } });
    expect(getByTestId('lastName')).toHaveValue('Vest');

    const email = getByTestId('email');
    fireEvent.change(email, { target: { value: 'jenvest2020@gmail.com' } });
    expect(getByTestId('email')).toHaveValue('jenvest2020@gmail.com');
});

// test('tests submit button', async () => {
//     const { getByTestId } = render(<ContactForm />);

//     const submit = getByTestId('submit');
//     act(async () => {
//         await fireEvent.click(submit);
//     })


// })

