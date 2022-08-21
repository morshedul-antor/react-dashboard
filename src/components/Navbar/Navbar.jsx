import { faBars, faBell, faChartSimple, faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext } from 'react'
import cr7 from '../../assets/cr7.jpg'
import { Auth, Theme } from '../../contexts/context'
import classes from './Navbar.module.css'

export default function Navbar() {
    const { dispatchAuth } = useContext(Auth)
    const { stateTheme, dispatchTheme } = useContext(Theme)

    document.documentElement.className = stateTheme?.mode

    return (
        <div className={classes.navbar}>
            <p>
                <FontAwesomeIcon icon={faChartSimple} />
                hypescout
            </p>
            <div>
                <span className={classes.active}>Dashboard</span>
                <span>Campaign</span>
                <span>Hypesocial</span>
                <span>Insights</span>
            </div>
            <div>
                <FontAwesomeIcon icon={faBell} />
                <div>
                    <FontAwesomeIcon icon={stateTheme?.mode === 'light' ? faSun : faMoon} />
                    <div className={classes.themeToggle}>
                        <p
                            onClick={() => {
                                dispatchTheme({ type: 'LIGHT' })
                            }}>
                            <FontAwesomeIcon icon={faSun} />
                            Light
                        </p>
                        <p
                            onClick={() => {
                                dispatchTheme({ type: 'DARK' })
                            }}>
                            <FontAwesomeIcon icon={faMoon} />
                            Dark
                        </p>
                    </div>
                </div>
                <span>Hi, Cristiano</span>
                <img src={cr7} alt="" title="Logout" onClick={() => dispatchAuth({ type: 'LOGOUT' })} />
                <FontAwesomeIcon icon={faBars} className={classes.menu} />
            </div>
        </div>
    )
}
