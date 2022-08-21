import { faFacebookSquare, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faClock, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { monthNameLong, suffix } from '../../../utils/date'
import classes from './ProfileCard.module.css'
import Update from './Update/Update'

export default function ProfileCard({ users, search, range, gender }) {
    const [updateHide, setUpdateHide] = useState(false)
    return (
        <div className={classes.card}>
            {users &&
                users
                    .filter((user) => user?.name.includes(search))
                    .map((user, index) =>
                        user?.follower <= range && user?.gender === gender ? (
                            <div key={index}>
                                <img src={user.img} alt="" />
                                <h2 onClick={() => setUpdateHide(index)}>{user.name}</h2>
                                <p>
                                    <FontAwesomeIcon icon={faLocationDot} />
                                    {user.address}
                                </p>
                                <p>
                                    <FontAwesomeIcon icon={faClock} />
                                    Joined On:{' '}
                                    {user.joinDate !== null
                                        ? `${monthNameLong(user?.joinDate.slice(5, 7))}  ${suffix(
                                              user?.joinDate.slice(8, 10)
                                          )},  ${user?.joinDate.slice(0, 4)}`
                                        : ''}
                                </p>
                                <p>
                                    <FontAwesomeIcon icon={faFacebookSquare} />
                                    <FontAwesomeIcon icon={faInstagram} />
                                    <FontAwesomeIcon icon={faLinkedin} />
                                    <FontAwesomeIcon icon={faTwitter} />
                                </p>
                                <div className={classes.info}>
                                    <p>
                                        <span>{user.follower}k</span>
                                        Followers
                                    </p>
                                    <p>
                                        <span>{user.category}</span>
                                        Categories
                                    </p>
                                    <p>
                                        <span>{user.gender}</span>
                                        Gender
                                    </p>
                                </div>

                                {updateHide === index && (
                                    <Update index={index} setUpdateHide={setUpdateHide} data={user} />
                                )}
                            </div>
                        ) : (
                            ''
                        )
                    )}
        </div>
    )
}
