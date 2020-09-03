import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import ContactForm from './components/ContactForm';

test("renders App without crashing", () => {
  render(<App />);
});

//Part 3: Add your first test:
test("renders ContactForm.js without crashing", () => {
  render(<ContactForm />);
});

//Part 4: Write sufficient amount of tests

 //Arrange (initial requirements)
  //   Act (invoke method)
  //   Assert (expectations)
  //   render(<ContactForm />);

/* 
  Inputs:
    Placeholders are missing. 
      (Test to see if placeholder even exists. )
    Maximum length is too short first name. 
      (Test for error after long name is entered.)
  Validation:
    Validation check does not always check for type ex. email 
      (Test for a <p> error when no "@" symbol is used)
  ##Submit Button:##
    onSubmit does not work.
      (Test to see if after entering text into inputs if )
*/

//------------------------------// Inputs: //------------------------------//

// test('Changing inputs', () => {
//   const { getByLabelText, getByTestId } = render(<ContactForm/>)

//   const firstNameInput = getByLabelText(/First Name*/)
//   const emailInput =  getByLabelText(/email/i)

//   fireEvent.change(firstNameInput, {target: { value: "Test" },});

//   expect(firstNameInput.value).toBe("Test");


//   fireEvent.change(emailInput, {target: { value: "test@email.com" },});

//   expect(emailInput.value).toBe("test@email.com");

// })

// 'Test for placeholders'
test('Test for placeholders', () => {
// Placeholders are missing. 
//   (Test to see if placeholder even exists. )

})

// 'Test for maximum and minimum validation'
test('Test for maximum and minimum validation', () => {
// Maximum length is too short first name. 
//   (Test for error after long name is entered.)

})

//------------------------------// Validation: //------------------------------//

// 'Test for 
test('Test errors when incorrect type is used', () => {
// Validation check does not always check for type ex. email 
//   (Test for a <p> error when no "@" symbol is used)

}

//------------------------------// Submit: //------------------------------//

// 
test('Test to see if onSubmit functionality working', () => {
// onSubmit does not work.
//   (Test to see if after entering text into inputs if )


})