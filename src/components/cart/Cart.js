import React from 'react'
import { observer, useLocalObservable } from 'mobx-react-lite'
import rootStore from 'store'
import styles from './Cart.module.scss'
import { useHistory } from 'react-router-dom'

export default observer(() => {
  const history = useHistory()

  if (!rootStore.cart.quantity) {
    return null
  }

  function showCart() {
    history.push('/cart')
  }

  return (
    <div className={styles.root}>
      <div className={styles.cart} onClick={() => showCart()}>
        {rootStore.cart.quantity} items in cart | Sub-total: ¥
        {rootStore.cart.total}
      </div>
    </div>
  )
})
