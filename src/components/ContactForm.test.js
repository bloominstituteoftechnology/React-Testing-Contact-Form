import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ContactForm from "./ContactForm";

test("form renders without issue", () => {
	render(<ContactForm/>);
});

test("can fill the form", async () => {

	render(<ContactForm/>);

	const firstName = screen.getByLabelText(/First Name/i);
	const lastName = screen.getByLabelText(/Last Name/i);
	const email = screen.getByLabelText(/email/i);
	const message = screen.getByLabelText(/message/i);
	const submitBtn = screen.getByRole("button");

	expect(firstName).toBeInTheDocument();
	expect(lastName).toBeInTheDocument();
	expect(email).toBeInTheDocument();
	expect(message).toBeInTheDocument();
	expect(submitBtn).toBeInTheDocument();

	fireEvent.change(firstName, {target: {value: "John"}});
	fireEvent.change(lastName, {target: {value: "Cena"}});
	fireEvent.change(email, {target: {value: "tuturutu@gmail.com"}});
	fireEvent.change(message,{target: {value: "turururu"}});

	expect(firstName.value).toBe("John");
	expect(lastName.value).toBe("Cena");
	expect(email.value).toBe("tuturutu@gmail.com");
});