import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

test('duplicate selections, removal, and the three-bird discount stay in sync', () => {
  render(<App />);
  const addShoebill = screen.getByRole('button', { name: 'Add Shoebill to adoption list' });
  fireEvent.click(addShoebill);
  fireEvent.click(addShoebill);
  expect(screen.getByText('Total: $200')).toBeInTheDocument();
  fireEvent.click(addShoebill);
  expect(screen.getByText('Total: $270')).toBeInTheDocument();
  expect(screen.getByText('Discount Applied: 10%')).toBeInTheDocument();
  fireEvent.click(screen.getAllByRole('button', { name: 'Remove Shoebill from adoption list' })[0]);
  expect(screen.getByText('Total: $200')).toBeInTheDocument();
  expect(screen.queryByText('Discount Applied: 10%')).not.toBeInTheDocument();
  expect(screen.getAllByRole('button', { name: 'Remove Shoebill from adoption list' })).toHaveLength(2);
});

test('checkout prevents navigation and shows the confirmation after clearing the cart', () => {
  render(<App />);
  fireEvent.click(screen.getByRole('button', { name: 'Add Shoebill to adoption list' }));
  expect(screen.getByLabelText('First name')).toBeInTheDocument();
  expect(screen.getByLabelText('Email')).toBeInTheDocument();
  const form = screen.getByRole('button', { name: 'Adopt!' }).closest('form');
  const submit = new Event('submit', { bubbles: true, cancelable: true });
  fireEvent(form, submit);
  expect(submit.defaultPrevented).toBe(true);
  expect(screen.getByRole('dialog')).toBeInTheDocument();
  expect(screen.getByRole('button', { name: 'OK' })).toHaveFocus();
  expect(screen.queryByRole('button', { name: 'Remove Shoebill from adoption list' })).not.toBeInTheDocument();
});

test('a failed bird image is identified without hiding its adoption action', () => {
  render(<App />);
  fireEvent.error(screen.getByRole('img', { name: 'Royal Flycatcher' }));
  expect(screen.getByRole('img', { name: 'Royal Flycatcher image unavailable' })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: 'Add Royal Flycatcher to adoption list' })).toBeInTheDocument();
});

test('bonus tiers use the existing subtotal boundaries', () => {
  render(<App />);
  const add = screen.getByRole('button', { name: 'Add Shoebill to adoption list' });
  fireEvent.click(add);
  expect(screen.getByText('Stickers')).toBeInTheDocument();
  expect(screen.queryByText('Background for your computer')).not.toBeInTheDocument();
  fireEvent.click(add); fireEvent.click(add);
  expect(screen.getByText('Background for your computer')).toBeInTheDocument();
  fireEvent.click(add); fireEvent.click(add); fireEvent.click(add);
  expect(screen.getByText('Tote bag')).toBeInTheDocument();
  fireEvent.click(screen.getByRole('button', { name: 'Add Blue Jay to adoption list' }));
  expect(screen.getByText('Invites to VIP live streams')).toBeInTheDocument();
});

test('the existing ordered-bird Easter egg remains available', () => {
  render(<App />);
  ['Owl', 'Albatross', 'Nacunda nighthawk', 'Hainan blue flycatcher'].forEach(name => {
    fireEvent.click(screen.getByRole('button', { name: `Add ${name} to adoption list` }));
  });
  fireEvent.submit(screen.getByRole('button', { name: 'Adopt!' }).closest('form'));
  expect(screen.getByText('Love Ya Baby, Have a Song')).toBeInTheDocument();
});
