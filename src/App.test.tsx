import { fireEvent, render, screen } from '@testing-library/react'
import { expect, test } from 'vitest'
import App from './App'

test('presents the store and handles a product search', async () => {
  render(<App />)
  expect(screen.getByRole('heading', { name: /better soil/i })).toBeInTheDocument()
  fireEvent.change(screen.getByLabelText(/search fertilizer/i), { target: { value: 'tomato' } })
  expect(await screen.findByText('Tomato & Vegetable', {}, { timeout: 1500 })).toBeInTheDocument()
  expect(screen.queryByText('Lawn Revival')).not.toBeInTheDocument()
})

test('newsletter confirms a valid subscription', () => {
  render(<App />)
  fireEvent.change(screen.getByLabelText('Email address'), { target: { value: 'grower@example.com' } })
  fireEvent.click(screen.getByRole('button', { name: 'Subscribe' }))
  expect(screen.getByRole('status')).toHaveTextContent("You're on the list")
})
