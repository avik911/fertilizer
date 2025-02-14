import { useState, type FormEvent } from 'react'

export default function GuideFooter() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const subscribe = (event: FormEvent) => {
    event.preventDefault()
    if (email) setSubscribed(true)
  }

  return (
    <>
      <section className="guide section" id="guidance" aria-labelledby="guide-title">
        <div className="container guide-grid">
          <div className="guide-art" aria-hidden="true"><span>01</span><div></div><p>Observe<br />Measure<br />Feed</p></div>
          <div className="guide-copy">
            <p className="eyebrow">From the growing guide</p>
            <h2 id="guide-title">Feed the plant you have, not the one on the label.</h2>
            <p>Great results begin with observation. Consider the season, your soil, and what the plant is telling you before reaching for more fertilizer.</p>
            <ol className="steps">
              <li><span>01</span><div><strong>Start with the soil</strong><p>Check moisture and drainage before adding nutrients.</p></div></li>
              <li><span>02</span><div><strong>Measure, don’t guess</strong><p>Use the lowest recommended rate, then watch the response.</p></div></li>
              <li><span>03</span><div><strong>Water it in well</strong><p>Move nutrition toward the root zone and away from foliage.</p></div></li>
            </ol>
            <a className="text-link" href="#shop">Explore plant nutrition <span aria-hidden="true">→</span></a>
          </div>
        </div>
      </section>

      <section className="benefits" id="about" aria-label="Why shop with Field and Flourish">
        <div className="container benefit-grid">
          <div><span aria-hidden="true">◌</span><strong>Clear formulas</strong><p>Know what you’re applying and why.</p></div>
          <div><span aria-hidden="true">⌁</span><strong>Considered delivery</strong><p>Plastic-light packing and grouped routes.</p></div>
          <div><span aria-hidden="true">✦</span><strong>Real guidance</strong><p>Practical answers from experienced growers.</p></div>
        </div>
      </section>

      <footer className="footer">
        <div className="container newsletter">
          <div><p className="eyebrow">Notes from the field</p><h2>Grow with the season.</h2><p>Monthly advice, timely reminders, and no inbox clutter.</p></div>
          {subscribed ? (
            <div className="success-message" role="status"><span aria-hidden="true">✓</span><div><strong>You’re on the list.</strong><p>Look out for the next note from the field.</p></div></div>
          ) : (
            <form onSubmit={subscribe}>
              <label htmlFor="newsletter-email">Email address</label>
              <div><input id="newsletter-email" type="email" autoComplete="email" required value={email} onChange={(event) => setEmail(event.target.value)} placeholder="you@example.com" /><button type="submit">Join the list</button></div>
              <small>By subscribing, you agree to receive growing notes. Unsubscribe anytime.</small>
            </form>
          )}
        </div>
        <div className="container footer-bottom">
          <a className="brand footer-brand" href="#top"><span className="brand-mark" aria-hidden="true">F</span><span><strong>Field &amp; Flourish</strong><small>Plant nutrition, thoughtfully grown.</small></span></a>
          <nav aria-label="Footer navigation"><a href="#shop">Products</a><a href="#guidance">Guides</a><a href="mailto:hello@fieldandflourish.example">Contact</a></nav>
          <p>© 2025 Field &amp; Flourish</p>
        </div>
      </footer>
    </>
  )
}
