import React from 'react'
import Layout from 'components/layout/Layout'
import { Link, useParams } from 'react-router-dom'
import { Grid } from '@material-ui/core'

import styles from './Store.module.scss'
import { observer, useLocalObservable } from 'mobx-react-lite'

export default observer(() => {
  const { category } = useParams()
  const store = useLocalObservable(() => ({
    products: [
      {
        id: 1,
        image: process.env.PUBLIC_URL + '/images/products/1.png',
        title: 'BEDLAM BLACK SWEATSHIRT',
      },
      {
        id: 2,
        image: process.env.PUBLIC_URL + '/images/products/4.png',
        title: 'BEDLAM LADY T-SHIRT',
      },
      {
        id: 3,
        image: process.env.PUBLIC_URL + '/images/products/9.png',
        title: 'BEDLAM PANTS',
      },
      {
        id: 4,
        image: process.env.PUBLIC_URL + '/images/products/3.png',
        title: 'BEDLAM YEALLOW SHIRT',
      },
      {
        id: 5,
        image: process.env.PUBLIC_URL + '/images/products/2.png',
        title: 'BEDLAM ORANGE SWEATSHIRT',
      },
      {
        id: 6,
        image: process.env.PUBLIC_URL + '/images/products/8.png',
        title: 'BEDLAM HAT',
      },
    ],
  }))

  return (
    <Layout title="Store">
      {category && category !== 'thisrts' && <div>{category}</div>}
      {(!category || category === 'tshirts') && (
        <Grid container spacing={2} style={{ padding: '20px' }}>
          {store.products.map((product, index) => (
            <Grid item xs={6} md={3} className={styles.gridItem}>
              <Link to={'/store/id/' + product.id}>
                <div className={styles.product}>
                  <div className={styles.productContent}>
                    <img className={styles.image} src={product.image} />
                    <h3 className={styles.productTitle}>{product.title}</h3>
                  </div>
                </div>
              </Link>
            </Grid>
          ))}
        </Grid>
      )}
    </Layout>
  )
})
