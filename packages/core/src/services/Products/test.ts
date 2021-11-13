import ProductService from '.'
import { Product } from '../../types/Product'

const product: Product = {
  name: 'a',
  description: 'b'
}

describe('ProductService', () => {
  beforeEach(() => {
    window.localStorage.clear()
  })

  test('should save Product list in storage', () => {
    ProductService.save(product)
    const products = ProductService.get()

    expect(products).toStrictEqual([product])
  })

  test('should save Product list in storage', () => {
    ProductService.save(product)
    ProductService.save({ ...product, name: '2' })
    ProductService.remove(0)
    const products = ProductService.get()

    expect(products[0].name).toStrictEqual('2')
  })
})
