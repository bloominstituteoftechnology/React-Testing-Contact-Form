import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";
import ContactForm from './components/ContactForm';
import { act } from "react-dom/test-utils";

test("renders App without crashing", () => {
  render(<App />);
});

describe("On Submit works" , () => {
  it('calls onSubmit function', async () => {
    const mockOnSubmit = jest.fn()
    const { getByTestId, getByRole } = render(<ContactForm onSubmit = {mockOnSubmit} />)
    const emailInput = getByTestId("email")
    const firstNameInput = getByTestId("Edd")
    const lastNameInput = getByTestId("Burke")
    await act(async () => {
    fireEvent.change(emailInput, {target:{value:'email@123.com'}})
    fireEvent.change(firstNameInput, {target:{value:"Daniel"}})
    fireEvent.change(lastNameInput , {target: {value:"Terry"}})
  })
  await act(async () => {
      fireEvent.click(getByTestId("submit"))
  })
  expect(mockOnSubmit).toHaveBeenCalled
  })

})/*
test("Submit" , () => {

})
*/
/*
describe("Valid First Name"), () => {
  it('accepts firstname entry', () => { const firstNameInput = getByLabelText("firstName")
  fireEvent.change(firstNameInput, {target:{value:"Daniel"}})
  expect(firstNameInput).toHaveValue("Daniel")
  })
}*/
test('Have firstName' , () => {
  const { getByTestId } = render(<ContactForm />)
  const firstNameInput = getByTestId("Edd")
  fireEvent.change(firstNameInput, {target:{value:"Daniel"}})
  expect(firstNameInput).toHaveValue("Daniel")
})
/*
describe("Valid Last Name"), () => {
}
*/
test('Have Last Name ',  () => {
  const { getByTestId } = render(<ContactForm />)
  const lastNameInput = getByTestId("Burke")
  fireEvent.change(lastNameInput , {target: {value:"Terry"}})
  expect(lastNameInput).toHaveValue("Terry")
})
test('Have Valid Email' , () => {
  const { getByTestId } = render(<ContactForm />)
  const emailInput = getByTestId("email")
  fireEvent.change(emailInput, {target:{value:'email@123.com'}})
  expect(emailInput).toHaveValue('email@123.com')
})
/*
describe("Valid Email"), () => {
  const onSubmit = jest.fn()
  const data = {firstName : 'Maksym', lastName: 'Petrusenko', email:'DanielTerry@gmail.com', message : 'wazzup bitchess'}

    fireEvent.change(getByLabelText(/firstName/i), {target:{value:user.firstName}})

    fireEvent.change(utils.getByLabelText(/lastName/i), {target:{value:user.lastName}})
    
    fireEvent.change(utils.getByLabelText(/email/i), {target:{value:user.email}})

    fireEvent.click(getByText(/submit/i))

    expect(onSubmit).toHaveBeenCalled(1)
    expect(onSubmit).toHaveBeenCalledWith(data)
}
*/
