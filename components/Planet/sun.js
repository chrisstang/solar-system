import { useMemo } from 'react'
import styles from './styles.module.scss'

export default function Sun({ navActive, control, piValue }) {
  const radius = 696340
  const circumference = useMemo(() => 2 * piValue * radius, [piValue])

  return (
    <div id="sun">
        <dl className={`${styles.infos} ${navActive == 'sun' ? styles.isActive : ''}`}>
            <dt>Sun</dt>
            <dd className={control == 'velocity' ? styles.isIn : styles.isOut}>
              <span className={styles.value}>0 <small>km/h</small></span>
              <span className={styles.type}>Orbit Velocity</span>
            </dd>
            <dd className={control == 'circumference' ? styles.isIn : styles.isOut}>
              <span className={styles.value}>{Intl.NumberFormat().format(circumference)} <small>km</small></span>
              <span className={styles.type}>Circumference</span>
            </dd>
        </dl>
    </div>
  )
}