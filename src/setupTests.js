// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';
import 'mutationobserver-shim';
// import dependencies
import React from "react";
// import react-testing methods
import { render } from "@testing-library/react";
// import App
import App from './App';



test("renders App without crashing", () => {
    render(<App />);
  });