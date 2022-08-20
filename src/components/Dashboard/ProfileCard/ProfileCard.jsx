import { faFacebookSquare, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faClock, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classes from './ProfileCard.module.css'

export default function ProfileCard({ users, search }) {
    return (
        <div className={classes.card}>
            {users &&
                users
                    .filter((user) => user?.name.includes(search))
                    .map((user, index) => (
                        <div key={index}>
                            <img src={user.img} alt="" />
                            <h2>{user.name}</h2>
                            <p>
                                <FontAwesomeIcon icon={faLocationDot} />
                                {user.address}
                            </p>
                            <p>
                                <FontAwesomeIcon icon={faClock} />
                                Joined On: {user.joinDate}
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
                        </div>
                    ))}
        </div>
    )
}
