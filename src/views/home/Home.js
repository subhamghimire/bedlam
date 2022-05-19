import {Grid} from '@material-ui/core'
import Logo from 'components/logo/Logo'
import {observer, useLocalObservable} from 'mobx-react-lite'
import React from 'react'
import {Link} from 'react-router-dom'
import styles from './Home.module.scss'



export default observer(() => {
  const store = useLocalObservable(() => ({
    hoveredLink: null,
  }))

  return (
    <Grid container direction="column" className={styles.grid}>
      <Logo
        className={styles.logo}
        data={store.links}
        hover={true}
        onChange={(data) => (store.hoveredLink = data)}
      />

      <div className={styles.title} style={{color: store.hoveredLink?.color}}>
        {store.hoveredLink?.text}
      </div>

      <div className={styles.address}>
        3-5-9 Taito Ku, Kuramae. Mariko Building #102 Tokyo, Japan 111-0051
      </div>

      <Grid container justify="center">
        <Link className={styles.footerLink} to="/terms">
          Terms of Service
        </Link>
        <Link className={styles.footerLink} to="/privacy">
          Privacy Policy
        </Link>
      </Grid>
    </Grid>
  )
})
