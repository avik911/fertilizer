export type Product = { name:string; category:string; detail:string; price:number; badge?:string; image:string }
export const products:Product[] = [
  {name:'All-Purpose Grow',category:'Organic',detail:'4-4-4 · 20 lb bag',price:32,badge:'Best seller',image:'https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=900&q=80'},
  {name:'Tomato & Vegetable',category:'Specialty',detail:'3-5-6 · 12 lb bag',price:26,badge:'Staff pick',image:'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=900&q=80'},
  {name:'Lawn Revival',category:'Lawn care',detail:'16-4-8 · Covers 5,000 sq ft',price:44,image:'https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=900&q=80'},
  {name:'Bloom Booster',category:'Specialty',detail:'2-8-4 · 8 lb bag',price:24,image:'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=900&q=80'}
]
