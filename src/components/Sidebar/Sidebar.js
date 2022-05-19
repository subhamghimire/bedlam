import Logo from 'components/logo/Logo'
import Menu from 'components/Menu/Menu'
import { useEffect, useState } from 'react'
import styles from './Sidebar.module.scss'
import cls from 'classnames'

export default function Sidebar() {
  const [showMenu, setMenu] = useState(false)

  return (
    <div>
      <div className="sidebar absolute h-screen inset-y-0 left-0 ">
        <div class="my-6">
          <div onClick={() => setMenu(!showMenu)}>
            <div className={cls({ [styles.disabledEvents]: !showMenu })}>
              <Logo size={80} className={styles.logo} />
            </div>
          </div>
          <div>{showMenu ? <Menu /> : ''}</div>
        </div>
      </div>
    </div>
  )
}
