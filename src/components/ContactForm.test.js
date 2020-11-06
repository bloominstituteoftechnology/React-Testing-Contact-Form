import React from "react";
import {fireEvent, render, screen } from 'testing-library/react';

import ContactForm from './ContactForm';


test ('renders ContactForm', () => {
    render(<ContactForm/>)
})
