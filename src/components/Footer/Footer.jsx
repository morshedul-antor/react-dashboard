import { faFacebookSquare, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import logo from '../../assets/logo.png'
import classes from './Footer.module.css'

export default function Footer() {
    return (
        <div className={classes.footer}>
            <img src={logo} alt="" />
            <div className={classes.infoGrid}>
                <div>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores animi magnam placeat accusantium
                    velit ipsum quae vitae dolorum est sunt!
                    <p>
                        <FontAwesomeIcon icon={faFacebookSquare} />
                        <FontAwesomeIcon icon={faInstagram} />
                        <FontAwesomeIcon icon={faLinkedin} />
                        <FontAwesomeIcon icon={faTwitter} />
                    </p>
                </div>
                <div>
                    <span>Company</span>
                    <p>About Us</p>
                    <p>Careers</p>
                    <p>Case Study</p>
                    <p>Blog</p>
                    <p>Contact Us</p>
                </div>
                <div>
                    <span>Influencer</span>
                    <p>Join as Influencer</p>
                    <p>HypeSocial</p>
                </div>
                <div>
                    <span>Advertiser</span>
                    <p>Join as Advertiser</p>
                    <p>Hypelink</p>
                </div>
            </div>
            <div className={classes.infoFlex}>
                <div>&#169; Hypescout 2022. All rights reserved</div>
                <div>
                    <span>Terms & Conditions</span>
                    <span>Privacy</span>
                    <span>Sitemap</span>
                </div>
            </div>
        </div>
    )
}
