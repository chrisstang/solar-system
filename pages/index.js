import { planets } from '../data/planets'
import { useSolarContext } from '../context/solarContext'
import Navigation from '../components/Navigation'
import Control from '../components/Control'
import PiForm from '../components/PiForm'
import Planet from '../components/Planet'
import Sun from '../components/Planet/sun'
import styles from '../styles/Home.module.scss'
import { useState, useRef, useEffect } from 'react'

export default function Home(props) {
  const { pi, setPi } = useSolarContext()
  const [navActive, setNavActive] = useState('earth')
  const [control, setControl] = useState('velocity')
  const solarRef = useRef()

  useEffect(() => {
    setPi(props.piValue)
  }, [])

  return (
    <div className='controls-close view-3D'>
      <h1 className={styles.title}>Solar System</h1>

      <Navigation {...{ solarRef, navActive, setNavActive }} />
      <Control setControl={setControl} />
      <PiForm />

      <div id="universe" className="scale-stretched">
        <div id="galaxy">
          <div id="solar-system" className={navActive} ref={solarRef}>
            {planets.length > 0 && planets.map( planet => {
              return (
                <Planet key={planet.name} planet={planet} navActive={navActive} control={control} piValue={pi} />
              )
            })}
            <Sun navActive={navActive} control={control} piValue={pi} />
          </div>
        </div>
      </div>

    </div>
  )
}

export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/api/calculate-pi')
  const result = await res.json()

  return {
    props: {
      ...result
    }
  }
}
