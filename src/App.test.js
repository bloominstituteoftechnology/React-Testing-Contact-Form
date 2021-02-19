import React from 'react'
import { render } from '@testing-library/react'
import App from './App'


//Make sure the app is rendering(simple test to make sure testing is working)

test('renders App without any errors' , () => {
    //Arrange
    render(<App />);
})
