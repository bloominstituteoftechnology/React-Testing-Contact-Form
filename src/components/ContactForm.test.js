import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
// import { act } from 'react-dom/test-utils';

import ContactForm from './ContactForm';

test('Contact form renders without errors', () => {
    //ARRANGE
    render(<ContactForm />);
           
});

test('renders the input labels', () => {
    //Arrange
       render(<ContactForm/>)
      
       //No Act Needed
       //ASSERT
});

   test('user can submit form and can be displayed', async () => {
        //Arrange - render the component and get access to the form elements in DOM
        render(<ContactForm />);
        const firstNameInput = screen.getAllByLabelText(/First Name*/)
        const lastNameInput = screen.getAllByLabelText(/Last Name*/)
        const emailInput = screen.getAllByLabelText(/Email*/)
        const messageInput = screen.getAllByLabelText(/Message/)
        const submitButton = screen.getAllByRole('button', {name: /Submit/i })

        //Act - type into the form, filling out all fields of the form, then submit
        userEvent.type(firstNameInput, 'Tony')
        userEvent.type(lastNameInput, 'Miller')
        userEvent.type(emailInput, 'tony.miller@blackthough.tech')
        userEvent.type(messageInput, 'Test Message')
        userEvent.type(submitButton)
        //Assert - make sure the new data is displayed on screen
        const NewUser = screen.findByText(/Tony/i);

        NewUser.then((e) => {
            expect(e).toBeVisible()
            expect(e).toBeInTheDocument();
        });

        NewUser.catch((e) => {
            console.log(e)
        })


   });
