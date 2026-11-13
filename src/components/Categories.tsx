import { categories } from '../data'

export default function Categories({ onChoose }: { onChoose: (category: string) => void }) {
  return <section className="section categories" id="categories" aria-labelledby="category-heading"><div className="container">
    <div className="section-heading"><div><p className="eyebrow">Find your formula</p><h2 id="category-heading">Shop by what you grow</h2></div><p>Plants have different appetites. Start with the crop and we’ll help with the rest.</p></div>
    <div className="category-grid">{categories.map((category, index) => <button className="category-card" type="button" key={category.name} onClick={() => onChoose(category.name)}><span className="category-number">0{index + 1}</span><span className="category-icon" aria-hidden="true">{category.icon}</span><strong>{category.name}</strong><small>{category.note}</small><span className="category-arrow" aria-hidden="true">↗</span></button>)}</div>
  </div></section>
}
