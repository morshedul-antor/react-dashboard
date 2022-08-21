import React, { useState } from 'react'
import classes from './Update.module.css'

export default function Update({ setUpdateHide, data }) {
    const [name, setName] = useState(data.name)
    const [address, setAddress] = useState(data.address)
    const [joinDate, setJoinDate] = useState(data.joinDate)
    const [follower, setFollower] = useState(data.follower)
    const [category, setCategory] = useState(data.category)

    const api = process.env.REACT_APP_API_URL
    const refreshPage = () => {
        window.location.reload()
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const details = {
            ...data,
            name,
            address,
            joinDate,
            follower,
        }

        let putFetch = await fetch(`${api}/users/${data.id}`, {
            method: 'PUT',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(details),
        })

        if (putFetch.ok) {
            refreshPage()
        }
    }

    return (
        <div className={classes.containerPopup}>
            <div className={classes.cross} onClick={() => setUpdateHide(false)}>
                &times;
            </div>

            <div className={classes.formWrapper}>
                <div className={classes.close} onClick={() => setUpdateHide(false)}>
                    &times;
                </div>

                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className={classes.section}>Update Info</div>
                    <div className={classes.innerWrap}>
                        <div className={classes.formGrid}>
                            <label>
                                Full Name
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    minLength={3}
                                    required
                                />
                            </label>
                            <label>
                                Join Date
                                <input
                                    type="date"
                                    value={joinDate}
                                    onChange={(e) => setJoinDate(e.target.value)}
                                    required
                                />
                            </label>
                        </div>
                        <div className={classes.formGrid}>
                            <label>
                                Followers
                                <input
                                    type="number"
                                    value={follower}
                                    onChange={(e) => setFollower(parseInt(e.target.value))}
                                    required
                                />
                            </label>
                            <label>
                                Category
                                <input
                                    type="text"
                                    value={category}
                                    onChange={(e) => setCategory(e.target.value)}
                                    required
                                />
                            </label>
                        </div>

                        <label>
                            Address
                            <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} required />
                        </label>
                    </div>
                    <button className={classes.button} type="submit">
                        SUBMIT
                    </button>
                </form>
            </div>
        </div>
    )
}
