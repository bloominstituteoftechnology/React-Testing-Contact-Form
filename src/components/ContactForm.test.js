import React from 'react';
import {render, fireEvent, getByTestId} from '@testing-library/react';
import ContactForm from './ContactForm';

test('test to render', () => {
    render(<ContactForm/>);
})
test('contact form will submit', () => {
const {getByLabelText, getByTestId}= render(<ContactForm/>);

const firstNameInput = getByLabelText(/First Name/i);
const lastNameInput = getByLabelText(/Last/i);
const emailInput = getByLabelText(/Email/i); 
fireEvent.change(firstNameInput,{target: {name:'firstName', value:'bil'}
});
fireEvent.change(lastNameInput,{target: {name:'lastName', value:'burr'}
});
fireEvent.change(emailInput,{target: {name:'email', value:'billburr@billyB.com'}
});
const submitButton= getByTestId('submit');
fireEvent.click(submitButton);
})