import { useState } from 'react'

export default function Header({ cartCount }: { cartCount: number }) {
  const [open, setOpen] = useState(false)
  return <>
    <div className="announcement">Free shipping on orders over $50 <span>•</span> Thoughtfully sourced ingredients</div>
    <header className="site-header"><div className="container nav-wrap">
      <a className="brand" href="#top" aria-label="Field and Flourish home"><span className="brand-mark" aria-hidden="true">F</span><span>Field <i>&</i> Flourish</span></a>
      <button className="menu-button" type="button" aria-expanded={open} aria-controls="primary-nav" onClick={() => setOpen(!open)}><span className="sr-only">{open ? 'Close' : 'Open'} navigation</span><span aria-hidden="true">{open ? '×' : '☰'}</span></button>
      <nav id="primary-nav" className={open ? 'nav open' : 'nav'} aria-label="Primary navigation">
        <a href="#products" onClick={() => setOpen(false)}>Shop</a><a href="#categories" onClick={() => setOpen(false)}>By crop</a><a href="#guide" onClick={() => setOpen(false)}>Grower’s guide</a><a href="#about" onClick={() => setOpen(false)}>Our story</a>
      </nav>
      <a className="cart" href="#products" aria-label={`Shopping cart with ${cartCount} items`}><span aria-hidden="true">Bag</span><strong aria-live="polite">{cartCount}</strong></a>
    </div></header>
  </>
}
