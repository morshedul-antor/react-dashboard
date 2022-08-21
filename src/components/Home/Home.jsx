import BG from '../../assets/bg.jpg'
import Body from './Body/Body'
import Footer from './Footer/Footer'

export default function Home() {
    return (
        <div>
            <div
                style={{
                    background: `url(${BG})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    width: '100%',
                    height: '100vh',
                    position: 'absolute',
                    zIndex: '-20',
                    opacity: '1',
                    top: '0',
                }}></div>

            <div>
                <Body />
                <Footer />
            </div>
        </div>
    )
}
