import React from 'react'
import Layout from 'components/layout/Layout'
import { Link } from 'react-router-dom'
import {
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@material-ui/core'
import Slider from 'react-slick'
import { useParams } from 'react-router-dom'
import { observer, useLocalObservable } from 'mobx-react-lite'
import rootStore from 'store'
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css'
import InnerImageZoom from 'react-inner-image-zoom'

import styles from './Product.module.scss'
import cls from 'classnames'

export default observer(() => {
  const store = useLocalObservable(() => {
    let { id } = useParams()
    return {
      get product() {
        return rootStore.products.find((p) => Number(p.id) === Number(id))
      },
      size: 'L',
      colors: [
        { color: '#FFFFFF', name: 'White', selected: false },
        { color: '#D6CDEC', name: 'Purple', selected: false },
        { color: '#595959', name: 'Green', selected: false },
        { color: '#000000', name: 'Black', selected: true },
      ],
      get color() {
        return store.colors.find(({ selected }) => selected)
      },
      amount: 1,
      remove() {
        if (store.amount > 1) {
          store.amount = store.amount - 1
        }
      },
      add() {
        store.amount = store.amount + 1
      },
      addToCart() {
        if (store.amount <= 0) {
          return
        }

        rootStore.addToCart({
          product: store.product,
          amount: store.amount,
          size: store.size,
          color: store.color,
        })
      },
    }
  })

  return (
    <Layout title="Product">
      <Grid container className={styles.mainContent}>
        <Grid item xs={4}>
          <div className={styles.wrapper}>
            <div className={styles.slider}>
              <Slider
                {...{
                  dots: true,
                  infinite: true,
                  speed: 500,
                  arrows: false,
                  slidesToShow: 1,
                  slidesToScroll: 1,
                }}
              >
                <InnerImageZoom src={store.product.image} zoomScale={2} />
                <InnerImageZoom src={store.product.image} zoomScale={2} />
                <InnerImageZoom src={store.product.image} zoomScale={2} />
              </Slider>
            </div>
          </div>
        </Grid>
        <Grid xs={4} className={styles.detailContainer}>
          <h2 className={styles.title}>{store.product.title}</h2>
          <div className={styles.text}>
            <div className={styles.productDescription}>
              Lorem ipsum dolor sit amet, no per corrumpit urbanitas. Quo
              detraxit conceptam an, salutatus corrumpit eu est. Quo ad aliquam
              inermis. Nostrum erroribus eu vim. Nam ne audiam accusamus.{' '}
            </div>
          </div>
          <div className={styles.price}>¥{store.product.price}</div>

          <div className={styles.colorsRow}>
            {store.colors.map((color) => (
              <div
                className={cls(styles.colorsCell, {
                  [styles.selectedColor]: color.selected,
                })}
                onClick={() => {
                  store.colors.map((c) => (c.selected = false))
                  color.selected = true
                }}
              >
                <img
                  src={store.product.image}
                  alt="product"
                  className={styles.color}
                  style={{ borderColor: color.color }}
                />
                <div className={styles.colorName}>{color.name}</div>
              </div>
            ))}
          </div>

          <div className={styles.selectRow}>
            <FormControl variant="outlined" className={styles.select}>
              <Select
                id="demo-simple-select-outlined"
                value={store.size}
                onChange={(e) => (store.size = e.target.value)}
              >
                <MenuItem disabled value={'XS'}>
                  XS
                </MenuItem>
                <MenuItem value={'S'}>S</MenuItem>
                <MenuItem value={'M'}>M</MenuItem>
                <MenuItem value={'L'}>L</MenuItem>
                <MenuItem disabled value={'XL'}>
                  XL
                </MenuItem>
              </Select>
            </FormControl>

            <div className={styles.sizeGuide}>Size Guide</div>
          </div>

          <div className={styles.addRow}>
            <div className={styles.removeButton} onClick={() => store.remove()}>
              -
            </div>
            <input
              className={styles.input}
              value={store.amount}
              onChange={(e) => (store.amount = e.target.value)}
            />
            <div className={styles.addButton} onClick={() => store.add()}>
              +
            </div>

            <button
              className={styles.addToCart}
              onClick={() => store.addToCart()}
            >
              Add to cart
            </button>
          </div>
        </Grid>
      </Grid>
    </Layout>
  )
})
