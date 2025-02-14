import { useEffect, useRef, useState } from 'react'

type HeaderProps = { cartCount: number }

export default function Header({ cartCount }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false)
  const menuButton = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!isOpen) return
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
        menuButton.current?.focus()
      }
    }
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [isOpen])

  const closeMenu = () => setIsOpen(false)

  return (
    <>
      <div className="announcement">Free regional delivery on orders over $75 <span aria-hidden="true">·</span> Expert support included</div>
      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#top" aria-label="Field and Flourish home">
            <span className="brand-mark" aria-hidden="true">F</span>
            <span><strong>Field &amp; Flourish</strong><small>Grow well, naturally</small></span>
          </a>
          <button ref={menuButton} className="menu-button" type="button" aria-expanded={isOpen} aria-controls="primary-navigation" onClick={() => setIsOpen((open) => !open)}>
            <span aria-hidden="true">{isOpen ? '×' : '☰'}</span>
            <span>{isOpen ? 'Close' : 'Menu'}</span>
          </button>
          <nav id="primary-navigation" className={isOpen ? 'nav is-open' : 'nav'} aria-label="Primary navigation">
            <a href="#shop" onClick={closeMenu}>Shop</a>
            <a href="#categories" onClick={closeMenu}>By crop</a>
            <a href="#guidance" onClick={closeMenu}>Growing guide</a>
            <a href="#about" onClick={closeMenu}>Our approach</a>
          </nav>
          <a className="cart-link" href="#shop" aria-label={`Shopping cart with ${cartCount} items`}>
            Cart <span aria-live="polite">{cartCount}</span>
          </a>
        </div>
      </header>
    </>
  )
}
