import type { FormEvent } from 'react'

type HeroProps = { query: string; onQueryChange: (value: string) => void }

export default function Hero({ query, onQueryChange }: HeroProps) {
  const submitSearch = (event: FormEvent) => {
    event.preventDefault()
    document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Soil-first plant nutrition</p>
          <h1 id="hero-title">Good growth starts <em>below the surface.</em></h1>
          <p className="hero-intro">Straightforward fertilizers for thriving gardens, productive crops, and greener spaces—backed by guidance you can actually use.</p>
          <form className="hero-search" role="search" onSubmit={submitSearch}>
            <label htmlFor="hero-product-search">What are you growing?</label>
            <div className="search-control">
              <input id="hero-product-search" type="search" value={query} onChange={(event) => onQueryChange(event.target.value)} placeholder="Try citrus, lawn, vegetables…" />
              <button type="submit">Find a match</button>
            </div>
          </form>
          <ul className="trust-list" aria-label="Our product standards">
            <li><span aria-hidden="true">✓</span> Clearly labeled</li>
            <li><span aria-hidden="true">✓</span> Grower tested</li>
            <li><span aria-hidden="true">✓</span> Practical advice</li>
          </ul>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="sun"></div>
          <div className="leaf leaf-one"></div>
          <div className="leaf leaf-two"></div>
          <div className="product-sack"><span>FIELD</span><strong>5·5·5</strong><small>ALL-ROUNDER</small></div>
          <p>Feed the soil.<br />Nourish the season.</p>
        </div>
      </div>
    </section>
  )
}
