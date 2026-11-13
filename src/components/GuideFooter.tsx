import { useState, type FormEvent } from 'react'

export default function GuideFooter() {
  const [subscribed, setSubscribed] = useState(false)
  const submit = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); setSubscribed(true) }
  return <>
    <section className="guide" id="guide"><div className="container guide-grid">
      <div className="guide-art" aria-hidden="true"><span className="guide-sun"></span><span className="stem stem-one">☘</span><span className="stem stem-two">☘</span><span className="soil-line"></span><strong>From the ground up</strong></div>
      <div className="guide-copy"><p className="eyebrow">Grow with confidence</p><h2>A little knowledge goes a long way.</h2><p>Good growing starts below the surface. Our field notes make soil health, nutrient ratios, and seasonal feeding easier to understand.</p>
        <ol><li><span>01</span><div><strong>Start with your soil</strong><p>A simple soil test shows what’s present—and what’s missing.</p></div></li><li><span>02</span><div><strong>Match the moment</strong><p>Feed at the right growth stage instead of following the calendar alone.</p></div></li><li><span>03</span><div><strong>Measure, then water</strong><p>Use only what plants need and water it in thoroughly.</p></div></li></ol>
        <a className="text-link" href="#products">Read the grower’s guide <span aria-hidden="true">→</span></a>
      </div>
    </div></section>
    <section className="benefits" aria-label="Service benefits"><div className="container benefit-grid"><p><span aria-hidden="true">♧</span><strong>Considered ingredients</strong><small>Selected with soil health in mind</small></p><p><span aria-hidden="true">◇</span><strong>Plain-language guidance</strong><small>Clear rates and simple directions</small></p><p><span aria-hidden="true">□</span><strong>Reliable delivery</strong><small>Free shipping over $50</small></p></div></section>
    <footer id="about"><div className="container footer-grid"><div><a className="brand footer-brand" href="#top"><span className="brand-mark">F</span><span>Field <i>&</i> Flourish</span></a><p>Thoughtful nutrition for gardens,<br />growers, and good soil.</p></div><div className="footer-links"><div><strong>Explore</strong><a href="#products">Shop all</a><a href="#categories">By crop</a><a href="#guide">Field notes</a></div><div><strong>Help</strong><a href="mailto:hello@example.com">Contact</a><a href="#products">Shipping</a><a href="#products">FAQ</a></div></div><div className="newsletter"><p className="eyebrow">Notes from the field</p><h2>Seasonal wisdom, occasionally sent.</h2>{subscribed ? <p className="success" role="status">You’re on the list. Here’s to good growing.</p> : <form onSubmit={submit}><label htmlFor="email">Email address</label><div><input id="email" type="email" placeholder="you@example.com" required /><button type="submit">Join <span aria-hidden="true">→</span></button></div></form>}</div></div><div className="container footer-bottom"><small>© 2026 Field & Flourish</small><div><a href="#top">Privacy</a><a href="#top">Terms</a></div><a href="#top">Back to top ↑</a></div></footer>
  </>
}
