import React, {useEffect} from 'react'
import {observer, useLocalObservable} from 'mobx-react-lite'

import {Link} from 'react-router-dom'

import styles from './Logo.module.scss'
import cls from 'classnames'

export default observer(({size = 666, hover, onChange, className}) => {
  const store = useLocalObservable(() => ({
    hovered: null,
    links: [
      {link: '/news', color: '#f18024', text: 'News'},
      {link: '/stockist', color: '#2f2e77', text: 'Stockist'},
      {link: '/about-us', color: '#0e8040', text: 'About us'},
      {link: '/store', color: '#ea2626', text: 'Store'},
    ],
    onHover(index) {
      if (!hover) {
        store.hovered = null
        return
      }
      store.hovered = index
    },

    get hoveredLink() {
      if (!store.hovered) {
        return null
      }
      return store.links[store.hovered]
    },
  }))

  useEffect(() => {
    onChange && onChange(store.hoveredLink)
  }, [store.hoveredLink])

  return (
    <div
      className={cls(styles.wrapper, className)}
      style={{
        width: size,
        height: size * (634 / 666),
        backgroundImage:
          'url(' + process.env.PUBLIC_URL + '/images/main.png' + ')',
      }}
    >
      {store.links.map(({link, color}, index) => (
        <Link
          key={link}
          to={link}
          style={{backgroundColor: color}}
          className={cls(styles.link, styles['link' + (index + 1)], {
            [styles.hover]: hover,
          }, (index === 3 ? styles.redHover : null))}
          onMouseEnter={() => store.onHover(index)}
          onMouseLeave={() => store.onHover(null)}
        />
      ))}
    </div>
  )
})
