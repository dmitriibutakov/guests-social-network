import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import store from "./Redux/redux-store";

test('renders learn react link', () => {
  let state = store.getState()
  render(<App state={state}
              dispatch={store.dispatch.bind(store)}/>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
