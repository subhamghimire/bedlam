import React from 'react'
import { observer, useLocalObservable } from 'mobx-react-lite'
import Cart from 'components/cart/Cart'
import Sidebar from 'components/Sidebar/Sidebar'
import Nav from 'components/Nav/Nav'

import styles from './Layout.module.scss'
import cls from 'classnames'

export default observer(({ title, children }) => {
  const store = useLocalObservable(() => ({
    showMenu: false,
    storeMenu: false,
  }))

  return (
    <div className={cls(styles.root)}>
      <Cart />
      <div>
        <div>
          <Sidebar />
        </div>
        <div className="pl-24">{children}</div>
        <div>
          <Nav />
        </div>
      </div>
    </div>
  )
})
