import React from "react";
import ReactDOM from "react-dom";
import ContactForm from "./ContactForm";
import {render, fireEvent} from "@testing-library/react";

// test 1, if contact form renders


// test("renders form", () => {
//     render(<ContactForm />)
// });

// it("renders without crashing", () => {
//     const div = document.createElement("div");
//     ReactDOM.render(<ContactForm />, div)
// })

// test 2, if labels are being rendered

// to see if there's a bug...

// screen.debug(screen.getByText(/first name/i));

// testing for appearance

// test('first name appears', async () => {
//     await waitFor(() => {
//         expect(getByText(/first name/i)).toBeInTheDocument()
//     })

//     const nameinput = await findByText(/first name/i)
// })

// test("button works", () => {
//     const { getByTestId } = render(<ContactForm />);
//     const button = getByTestId("submit");

//     fireEvent.click(button);
//     expect(button).toBeVisible();
// })


// test("renders labels above each ContactForm input", () => {
//     const { getByLabelText } = render(<ContactForm />);
  
//     const firstNameLabel = getByLabelText(/first name/i)
//     const lastNameLabel = getByLabelText(/last name/i)
//     const emailLabel = getByLabelText(/email/i)
//     const messageLabel = getByLabelText(/message/i)
  
//     expect(firstNameLabel).toBeInTheDocument();
//     expect(lastNameLabel).toBeInTheDocument();
//     expect(emailLabel).toBeInTheDocument();
//     expect(messageLabel).toBeInTheDocument();
  
//   });
  
//   test("inputs on ContactForm are registering", () => {
//     const { getByLabelText } = render(<ContactForm />);
  
//     const firstNameInput = getByLabelText(/first name/i)
//     const lastNameInput = getByLabelText(/last name/i)
//     const emailInput = getByLabelText(/email/i)
//     const messageInput = getByLabelText(/message/i)
  
//     fireEvent.change( firstNameInput, {target: {value: "test first name"}})
//     fireEvent.change( lastNameInput, {target: {value:  "test last name"}})
//     fireEvent.change( emailInput, {target: {value: "testing@email.com"}})
//     fireEvent.change( messageInput, {target: {value: "test message"}})
  
//     expect(firstNameInput.value).toBe("testing first name")
//     expect(lastNameInput.value).toBe("testing last name")
//     expect(emailInput.value).toBe("testing@email.com")
//     expect(messageInput.value).toBe("testing message")
//   })

//   

test("Form renders", () => {
render(<ContactForm />);

 const firstNameInput = screen.getByTestId(/firstname/i)
 const lastNameInput = screen.getByTestId(/lastname/i)
 const emailInput = screen.getByTestId(/email/i)
 const messageInput = screen.getByTestId(/message/i)
 const submitButton = screen.getByTestId(/submit/i)

 fireEvent.change(firstNameInput, {target: {value: "Kat"}});
 fireEvent.change(lastNameInput, {target: {value: "Kumar"}});
 fireEvent.change(emailInput, {target: { value:"email@email.com"}});
 fireEvent.change(messageInput, {target: {value: "testing message"}});
 fireEvent.click(submitButton);

 expect(firstNameInput.value).toBe("Kat")
 expect(lastNameInput.value).toBe("Kumar")
 expect(emailInput.value).toBe("email@email.com")
 expect(messageInput.value).toBe("testing message")
})

test("Errors show up if value is empty", () => {
    render(<ContactForm />)

    const submitButton =screen.getByTestId(/submit/i)

    fireEvent.click(submitButton);

    setTimeout(() => {
        expect(screen.getByTestId(/firstNameError/i)).toBeInTheDocument();
        expect(screen.getByTestId(/lastNameError/i)).toBeInTheDocument();
        expect(screen.getByTestId(/emailError/i)).toBeInTheDocument();
    }, 1);
});