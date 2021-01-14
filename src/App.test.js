import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test("sanity check", ()=>{
    render(<App/>)
    console.log("App renders")
})
describe("Can use form", () => {
  test("can get inputs", () => {
    render(<App />);
    const first = screen.getByPlaceholderText("Edd");
    const last = screen.getByPlaceholderText("Burke");
    const email = screen.getByPlaceholderText("bluebill1049@hotmail.com");
    const message = screen.getByLabelText("Message");
  });
  test('can input first name no errors', ()=>{
    render(<App />);
    const first = screen.getByPlaceholderText("Edd");
    fireEvent.click(first);
    fireEvent.keyPress(first, {key: "j", keyCode: "keyJ"})
    fireEvent.keyPress(first, {key: "a", keyCode: "KeyA"});
    fireEvent.click(screen.getByPlaceholderText("bluebill1049@hotmail.com"));

    screen.getByText('Looks like there was an error: minLength')

    fireEvent.click(first);
    fireEvent.change(first, {target: {value: "mie"}});
    fireEvent.click(screen.getByPlaceholderText("bluebill1049@hotmail.com"))

    expect(screen.findByText('Looks like there was an error')).toBe("null")
  })
});