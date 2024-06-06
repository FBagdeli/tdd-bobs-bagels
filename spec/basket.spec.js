
const BasketManager = require('../src/basket.js')

describe('BasketManager', () => {
  let basketManager

  beforeEach(() => {
    basketManager = new BasketManager()
  })
  it('should exist', () => {
    expect(basketManager).toBeInstanceOf(BasketManager)
  })

  it('should have empty items ', () => {
    expect(basketManager.items).toEqual([])
  })

  it('should be basicCap equal 5', () => {
    expect(basketManager.basicCap).toBe(5)
  })

  it('should add bagel to basket', () => {
    const result = basketManager.add('honey')
    expect(result).toBe('We dont have that bagel')

    basketManager.add('Chocolate')
    expect(basketManager.items.length).toBe(1)

    basketManager.add('Chocolate')
    basketManager.add('Chocolate')

    expect(basketManager.items.length).toBe(3)
  })

  it('should remove a bagel from the basket', () => {
    // const result = basketManager.remove('')
    basketManager.add('Chocolate')
    basketManager.add('Chocolate')
    basketManager.add('Egg')
    basketManager.add('Plain')
    basketManager.add('Salt')

    expect(() => basketManager.remove('Honey')).toThrowError(
      'You dont have that bagel'
    )

    expect(basketManager.items[0].bName).toBe('Chocolate')
    expect(basketManager.items[1].bName).toBe('Chocolate')
    expect(basketManager.items[2].bName).toBe('Egg')
    basketManager.remove('Plain')
    basketManager.remove('Chocolate')
    expect(basketManager.items).toEqual([
      Object({ bName: 'Chocolate', bPrice: 2.99 }),
      Object({ bName: 'Egg', bPrice: 3.99 }),
      Object({ bName: 'Salt', bPrice: 0.99 })
    ])
  })
})