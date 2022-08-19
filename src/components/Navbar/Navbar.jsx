import { faBars, faBell, faMoon } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import cr7 from '../../assets/cr7.jpg'
import logo from '../../assets/logo.png'
import classes from './Navbar.module.css'

export default function Navbar() {
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
                <FontAwesomeIcon icon={faMoon} />
                <span>Hi, Cristiano</span>
                <img src={cr7} alt="" />
                <FontAwesomeIcon icon={faBars} className={classes.menu} />
            </div>
        </div>
    )
}
