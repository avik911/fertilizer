type HeroProps = { query: string; onQueryChange: (value: string) => void }

export default function Hero({ query, onQueryChange }: HeroProps) {
  return <section className="hero" id="top"><div className="container hero-grid">
    <div className="hero-copy"><p className="eyebrow">Rooted in better growing</p><h1>Feed the soil.<br /><em>Grow something good.</em></h1>
      <p className="hero-intro">Straightforward plant nutrition, made with considered ingredients for thriving gardens and more generous harvests.</p>
      <form className="search" role="search" onSubmit={(event) => event.preventDefault()}><label htmlFor="product-search">What are you growing?</label><div className="search-control"><span aria-hidden="true">⌕</span><input id="product-search" type="search" value={query} placeholder="Try “flowers” or “5–5–5”" onChange={(event) => onQueryChange(event.target.value)} />{query && <button type="button" onClick={() => onQueryChange('')} aria-label="Clear search">×</button>}</div></form>
      <ul className="trust-list" aria-label="Product benefits"><li><span>✓</span> Soil-minded</li><li><span>✓</span> Easy to use</li><li><span>✓</span> Garden tested</li></ul>
    </div>
    <div className="hero-art" aria-label="Illustration of healthy leaves growing from rich soil" role="img"><div className="sun"></div><div className="leaf leaf-one"></div><div className="leaf leaf-two"></div><div className="leaf leaf-three"></div><div className="bag-art"><span>FIELD & FLOURISH</span><strong>HARVEST<br />COMPLETE</strong><small>ORGANIC PLANT FOOD<br />5–5–5</small></div><p className="art-note"><span>01</span> Slow-release nutrition<br />for steady growth</p></div>
  </div></section>
}
