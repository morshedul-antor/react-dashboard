import FooterIMG from '../../../assets/footer.png'
import classes from './Footer.module.css'

export default function Footer() {
    return (
        <>
            <div
                style={{
                    background: `url(${FooterIMG})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    width: '100%',
                    height: '20vh',
                    position: 'fixed',
                    zIndex: '-10',
                    opacity: '.1',
                    bottom: '0',
                }}></div>
            <div className={classes.footer}>
                <span>© Morshedul Bari Antor</span>
            </div>
        </>
    )
}
