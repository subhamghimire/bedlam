import React from 'react'
import { observer, useLocalObservable } from 'mobx-react-lite'
import styles from './Nav.module.scss'
import { Link } from 'react-router-dom'
import { Grid } from '@material-ui/core'

export default observer(() => {
  const store = useLocalObservable(() => ({
    showMenu: false,
    storeMenu: false,
  }))
  return (
    <div className={styles.root}>
      <div>
        <Grid container className={styles.navBar}>
          <div
            className={styles.relativeContainer}
            onMouseEnter={() => {
              store.storeMenu = !store.storeMenu
            }}
          >
            {store.storeMenu && (
              <div
                className={styles.menuContainer}
                onMouseEnter={() => (store.storeMenu = true)}
                onMouseLeave={() => (store.storeMenu = false)}
              >
                <div>
                  <Link to="/store/tshirts" className={styles.storeMenuLink}>
                    T-SHIRTS
                  </Link>
                </div>
                <div>
                  <Link
                    to="/store/sweatshirts"
                    className={styles.storeMenuLink}
                  >
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
                  <Link
                    to="/store/accessories"
                    className={styles.storeMenuLink}
                  >
                    ACCESSORIES
                  </Link>
                </div>
              </div>
            )}
            <Link to="/store" className={styles.footerLink}>
              STORE
            </Link>
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
        </Grid>
      </div>
    </div>
  )
})
