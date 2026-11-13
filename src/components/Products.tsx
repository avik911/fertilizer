import { Product } from '../data'
type Props={query:string;setQuery:(value:string)=>void;loading:boolean;failed:boolean;filtered:Product[];retry:()=>void;showError:()=>void;addToCart:()=>void}
export function Products({query,setQuery,loading,failed,filtered,retry,showError,addToCart}:Props){return <section className="products-section" id="products"><div className="shell">
  <div className="section-heading"><div><p className="eyebrow">GROWER FAVORITES</p><h2>Proven in the field</h2><p>Dependable nutrition, season after season.</p></div>{query&&<button className="clear" onClick={()=>setQuery('')}>Clear search</button>}</div>
  {loading?<div className="product-grid" aria-label="Loading products" aria-busy="true">{[1,2,3,4].map(i=><div className="skeleton" key={i}/>)}</div>
  :failed?<div className="state" role="alert"><span>!</span><h3>We couldn't load the products</h3><p>Please check your connection and try again.</p><button onClick={retry}>Try again</button></div>
  :filtered.length===0?<div className="state"><span>⌕</span><h3>No products found for “{query}”</h3><p>Try a crop name, category, or N-P-K ratio.</p><button onClick={()=>setQuery('')}>Show all products</button></div>
  :<div className="product-grid">{filtered.map(p=><article className="product-card" key={p.name}><div className="product-image"><img src={p.image} alt=""/>{p.badge&&<span>{p.badge}</span>}</div><div className="product-info"><p>{p.category}</p><h3>{p.name}</h3><small>{p.detail}</small><div><strong>${p.price}.00</strong><button onClick={addToCart} aria-label={`Add ${p.name} to bag`}>＋</button></div></div></article>)}</div>}
  <button className="demo-error" onClick={showError}>Preview product error state</button>
</div></section>}
