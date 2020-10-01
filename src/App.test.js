import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import App from "./App";

test("renders App without crashing", () => {
  render(<App />);
});

test("Filling out the form", async () => {
  const { getByLabelText, getByTestId, getByText, queryAllByTestId, queryByTestId } = render(<App />);

  const firstNameInput = getByLabelText(/first name/i);

  fireEvent.change(firstNameInput, {target: {value: "Carlos"}});

  expect(firstNameInput.value).toBe("Carlos");
  console.log("cea: App.test.js: filling out the form test: firstNameInput value: ", firstNameInput.value);

  await waitFor(() => {
    fireEvent.blur(firstNameInput);
  });

  expect(queryAllByTestId("firstNameError")).toStrictEqual([]);

  const lastNameInput = getByLabelText(/last name/i);

  fireEvent.change(lastNameInput, {target: {value: "Alvarez"}});

  expect(lastNameInput.value).toBe("Alvarez");
  console.log("cea: App.test.js: filling out the form test: lastNameInput value: ", lastNameInput.value);

  await waitFor(() => {
    fireEvent.blur(lastNameInput);
  });

  expect(queryAllByTestId("lastNameError")).toStrictEqual([]);

  const emailInput = getByLabelText(/Email/i);

  fireEvent.change(emailInput, {target: {value: "carlos.alvarezberrio@gmail.com"}});

  expect(emailInput.value).toBe("carlos.alvarezberrio@gmail.com");
  console.log("cea: App.test.js: filling out the form test: emailInput value: ", emailInput.value);

  await waitFor(() => {
    fireEvent.blur(emailInput);
  });

  expect(queryAllByTestId("emailError")).toStrictEqual([]);

  const messageInput = getByLabelText(/message/i);

  fireEvent.change(messageInput, {target: {value: ""}});

  expect(messageInput.value).toBe("");
  console.log("cea: App.test.js: filling out the form test: messageInput value: ", messageInput.value);

  await waitFor(() => {
    fireEvent.blur(messageInput);
  });
  

  await waitFor(() => {
    fireEvent.click(getByTestId("submitButton"));
    
  });

  await waitFor(() => {
    const datasubmitted = queryByTestId("datasubmitted");
    console.log("cea: App.test.js: filling out the form: datasubmitted: ", datasubmitted.textContent);
  });

  
});