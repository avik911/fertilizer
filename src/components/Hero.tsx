import { FormEvent } from 'react'
type Props={query:string;setQuery:(value:string)=>void;onSearch:(event:FormEvent)=>void}
export function Hero({query,setQuery,onSearch}:Props){return <section className="hero" id="top"><div className="hero-content shell">
  <div className="hero-copy"><p className="eyebrow">✦ Plant nutrition, made simple</p><h1>Better soil.<br/><em>Stronger harvests.</em></h1>
    <p className="hero-text">Straightforward fertilizers and practical guidance for growers who care about what goes into the ground—and what comes out of it.</p>
    <form className="search" role="search" onSubmit={onSearch}><label className="sr-only" htmlFor="search">Search fertilizer products</label><span>⌕</span><input id="search" value={query} onChange={e=>setQuery(e.target.value)} placeholder="What are you growing?"/><button>Find the right feed <span>→</span></button></form>
    <ul className="trust"><li>✓ Tested formulas</li><li>✓ Expert support</li><li>✓ Responsible sourcing</li></ul>
  </div>
  <div className="hero-visual" role="img" aria-label="Healthy green vegetable field"><div className="hero-card"><span>THIS SEASON</span><strong>20% off</strong><small>all organic blends</small></div><div className="soil-note"><b>4.9</b><span>★★★★★<small>from 1,200+ growers</small></span></div></div>
</div></section>}
