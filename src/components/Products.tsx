import { useEffect, useMemo, useState } from 'react'
import { products } from '../data'

type ProductsProps = {
  query: string
  onQueryChange: (value: string) => void
  onAdd: () => void
}

type Status = 'loading' | 'ready' | 'error'

export default function Products({ query, onQueryChange, onAdd }: ProductsProps) {
  const initialState: Status = new URLSearchParams(window.location.search).get('productState') === 'error' ? 'error' : 'loading'
  const [status, setStatus] = useState<Status>(initialState)

  useEffect(() => {
    if (status !== 'loading') return
    const timer = window.setTimeout(() => setStatus('ready'), 450)
    return () => window.clearTimeout(timer)
  }, [status])

  const filteredProducts = useMemo(() => {
    const normalized = query.trim().toLowerCase()
    if (!normalized) return products
    return products.filter((product) => `${product.name} ${product.category} ${product.description}`.toLowerCase().includes(normalized))
  }, [query])

  return (
    <section className="section products-section" id="shop" aria-labelledby="products-title">
      <div className="container">
        <div className="section-heading products-heading">
          <div><p className="eyebrow">Reliable by design</p><h2 id="products-title">Field favorites</h2></div>
          <div className="filter-search">
            <label htmlFor="product-filter">Search products</label>
            <input id="product-filter" type="search" value={query} onChange={(event) => onQueryChange(event.target.value)} placeholder="Search the range" />
          </div>
        </div>

        {status === 'loading' && (
          <div className="product-grid" aria-busy="true" aria-label="Loading products">
            {[1, 2, 3, 4].map((item) => <div className="product-card skeleton" key={item}><div></div><span></span><span></span><span></span></div>)}
          </div>
        )}

        {status === 'error' && (
          <div className="state-panel" role="alert">
            <span className="state-icon" aria-hidden="true">!</span>
            <h3>We couldn’t load the field shelf.</h3>
            <p>Your connection may have paused. Try again and we’ll fetch the products once more.</p>
            <button className="button primary-button" type="button" onClick={() => setStatus('loading')}>Try again</button>
          </div>
        )}

        {status === 'ready' && filteredProducts.length === 0 && (
          <div className="state-panel">
            <span className="state-icon" aria-hidden="true">?</span>
            <h3>No products match “{query}”</h3>
            <p>Try a crop such as citrus or lawn, or clear your search to browse every formula.</p>
            <button className="button primary-button" type="button" onClick={() => onQueryChange('')}>Clear search</button>
          </div>
        )}

        {status === 'ready' && filteredProducts.length > 0 && (
          <div className="product-grid" aria-live="polite">
            {filteredProducts.map((product) => (
              <article className="product-card" key={product.id}>
                <div className={`product-visual ${product.tone}`}>
                  {product.badge && <span className="badge">{product.badge}</span>}
                  <div className="mini-sack" aria-hidden="true"><span>FIELD</span><strong>{product.name.match(/\d+-\d+-\d+/)?.[0] ?? 'GROW'}</strong><small>{product.size}</small></div>
                </div>
                <div className="product-body">
                  <p className="product-category">{product.category}</p>
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <div className="product-buy">
                    <span><strong>${product.price}</strong><small>{product.size}</small></span>
                    <button type="button" onClick={onAdd} aria-label={`Add ${product.name} to cart`}>Add <span aria-hidden="true">+</span></button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
