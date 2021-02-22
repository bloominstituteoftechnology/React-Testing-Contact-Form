import React from 'react';
import App from './App';
import { render } from '@testing-library/react';
// App renders without errors

test('render App without errors', () => {
    render(<App />)
})