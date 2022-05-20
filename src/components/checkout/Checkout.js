import React from 'react'
import styles from './Checkout.module.scss'
import { Grid } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'
import { ArrowDropUp } from '@material-ui/icons'
import rootStore from 'store'
import { observer, useLocalObservable } from 'mobx-react-lite'

import cls from 'classnames'

export default observer(({ closeCheckout }) => {
  return (
    <div className="bg-white shadow-checkout-shadow overflow-scroll border-l border-grey-grey border-opacity-10 fixed ease-in-out duration-300 h-screen right-0 transform  translate-x-0 transition">
      <Grid container wrap={'nowrap'} className="flex flex-col">
        <div className="w-full">
          <div className="text-center bg-light-green">
            {' '}
            <p className="p-2">
              You've qualified for free shipping. Great Job!
            </p>
          </div>
          <div className="flex justify-around">
            <div></div>
            <div className="text-center">
              <p className="text-lg py-2">Shopping Cart</p>
            </div>
            <div>
              <button onClick={() => closeCheckout(false)} type="button">
                <span className="text-xxl p-0">x</span>
              </button>
            </div>
          </div>
          {rootStore.cart.items.map(({ product, amount }, i) => (
            <div className={styles.product} key={i}>
              <div
                className={styles.deleteItem}
                onClick={() => rootStore.removeFromCart(product)}
              >
                <CloseIcon />
              </div>
              <div className={styles.productContainer}>
                <img
                  className={styles.image}
                  src={product.image}
                  alt="product"
                />
                <div className={styles.title}>{product.title}</div>
                <div className={styles.info}>
                  Size {product.size} x {amount}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="pb-20">
          <Grid container direction="column" className={styles.totalsWrapper}>
            <div
              className={cls(
                styles.cartBorder,
                styles.totals,
                'flex flex-col p-4'
              )}
            >
              {/* <div className={styles.closeStore}>
                <ArrowDropUp />
              </div> */}
              <div>
                <b>Quantity:</b> {rootStore.cart.quantity}
              </div>
              <div>
                <b>Sub-Total:</b> ¥{rootStore.cart.total}
              </div>

              <div>
                <button className={styles.button}>Check out</button>
              </div>
            </div>
          </Grid>
        </div>
      </Grid>
    </div>
  )
})
