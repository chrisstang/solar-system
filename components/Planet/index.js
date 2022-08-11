import { useMemo } from 'react'
import styles from './styles.module.scss'

export default function Planet({ planet, navActive, control, piValue }) {
  const { name, velocity, radius, hasRing } = planet

  const circumference = useMemo(() => 2 * piValue * radius, [piValue])

  return (
    <div id={name} className="orbit">
        <div className="pos">
            <div className="planet">
                {hasRing && (
                  <div className="ring"></div>
                )}
                <dl className={`${styles.infos} ${navActive == name ? styles.isActive : ''}`}>
                  <dt>{name}</dt>
                  <dd className={control == 'velocity' ? styles.isIn : styles.isOut}>
                    <span className={styles.value}>{Intl.NumberFormat().format(velocity)} <small>km/h</small></span>
                    <span className={styles.type}>Orbit Velocity</span>
                  </dd>
                  <dd className={control == 'circumference' ? styles.isIn : styles.isOut}>
                    <span className={styles.value}>{Intl.NumberFormat().format(circumference)} <small>km</small></span>
                    <span className={styles.type}>Circumference</span>
                  </dd>
                </dl>
            </div>
        </div>
    </div>
  )
}
