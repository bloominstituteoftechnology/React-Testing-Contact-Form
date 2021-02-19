import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

//Arrange: render the component and find the elements you need to work with
//Act: do stuff -- fill out forms, click buttons, etc.
//Assert: make sure the component behaved the way it should

test('renders App without errors', () => {
    render(<App />);
})



