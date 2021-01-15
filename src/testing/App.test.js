import React from 'react';
import { render } from '@testing-library/react';

import App from '../App';

// sanity check - does not work?
test("renders App without errors", ()=>{
    render(<App />);
});