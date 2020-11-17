import React from "react";
import { fireEvent, getByPlaceholderText, render, waitFor } from "@testing-library/react";
import App from "./App";
import ContactForm from './components/ContactForm'

//  checks to see if app renders without crashing 
test("renders App without crashing", () => {
  render(<App />);
});

// checks to see Contact Form renders without crashing
test('renders ConctactForm without crashing', () => {
  const { getByTestId } = render(<ContactForm />)
  const form = getByTestId('contact-form')
  expect(form).toBeInTheDocument()
})

test('validation of First Name input field', async () => {
  const { getByPlaceholderText, queryByText } = render(<ContactForm />)
  const firstName = getByPlaceholderText('Mengistu')
  const actualFirstName = getByPlaceholderText


  fireEvent.change(firstName, { target: { value: 'Robel' } })
  expect(firstName).toHaveValue('Robel')
  fireEvent.blur(firstName)

  await waitFor(() => {
    const error = queryByText('looks like there was an error: maxLength')
    expect(error).toBeNull()
  })
})

// if the first validation passes the validation is incorrect since firstName has Mengistu while expected value is Robel

test('validation of Last Name input field', async () => {
  const { getByPlaceholderText, queryByText } = render(<ContactForm />)
  const lastname = getByPlaceholderText('Robel')


  fireEvent.change(lastname, { target: { value: 'Mengistu' } })
  expect(lastname).toHaveValue('Robel')
  fireEvent.blur(lastname)

  await waitFor(() => {
    const error = queryByText('looks like there was an error: maxLength')
    expect(error).toBeNull()
  })
})


test('Validation of email field', async () => {
  const { getByPlaceholderText, queryByText } = render(<ContactForm />)

  const email = getByPlaceholderText('bluebill1049@hotmail.com')

  fireEvent.change(email, { target: { value: 'testing@gmail.com' } })
  expect(email).toHaveValue('testing@gmail.com')

  fireEvent.blur(email)

  await waitFor(() => {
    const error = queryByText('Looks like ther was error: invalid email format')
    expect(error).toBeNull()
  })
})
