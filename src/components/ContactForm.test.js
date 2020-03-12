import React from 'react';
import {render, fireEvent, wait, } from '@testing-library/react';

import ContactForm from './ContactForm'

test('it renders without crashing', () => {
    render(<ContactForm />)
})

test('it submits correct values', async () => {
    const {queryByLabelText, getByText, queryByTestId} = render(<ContactForm/>);

    const fname = queryByLabelText(/first name/i);
    const lname = queryByLabelText(/last name/i);
    const email = queryByLabelText(/email/i);
    const message = queryByLabelText(/message/i);
    const submit = queryByTestId('form')

    await wait(() =>{
        fireEvent.change(fname, {
            target: { name: 'firstName', value: 'bosdfasdf'}
        })
    })

    await wait(() =>{
        fireEvent.change(lname, {
            target: {name: 'lastName', value: 'lnae'}
        })
    })

    await wait(() =>{
        fireEvent.change(email, {
            target: {name: 'email', value: 'email@email.com'}
        })
    })

    await wait(() =>{
        fireEvent.change(message, {
            target: {name: 'message', value: "If this doesn't work I'm dropping out and joining the circus"}
        })
    })

    await wait(() => {
        fireEvent.click(submit)
    }) 

    expect(getByText(/lnae/i))



})