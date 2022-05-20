import React from 'react'
import { observer, useLocalObservable } from 'mobx-react-lite'
import Cart from 'components/cart/Cart'
import Sidebar from 'components/Sidebar/Sidebar'
import Policy from 'components/Policy/Policy'
import rootStore from 'store'

import styles from './Layout.module.scss'
import cls from 'classnames'

export default observer(({ title, children }) => {
  const showOverlay = rootStore.showOverlay
  const bedlam = process.env.PUBLIC_URL + '/images/bedlam.jpeg'

  console.log(showOverlay)
  return (
    <div className={cls(styles.root)}>
      <div>
        <div
          className={showOverlay ? styles.overlayEnabled : styles.overlay}
        ></div>
        <div className="w-40 text-center mx-auto py-2">
          <img src={bedlam} alt="" />
        </div>
        <div>
          <Sidebar />
        </div>
        <div className="pl-32">
          <div className="">
            <div className="w-full flex">
              {children}
              <div className="right-0 ml-10">
                <Cart />
              </div>
            </div>
          </div>
        </div>
        <div className="justify-center items-center text-center bottom-0 fixed w-full bg-white">
          <Policy />
        </div>
      </div>
    </div>
  )
})
