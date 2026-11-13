import { FormEvent, useEffect, useMemo, useState } from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Categories } from './components/Categories'
import { Products } from './components/Products'
import { GuideFooter } from './components/GuideFooter'
import { products } from './data'

export default function App() {
  const [menu,setMenu] = useState(false)
  const [query,setQuery] = useState('')
  const [loading,setLoading] = useState(true)
  const [failed,setFailed] = useState(false)
  const [email,setEmail] = useState('')
  const [joined,setJoined] = useState(false)
  const [cart,setCart] = useState(0)

  useEffect(()=>{ const timer=setTimeout(()=>setLoading(false),650); return ()=>clearTimeout(timer) },[])
  const filtered=useMemo(()=>products.filter(p=>`${p.name} ${p.category} ${p.detail}`.toLowerCase().includes(query.toLowerCase())),[query])
  const search=(event:FormEvent)=>{event.preventDefault();document.querySelector('#products')?.scrollIntoView({behavior:'smooth'})}
  const subscribe=(event:FormEvent)=>{event.preventDefault();if(email.trim())setJoined(true)}
  const showError=()=>{setLoading(false);setFailed(true)}
  const retry=()=>{setFailed(false);setLoading(true);setTimeout(()=>setLoading(false),500)}

  return <>
    <Header menu={menu} setMenu={setMenu} cart={cart}/>
    <main id="main-content">
      <Hero query={query} setQuery={setQuery} onSearch={search}/>
      <Categories/>
      <Products query={query} setQuery={setQuery} loading={loading} failed={failed} filtered={filtered} retry={retry} showError={showError} addToCart={()=>setCart(cart+1)}/>
      <GuideFooter email={email} setEmail={setEmail} joined={joined} subscribe={subscribe}/>
    </main>
  </>
}
