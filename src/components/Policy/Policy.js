import styles from './Policy.module.scss'
import cls from 'classnames'
import { useEffect, useState } from 'react'

export default function Policy() {
  const [showPolicy, setPolicy] = useState(true)
  useEffect(() => {
    const policy = JSON.parse(localStorage.getItem('policy'))
    if (policy) {
      setPolicy(false)
    } else {
      localStorage.setItem('policy', JSON.stringify(showPolicy))
    }
  }, [showPolicy])
  return (
    <div>
      {showPolicy ? (
        <div className="border border-grey-grey border-opacity-20 items-center">
          <div className="p-2 text-center flex flex-row  justify-around relative">
            <p className="text-sm font-semibold">
              By continuing to use our site, you agree to our{' '}
              <a className="border-b border-grey-grey" href="#">
                Terms & Conditions &nbsp;
              </a>
              and{' '}
              <a className="border-b border-grey-grey" href="#">
                Privacy Policy. &nbsp;
              </a>{' '}
              You can learn more about how we use cookies by reviewing our
              <a className="border-b border-grey-grey" href="#">
                &nbsp;Privacy Policy. &nbsp;
              </a>{' '}
            </p>
            <button
              onClick={() => setPolicy(false)}
              className={styles.button}
              type="button"
            >
              <span
                className={cls(
                  styles.closeButton,
                  'text-md font-thin absolute -top-6'
                )}
              >
                x
              </span>
            </button>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  )
}
