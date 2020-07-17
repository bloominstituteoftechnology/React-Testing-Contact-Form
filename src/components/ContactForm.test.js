import App from '../App'
import ContactForm from './ContactForm'
import React from 'react'
import {render, getByTestId, fireEvent, act} from "@testing-library/react"

test('renders App', async() => {
    act(()=>{     const { getByTestId } = render(<ContactForm />);
})


    const firstName = getByTestId('test-firstName');
    fireEvent.change(firstName,{
        target: {value: 'Dustin'}
    })
    const lastName = getByTestId('test-lastName');
    fireEvent.change(lastName,{
        target: {value: 'Tiner'}
    })
    const email = getByTestId('test-email');
    fireEvent.change(email,{
        target: {value: 'dustychaps@aol.com'}
    })
    const message = getByTestId('test-message');
    fireEvent.change(message,{
        target: {value:'this is the best day of my life!!'}
    })
    const form = getByTestId('test-submit');
    act(()=>{form.click()
        const response = getByTestId('test-response');
    });



    expect(getByTestId('test-firstName')).toHaveValue('Dustin');
    expect(getByTestId('test-lastName')).toHaveValue('Tiner');
    expect(getByTestId('test-email')).toHaveValue('dustychaps@aol.com');
    expect(getByTestId('test-message')).toHaveValue('this is the best day of my life!!');
    expect(getByTestId('test-response')).toBeInTheDOM
});
