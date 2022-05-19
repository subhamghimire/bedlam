import {observable} from 'mobx'

const store = observable({
  products: [
    {
      id: 1,
      image: process.env.PUBLIC_URL + '/images/products/1.png',
      title: 'BEDLAM BLACK SWEATSHIRT',
      price: 3400,
    },
    {
      id: 2,
      image: process.env.PUBLIC_URL + '/images/products/4.png',
      title: 'BEDLAM LADY T-SHIRT',
      price: 4000,
    },
    {
      id: 3,
      image: process.env.PUBLIC_URL + '/images/products/9.png',
      title: 'BEDLAM PANTS',
      price: 14000,
    },
    {
      id: 4,
      image: process.env.PUBLIC_URL + '/images/products/3.png',
      title: 'BEDLAM YEALLOW SHIRT',
      price: 2000,
    },
    {
      id: 5,
      image: process.env.PUBLIC_URL + '/images/products/2.png',
      title: 'BEDLAM ORANGE SWEATSHIRT',
      price: 9000,
    },
    {
      id: 6,
      image: process.env.PUBLIC_URL + '/images/products/8.png',
      title: 'BEDLAM HAT',
      price: 1200,
    },
  ],
  cart: {
    get total() {
      return store.cart.items.reduce((res, item) => {
        const {price} = item.product
        const {amount} = item

        return res + amount * price
      }, 0)
    },
    get quantity() {
      return store.cart.items.reduce((res, item) => res + item.amount, 0)
    },
    items: [],
  },
  addToCart({product, amount, color, size}) {
    const cartItem = store.cart.items.find(
      (item) =>
        item.product.id === product.id &&
        item.color === color &&
        item.size === size
    )
    if (cartItem) {
      cartItem.amount += amount
    } else {
      store.cart.items = store.cart.items.concat({
        product,
        amount,
        color,
        size,
      })
    }
  },
  removeFromCart(product) {
    const itemIndex = store.cart?.items.findIndex(item => product.id === item.product.id)
    store.cart?.items.splice(itemIndex, 1)
  }
})

export default store
