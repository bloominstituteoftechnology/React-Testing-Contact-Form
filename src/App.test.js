import React from 'react';
import { screen, render } from '@testing-library/react';
import App from './App';

test("renders App without errors", ()=> {
  render(<App/>);
});
