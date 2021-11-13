import { Product } from '../types/Product'
const key = 'PRODUCTS'

export default class ProductService {
  static get() {
    const text = localStorage.getItem(key)
    if (!text) return []
    return JSON.parse(text) as Product[]
  }

  static save(product: Product) {
    const products = ProductService.get()
    const value = [...products, product]
    localStorage.setItem(key, JSON.stringify(value))
  }

  static remove(index: number) {
    const products = ProductService.get()
    products.splice(index, 1)
    localStorage.setItem(key, JSON.stringify(products))
    return products
  }
}
