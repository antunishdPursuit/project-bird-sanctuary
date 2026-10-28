import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

test('duplicate selections, removal, and the three-bird discount stay in sync', () => {
  render(<App />);
  const addShoebill = screen.getAllByRole('button', { name: 'Adoptee' })[0];
  fireEvent.click(addShoebill);
  fireEvent.click(addShoebill);
  expect(screen.getByText('Total: $200')).toBeInTheDocument();
  fireEvent.click(addShoebill);
  expect(screen.getByText('Total: $270')).toBeInTheDocument();
  expect(screen.getByText('Discount Applied: 10%')).toBeInTheDocument();
  fireEvent.click(screen.getAllByRole('button', { name: 'Remove' })[0]);
  expect(screen.getByText('Total: $200')).toBeInTheDocument();
  expect(screen.queryByText('Discount Applied: 10%')).not.toBeInTheDocument();
  expect(screen.getAllByRole('button', { name: 'Remove' })).toHaveLength(2);
});

test('checkout prevents navigation and shows the confirmation after clearing the cart', () => {
  render(<App />);
  fireEvent.click(screen.getAllByRole('button', { name: 'Adoptee' })[0]);
  const form = screen.getByRole('button', { name: 'Adopt!' }).closest('form');
  const submit = new Event('submit', { bubbles: true, cancelable: true });
  fireEvent(form, submit);
  expect(submit.defaultPrevented).toBe(true);
  expect(screen.getByText(/Thank you so much for attempting/)).toBeInTheDocument();
  expect(screen.queryByRole('button', { name: 'Remove' })).not.toBeInTheDocument();
});
