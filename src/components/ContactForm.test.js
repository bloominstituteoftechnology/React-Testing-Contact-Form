import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ContactForm from "./ContactForm";

test("ContactForm renders without error", () => {
	render(<ContactForm />);
});

test("Can add a user without errors", async () => {
	render(<ContactForm />);

	const firstName = screen.getByPlaceholderText(/Edd/i);
	const lastName = screen.getByPlaceholderText(/Burke/i);
	const email = screen.getByPlaceholderText(/bluebill1049@hotmail.com/i);
	const message = screen.getByLabelText(/message/i);
	const submitButton = screen.getByRole(/button/i);

	userEvent.type(firstName, "Names");
	userEvent.type(lastName, "Named");
	userEvent.type(email, "tester@email.com");
	userEvent.type(message, "Testing.");

	userEvent.click(submitButton);

	const endMessage = await screen.findByText(/Testing/i);
	expect(endMessage).toBeInTheDocument();
});
