import { faFacebookSquare, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faChartSimple } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classes from './Footer.module.css'

export default function Footer() {
    return (
        <div className={classes.footer}>
            <p>
                <FontAwesomeIcon icon={faChartSimple} />
                hypescout
            </p>
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
                <div>
                    <span>&#169; Hypescout 2022.</span> All rights reserved
                </div>
                <div>
                    <span>Terms & Conditions</span>
                    <span>Privacy</span>
                    <span>Sitemap</span>
                </div>
            </div>
        </div>
    )
}
