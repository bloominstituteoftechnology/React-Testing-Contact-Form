import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ContactForm from './ContactForm';
import App from '../App'
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
    fireEvent.change(emailInput, {target:{value:'testemail@test.com'}})
    fireEvent.change(firstNameInput, {target:{value:"Petter"}})
    fireEvent.change(lastNameInput , {target: {value:"Cottontail"}})
  })
  await act(async () => {
      fireEvent.click(getByTestId("submit"))
  })
  expect(mockOnSubmit).toHaveBeenCalled
  })

})

test('Have firstName' , () => {
  const { getByTestId } = render(<ContactForm />)
  const firstNameInput = getByTestId("Edd")
  fireEvent.change(firstNameInput, {target:{value:"Cottontail"}})
  expect(firstNameInput).toHaveValue("Cottontail")
})

test('Have Last Name ',  () => {
  const { getByTestId } = render(<ContactForm />)
  const lastNameInput = getByTestId("Burke")
  fireEvent.change(lastNameInput , {target: {value:"Peter"}})
  expect(lastNameInput).toHaveValue("Peter")
})
test('Have Valid Email' , () => {
  const { getByTestId } = render(<ContactForm />)
  const emailInput = getByTestId("email")
  fireEvent.change(emailInput, {target:{value:'testemail@test.com'}})
  expect(emailInput).toHaveValue('testemail@test.com')
})
