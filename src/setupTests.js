// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom/extend-expect";
import "mutationobserver-shim";

// test("Inputs firstName", () => {
//   const { getByTestId } = render(<ContactForm />);
//   getByTestId("firstNameInput");
// });

// test("Inputs email", () => {
//   render(<ContactForm />);
//   const emailInput = screen.getByTestId(/email/i);
//   const emailValue = "blech@gmail.com";
//   fireEvent.change(emailInput, { target: { value: emailValue } });
//   expect(emailInput.toHaveValue(emailValue));
// });
