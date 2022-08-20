import { faBars, faBell, faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import cr7 from '../../assets/cr7.jpg'
import logo from '../../assets/logo.png'
import classes from './Navbar.module.css'

export default function Navbar() {
    const [select, setSelect] = useState(1)
    const setTheme = (theme) => (document.documentElement.className = theme)

    const toggleLight = () => {
        setTheme('light')
    }
    const toggleDark = () => {
        setTheme('dark')
    }

    return (
        <div className={classes.navbar}>
            <img src={logo} alt="" />
            <div>
                <span className={classes.active}>Dashboard</span>
                <span>Campaign</span>
                <span>Hypesocial</span>
                <span>Insights</span>
            </div>
            <div>
                <FontAwesomeIcon icon={faBell} />
                <div>
                    <FontAwesomeIcon icon={select === 2 ? faSun : faMoon} />
                    <div className={classes.themeToggle}>
                        <p
                            onClick={() => {
                                toggleDark()
                                setSelect(1)
                            }}>
                            <FontAwesomeIcon icon={faMoon} />
                            Dark
                        </p>
                        <p
                            onClick={() => {
                                toggleLight()
                                setSelect(2)
                            }}>
                            <FontAwesomeIcon icon={faSun} />
                            Light
                        </p>
                    </div>
                </div>
                <span>Hi, Cristiano</span>
                <img src={cr7} alt="" />
                <FontAwesomeIcon icon={faBars} className={classes.menu} />
            </div>
        </div>
    )
}
