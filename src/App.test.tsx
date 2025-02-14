import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, describe, expect, it } from 'vitest'
import App from './App'

afterEach(() => {
  window.history.replaceState({}, '', '/')
})

describe('fertilizer storefront', () => {
  it('filters products and shows a helpful empty state', async () => {
    const user = userEvent.setup()
    render(<App />)

    expect(await screen.findByRole('heading', { name: 'Garden All-Rounder 5-5-5' })).toBeInTheDocument()
    await user.type(screen.getByLabelText('Search products'), 'citrus')
    expect(screen.getByRole('heading', { name: 'Citrus & Fruit Boost 6-3-6' })).toBeInTheDocument()
    expect(screen.queryByRole('heading', { name: 'Garden All-Rounder 5-5-5' })).not.toBeInTheDocument()

    await user.clear(screen.getByLabelText('Search products'))
    await user.type(screen.getByLabelText('Search products'), 'orchids')
    expect(screen.getByRole('heading', { name: 'No products match “orchids”' })).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Clear search' }))
    expect(screen.getByRole('heading', { name: 'Garden All-Rounder 5-5-5' })).toBeInTheDocument()
  })

  it('updates the accessible cart count', async () => {
    const user = userEvent.setup()
    render(<App />)
    const addButton = await screen.findByRole('button', { name: 'Add Garden All-Rounder 5-5-5 to cart' })
    await user.click(addButton)
    expect(screen.getByRole('link', { name: 'Shopping cart with 1 items' })).toBeInTheDocument()
  })

  it('confirms newsletter signup', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.type(screen.getByLabelText('Email address'), 'grower@example.com')
    await user.click(screen.getByRole('button', { name: 'Join the list' }))
    expect(screen.getByRole('status')).toHaveTextContent('You’re on the list.')
  })

  it('opens and closes the mobile navigation with the keyboard', async () => {
    const user = userEvent.setup()
    render(<App />)
    const menu = screen.getByRole('button', { name: 'Menu' })
    await user.click(menu)
    expect(screen.getByRole('button', { name: 'Close' })).toHaveAttribute('aria-expanded', 'true')
    await user.keyboard('{Escape}')
    await waitFor(() => expect(menu).toHaveAttribute('aria-expanded', 'false'))
    expect(menu).toHaveFocus()
  })
})
