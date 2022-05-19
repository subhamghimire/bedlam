import React from 'react'
import styles from './Checkout.module.scss'
import { Grid } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'
import { ArrowDropUp } from '@material-ui/icons'
import rootStore from 'store'
import { observer, useLocalObservable } from 'mobx-react-lite'

import cls from 'classnames'

export default observer(() => {
  return (
    <div className="bg-white absolute h-screen right-0 transform -translate-x-0 transition duration-200 ease-in-out">
      <Grid container wrap={'nowrap'} className="flex flex-col">
        <div className="w-full">
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

        <div>
          <Grid container direction="column" className={styles.totalsWrapper}>
            <div
              className={cls(styles.cartBorder, styles.totals, 'flex flex-col')}
            >
              <div className={styles.closeStore}>
                <ArrowDropUp />
              </div>
              <div>
                <b>Quantity:</b> {rootStore.cart.quantity}
              </div>
              <div>
                <b>Sub-Total:</b> ¥{rootStore.cart.total}
              </div>
            </div>

            <button className={styles.button}>Check out</button>
          </Grid>
        </div>
      </Grid>
    </div>
  )
})
