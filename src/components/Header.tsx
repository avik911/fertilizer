type Props={menu:boolean;setMenu:(value:boolean)=>void;cart:number}
export function Header({menu,setMenu,cart}:Props){return <header className="site-header">
  <div className="announcement">Free delivery on orders over $75 <span>•</span> Growing support included</div>
  <div className="nav-wrap shell">
    <a className="brand" href="#top" aria-label="Field and Flourish home"><b>♧</b><span>Field <i>&</i> Flourish</span></a>
    <button className="menu-button" onClick={()=>setMenu(!menu)} aria-expanded={menu} aria-controls="primary-nav" aria-label={menu?'Close menu':'Open menu'}>{menu?'×':'☰'}</button>
    <nav id="primary-nav" className={menu?'nav-links open':'nav-links'} aria-label="Primary navigation"><a href="#products">Shop</a><a href="#categories">By crop</a><a href="#guidance">Grow guides</a><a href="#about">Our story</a></nav>
    <div className="nav-actions"><button aria-label="Account">♙</button><button aria-label={`Shopping bag with ${cart} items`}>♧{cart>0&&<small>{cart}</small>}</button></div>
  </div>
</header>}
