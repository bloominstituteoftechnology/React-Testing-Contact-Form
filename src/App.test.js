import React from "react";
import { fireEvent, render } from "@testing-library/react";
import App from "./App";
import ContactForm from "./components/ContactForm";

test("renders App without crashing", () => {
  render(<App />);
});

test("renders ContactForm", () => {
  render(<ContactForm />);
});

it("contains first name, last name, email and message forms", () => {
  const { getByText } = render(<ContactForm />);
  getByText(/first name/i);
  getByText(/last name/i);
  getByText(/email/i);
  getByText(/mssage/i);
});

// *** FirstName Tests ***
// ***********************
// const firstNameTest = () => {
//   const firstName = render(<ContactForm />);
//   const firstNameInput = firstName.getByPlaceholderText("Edd");
//   return {
//     firstNameInput,
//     ...firstName,
//   };
// };

// test("First Name should accept only letters", () => {
//   const { firstNameInput } = firstNameTest();
//   fireEvent.change(firstNameInput, { target: { value: "1234" } });
//   fireEvent.click(submit)
//   expect(firstNameInput.value).toBe("");
// });

// test("First Name should accept all capital letters", () => {
//   const { firstNameInput } = firstNameTest();
//   fireEvent.change(firstNameInput, { target: { value: "ABC" } });
//   expect(firstNameInput.value).toBe("ABC");
// });
// test("First Name should accept all lowercase letters", () => {
//   const { firstNameInput } = firstNameTest();
//   fireEvent.change(firstNameInput, { target: { value: "abc" } });
//   expect(firstNameInput.value).toBe("abc");
// });

// test("First Name should have maximum length of 15", () => {
//   const { firstNameInput } = firstNameTest();
//   fireEvent.change(firstNameInput, { target: { value: "abcabcabcabcabcabc" } });
//   expect(firstNameInput.value).toBe("");
// });

// // test("First Name should be required", () => {
// //   const { firstNameInput } = firstNameTest();
// //   fireEvent.change(firstNameInput, { target: { value: "" } });
// //   expect(firstNameInput.value).toBe("");
// // });
// // test("First Name should have minimum length of 2", () => {

// // })

// // *** LastName Tests ***
// // ***********************
// const lastNameTest = () => {
//   const lastName = render(<ContactForm />);
//   const lastNameInput = lastName.getByPlaceholderText("Burke");
//   return {
//     lastNameInput,
//     ...lastName,
//   };
// };

// test("Last Name should accept only letters", () => {
//   const { lastNameInput } = lastNameTest();
//   fireEvent.change(lastNameInput, { target: { value: "123" } });
//   expect(lastNameInput.value).toBe("");
// });
// // test("Last Name should accept capital and lowercase letters", () => {

// // })
// // test("Last Name should be required", () => {

// // })
// // test("Last Name should have minimum length of 2", () => {

// // })
// // test("Last Name should have maximum length of 15", () => {

// // *** Email Tests ***
// // ***********************
// // const emailTest = () => {
// //   const email = render(<ContactForm />);
// //   const emailInput = email.getByPlaceholderText("bluebill1049@hotmail.com");
// //   return {
// //     emailInput,
// //     ...email,
// //   };
// // };

// // })
// // test("Email should be in proper format", () => {

// // })
// // test("Email should be required", () => {

// // })
// // test("Message field should accept input", () => {

// // })
// // test("Message field should have minimum length", () => {

// // })
// // test("Message field should NOT be required", () => {

// // })
// // test("Submit button should submit data", () => {

// // })
