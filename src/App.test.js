import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders App without crashing", () => {
  render(<App />);
});

test('renders the app header', ()=>{
  //Arrange: render our component
  render(<App/>);
});
