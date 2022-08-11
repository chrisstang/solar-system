import { Nav } from 'react-bootstrap'
import { planets } from '../../data/planets'
import styles from './styles.module.scss'

export default function Navigation({ solarRef, navActive, setNavActive }) {
    const handlePlanet = (e, planetName) => {
        e.preventDefault()
        solarRef.current.className = ''
        solarRef.current.classList.add(planetName)
        setNavActive(planetName)
    }

    return (
        <Nav className={styles.mainNav}>
            <a
            className={`sun ${navActive == 'sun' ? styles.isActive : ''}`}
            href='#'
            onClick={(e) => handlePlanet(e, 'sun')}>
                Sun
            </a>
            
            {planets.length > 0 && planets.map( planet => {
                return (
                    <a
                    className={`${planet.name} ${navActive == planet.name ? styles.isActive : ''}`}
                    key={`nav-${planet.name}`}
                    href='#'
                    onClick={(e) => handlePlanet(e, planet.name)}>
                        {planet.name}
                    </a>
                )
            })}
        </Nav>
    )
}
