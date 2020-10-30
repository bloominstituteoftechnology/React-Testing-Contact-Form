import React from "react";
import { render, screen, fireEvent} from "@testing-library/react";
import App from "./App";

test("renders App without crashing", () => {
  render(<App />);

});

test('can text in name input', () => {
  //Arrange: render component
  render(<App />)

  //Act:
  //1. Get access
  const name = screen.getByLabelText(/first name*/i)

  //2. add text to our fields
  fireEvent.change(name, {target: {value: 'Ben', name:'boy'}});
})