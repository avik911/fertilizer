export type Product = {
  id: number
  name: string
  category: string
  description: string
  price: number
  size: string
  badge?: string
  tone: 'leaf' | 'clay' | 'gold' | 'sage'
}

export const categories = [
  { name: 'Vegetable gardens', note: 'Balanced food for abundant beds', symbol: 'V' },
  { name: 'Fruit & citrus', note: 'Support blossom through harvest', symbol: 'F' },
  { name: 'Lawns & landscape', note: 'Steady color, resilient roots', symbol: 'L' },
  { name: 'Indoor plants', note: 'Gentle care for potted greens', symbol: 'I' },
]

export const products: Product[] = [
  { id: 1, name: 'Garden All-Rounder 5-5-5', category: 'Vegetable gardens', description: 'A dependable slow-release blend for everyday garden growth.', price: 24, size: '10 kg bag', badge: 'Bestseller', tone: 'leaf' },
  { id: 2, name: 'Citrus & Fruit Boost 6-3-6', category: 'Fruit & citrus', description: 'Potassium-rich nutrition for stronger blossom and brighter fruit.', price: 29, size: '8 kg bag', badge: 'Seasonal pick', tone: 'gold' },
  { id: 3, name: 'Deep Root Lawn Feed 12-4-8', category: 'Lawns & landscape', description: 'Long-lasting lawn food formulated for even color and deep roots.', price: 34, size: '15 kg bag', tone: 'sage' },
  { id: 4, name: 'Indoor Leaf Tonic 3-1-2', category: 'Indoor plants', description: 'A mild liquid concentrate for lush foliage without overfeeding.', price: 16, size: '750 ml bottle', badge: 'Gentle formula', tone: 'clay' },
]
