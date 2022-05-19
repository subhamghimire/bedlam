import React from 'react'
import { observer, useLocalObservable } from 'mobx-react-lite'
import styles from './Menu.module.scss'
import { Link } from 'react-router-dom'

export default observer(() => {
  const store = useLocalObservable(() => ({
    showMenu: false,
    storeMenu: false,
  }))
  return (
    <div className="p-6">
      <div className="flex flex-col gap-4">
        <div
          className={styles.relativeContainer}
          onMouseEnter={() => {
            store.storeMenu = !store.storeMenu
          }}
        >
          <Link to="/store" className={styles.footerLink}>
            STORE
          </Link>
          {store.storeMenu && (
            <div
              className={styles.menuContainer}
              onMouseEnter={() => (store.storeMenu = true)}
              onMouseLeave={() => (store.storeMenu = false)}
            >
              <div>
                <Link to="/store/tshirts" className={styles.storeMenuLink}>
                  T-SHIRT
                </Link>
              </div>
              <div>
                <Link to="/store/sweatshirts" className={styles.storeMenuLink}>
                  SWEATSHIRTS
                </Link>
              </div>
              <div>
                <Link to="/store/jackets" className={styles.storeMenuLink}>
                  JACKETS
                </Link>
              </div>
              <div>
                <Link to="/store/bottoms" className={styles.storeMenuLink}>
                  BOTTOMS
                </Link>
              </div>
              <div>
                <Link to="/store/caps" className={styles.storeMenuLink}>
                  CAPS
                </Link>
              </div>
              <div>
                <Link to="/store/accessories" className={styles.storeMenuLink}>
                  ACCESSORIES
                </Link>
              </div>
            </div>
          )}
        </div>
        <Link className={styles.footerLink} to="/about-us">
          ABOUT
        </Link>
        <Link className={styles.footerLink} to="/stocklist">
          STOCKIST
        </Link>
        <Link className={styles.footerLink} to="/news">
          NEWS
        </Link>
      </div>
    </div>
  )
})
