import React, { useState, useRef } from 'react'
import { observer, useLocalObservable } from 'mobx-react-lite'
import rootStore from 'store'
import styles from './Cart.module.scss'
import Checkout from 'components/checkout/Checkout'
import useOnClickOutside from 'partials/useOnClickOutside'

export default observer(() => {
  useLocalObservable(() => {
    if (!rootStore.cart.quantity) {
      return null
    }
  })
  const [isExpanded, setExpanded] = useState(false)

  const my_checkout = useRef()

  const cartImage = process.env.PUBLIC_URL + '/images/cart.png'

  useOnClickOutside(my_checkout, () => setExpanded(false))

  if (!isExpanded) {
    return (
      <div className={styles.root}>
        <div className={styles.cart} onClick={() => setExpanded(true)}>
          <div className="w-10 relative">
            <img className="" src={cartImage} alt="" />
            <span className="text-white absolute top-2">
              {rootStore.cart.quantity}{' '}
            </span>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div>
      <div ref={my_checkout}>
        <Checkout />
      </div>
    </div>
  )
})
