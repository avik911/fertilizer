import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import App from './App'

describe('fertilizer storefront', () => {
  it('searches products, handles empty results, and clears the search', async () => {
    const user = userEvent.setup()
    render(<App />)
    expect(await screen.findByRole('heading', { name: 'Harvest Complete' })).toBeInTheDocument()
    const search = screen.getByRole('searchbox', { name: /what are you growing/i })
    await user.type(search, 'flowers')
    expect(screen.getByRole('heading', { name: 'Bloom & Root' })).toBeInTheDocument()
    expect(screen.queryByRole('heading', { name: 'Verdant Lawn' })).not.toBeInTheDocument()
    await user.clear(search)
    await user.type(search, 'moon dust')
    expect(screen.getByText(/no exact match/i)).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: /see all products/i }))
    expect(screen.getByRole('heading', { name: 'Gentle Growth' })).toBeInTheDocument()
  })

  it('updates the cart and confirms newsletter signup', async () => {
    const user = userEvent.setup()
    render(<App />)
    const addButton = await screen.findByRole('button', { name: /add harvest complete to cart/i })
    await user.click(addButton)
    expect(screen.getByRole('link', { name: /shopping cart with 1 items/i })).toBeInTheDocument()
    await user.type(screen.getByRole('textbox', { name: /email address/i }), 'grower@example.com')
    await user.click(screen.getByRole('button', { name: /^join/i }))
    expect(screen.getByRole('status')).toHaveTextContent(/on the list/i)
  })

  it('exposes an accessible mobile navigation toggle', async () => {
    const user = userEvent.setup()
    render(<App />)
    const toggle = screen.getByRole('button', { name: /open navigation/i })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByRole('navigation', { name: /primary/i })).toHaveClass('open')
  })
})
