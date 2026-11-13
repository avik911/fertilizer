export type Product = { id: number; name: string; description: string; category: string; formula: string; price: number; size: string; badge?: string; tone: string }

export const categories = [
  { name: 'Vegetables', icon: '🥕', note: 'For abundant kitchen gardens' },
  { name: 'Flowers', icon: '✿', note: 'For vivid, longer blooms' },
  { name: 'Lawns', icon: '⌁', note: 'For dense, resilient turf' },
  { name: 'Indoor plants', icon: '♧', note: 'For steady, gentle growth' },
]

export const products: Product[] = [
  { id: 1, name: 'Harvest Complete', description: 'A balanced, slow-release blend for vegetables, herbs, and fruiting plants.', category: 'Vegetables', formula: '5–5–5', price: 24, size: '4 lb bag', badge: 'Bestseller', tone: 'clay' },
  { id: 2, name: 'Bloom & Root', description: 'Phosphorus-rich organic nutrition for strong roots and generous blossoms.', category: 'Flowers', formula: '3–7–4', price: 19, size: '3 lb bag', tone: 'gold' },
  { id: 3, name: 'Verdant Lawn', description: 'Long-lasting nitrogen with iron for an even, deep-green lawn.', category: 'Lawns', formula: '10–2–4', price: 32, size: '12 lb bag', badge: 'Seasonal pick', tone: 'sage' },
  { id: 4, name: 'Gentle Growth', description: 'A mild liquid concentrate designed for indoor foliage and tender roots.', category: 'Indoor plants', formula: '2–2–2', price: 16, size: '16 fl oz', tone: 'mist' },
]
