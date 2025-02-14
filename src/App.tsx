import { useState } from 'react'
import Categories from './components/Categories'
import GuideFooter from './components/GuideFooter'
import Header from './components/Header'
import Hero from './components/Hero'
import Products from './components/Products'

export default function App() {
  const [query, setQuery] = useState('')
  const [cartCount, setCartCount] = useState(0)

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <Header cartCount={cartCount} />
      <main id="main-content">
        <Hero query={query} onQueryChange={setQuery} />
        <Categories />
        <Products query={query} onQueryChange={setQuery} onAdd={() => setCartCount((count) => count + 1)} />
        <GuideFooter />
      </main>
    </>
  )
}
