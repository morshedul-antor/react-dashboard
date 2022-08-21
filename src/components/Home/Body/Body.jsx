import { faChartSimple } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import IMG from '../../../assets/img.png'
import { Auth } from '../../../contexts/context'
import classes from './Body.module.css'

export default function Body() {
    const { dispatchAuth } = useContext(Auth)

    return (
        <div className={classes.bodyWrapper}>
            <div className={classes.flex}>
                <p>
                    <FontAwesomeIcon icon={faChartSimple} />
                    hypescout
                </p>
                <Link to="/">
                    <button onClick={() => dispatchAuth({ type: 'LOGIN' })}>Login</button>
                </Link>
            </div>
            <div className={classes.body}>
                <div className={classes.box}>
                    <div className={classes.title}>
                        <p>React Application</p>
                        <span>ReactJs, CSS</span>
                    </div>
                    <p>
                        Simple Mobile Responsive Create, Read, Update and Delete (CRUD) Application using ReactJs
                        <span>Note: Click Login Button to Redirect</span>
                    </p>
                    <div className={classes.buttonContainer}>
                        <Link to="/">
                            <button>Dashboard</button>
                        </Link>
                    </div>
                </div>

                <div className={classes.box}>
                    <img src={IMG} className={classes.img} alt="" />
                </div>
            </div>
        </div>
    )
}
