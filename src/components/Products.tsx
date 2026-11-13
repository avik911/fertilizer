import type { Product } from '../data'

type Props = { products: Product[]; query: string; status: 'loading' | 'ready' | 'error'; onClear: () => void; onRetry: () => void; onAdd: () => void }

export default function Products({ products, query, status, onClear, onRetry, onAdd }: Props) {
  return <section className="section products" id="products" aria-labelledby="product-heading"><div className="container">
    <div className="section-heading product-title"><div><p className="eyebrow">Garden essentials</p><h2 id="product-heading">Made to help plants flourish</h2></div><p>{query ? `Results for “${query}”` : 'Simple formulas. Clear instructions. No guesswork.'}</p></div>
    {status === 'loading' && <div className="product-grid" aria-label="Loading products" aria-busy="true">{[1, 2, 3, 4].map((item) => <div className="product-card skeleton" key={item}><div></div><p></p><p></p></div>)}</div>}
    {status === 'error' && <div className="state-card" role="alert"><span aria-hidden="true">↻</span><h3>We couldn’t load the garden shelf</h3><p>The soil may be fine, but the connection isn’t. Please try again.</p><button className="button" type="button" onClick={onRetry}>Try again</button></div>}
    {status === 'ready' && products.length === 0 && <div className="state-card"><span aria-hidden="true">⌕</span><h3>No exact match yet</h3><p>Try a crop, nutrient ratio, or a broader growing goal.</p><button className="button" type="button" onClick={onClear}>See all products</button></div>}
    {status === 'ready' && products.length > 0 && <div className="product-grid">{products.map((product) => <article className="product-card" key={product.id}>
      <div className={`product-visual ${product.tone}`}>{product.badge && <span className="badge">{product.badge}</span>}<div className="mini-bag"><small>FIELD & FLOURISH</small><strong>{product.name}</strong><span>{product.formula}</span></div></div>
      <div className="product-info"><p className="product-meta">{product.category} <span>•</span> {product.size}</p><h3>{product.name}</h3><p>{product.description}</p><div className="product-buy"><strong>${product.price}.00</strong><button type="button" onClick={onAdd} aria-label={`Add ${product.name} to cart`}>Add to bag <span aria-hidden="true">＋</span></button></div></div>
    </article>)}</div>}
  </div></section>
}
