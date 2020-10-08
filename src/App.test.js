import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import * as rtl from "@testing-library/react";

test("renders App without crashing", () => {
  render(<App />);
});

test("test input", async ()=>{
  const wrapper = rtl.render(<App/>);
  const firstname = wrapper.getByPlaceholderText('Edd');
  const submit = wrapper.getByRole("button");

  await rtl.act(async ()=>{
    rtl.fireEvent.change(firstname, {target: {value: "Dwaine"}});
    rtl.fireEvent.submit(submit);
  });

});

