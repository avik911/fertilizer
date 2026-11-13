const categories=[['🌱','Organic','Feed soil naturally','sage'],['🥕','Vegetables','Bigger, tastier yields','clay'],['🌾','Field crops','Nutrition at scale','gold'],['🌿','Lawn & garden','Greener outdoor spaces','mint']]
export function Categories(){return <section className="category-section shell" id="categories">
  <div className="section-heading"><div><p className="eyebrow">SHOP YOUR WAY</p><h2>Made for what you grow</h2></div><a href="#products">View all products <span>→</span></a></div>
  <div className="category-grid">{categories.map(c=><a href="#products" className={`category ${c[3]}`} key={c[1]}><span>{c[0]}</span><div><h3>{c[1]}</h3><p>{c[2]}</p></div><b>›</b></a>)}</div>
</section>}
