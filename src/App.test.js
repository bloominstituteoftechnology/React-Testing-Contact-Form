import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
// import { App } from './App';
import ContactForm from './components/ContactForm';
import { act } from "react-dom/test-utils";

// test("renders App without crashing", () => {
//   const { getByText } = render(<App />);

//   console.log(getByText);
// });

test('first name input max length 10', async () => {
    const { getByLabelText, container } = render(<ContactForm />);

    // console.log(container);

    await act(async () => {
        const nameInput = getByLabelText(/First Name*/i)
        fireEvent.change(nameInput, { target: { value: 'Jennifer' } })
        fireEvent.blur(nameInput)
    })

    expect(container.innerText).toMatch('Jennifer')



})

