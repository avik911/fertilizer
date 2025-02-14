import { categories } from '../data'

export default function Categories() {
  return (
    <section className="section categories" id="categories" aria-labelledby="categories-title">
      <div className="container">
        <div className="section-heading split-heading">
          <div><p className="eyebrow">Shop with purpose</p><h2 id="categories-title">Made for what you grow</h2></div>
          <p>Start with your plants, then find the nutrition that fits. No guesswork or crowded ingredient lists.</p>
        </div>
        <div className="category-grid">
          {categories.map((category) => (
            <a className="category-card" href="#shop" key={category.name}>
              <span className="category-symbol" aria-hidden="true">{category.symbol}</span>
              <span><strong>{category.name}</strong><small>{category.note}</small></span>
              <span className="arrow" aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
