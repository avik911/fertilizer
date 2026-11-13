import { useEffect, useMemo, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Categories from './components/Categories'
import Products from './components/Products'
import GuideFooter from './components/GuideFooter'
import { products } from './data'

export default function App() {
  const [query, setQuery] = useState('')
  const [cartCount, setCartCount] = useState(0)
  const [status, setStatus] = useState<'loading' | 'ready' | 'error'>('loading')
  useEffect(() => { const timer = window.setTimeout(() => setStatus('ready'), 350); return () => window.clearTimeout(timer) }, [])
  const filtered = useMemo(() => {
    const term = query.trim().toLowerCase()
    return term ? products.filter((item) => [item.name, item.category, item.description, item.formula].some((value) => value.toLowerCase().includes(term))) : products
  }, [query])
  const retry = () => { setStatus('loading'); window.setTimeout(() => setStatus('ready'), 350) }

  return <>
    <a className="skip-link" href="#main-content">Skip to main content</a>
    <Header cartCount={cartCount} />
    <main id="main-content">
      <Hero query={query} onQueryChange={setQuery} />
      <Categories onChoose={(value) => { setQuery(value); document.querySelector('#products')?.scrollIntoView({ behavior: 'smooth' }) }} />
      <Products products={filtered} query={query} status={status} onClear={() => setQuery('')} onRetry={retry} onAdd={() => setCartCount((count) => count + 1)} />
      <GuideFooter />
    </main>
  </>
}
