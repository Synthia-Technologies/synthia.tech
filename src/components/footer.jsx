
import { home, getintouch, portfolio } from '../nav.js'

function Foot() {

    return (
        <>
            <footer>
            <div style={{ width: '100%', fontSize:'16px' }} >
                <p className="Arvo"><b style={{fontSize:'24px'}}>Quick links:</b><br/><br/>
                    <a onClick={home}>Home</a><br/>
                    <a onClick={getintouch}>Get In Touch</a><br/>
                    <a onClick={portfolio}>Portfolio</a><br/>
                </p>
            </div>
            <div style={{ width: '100%', textAlign:'right' }}>
                <img alt="synthia tech logo" style={{ height: '100px' }} src="/images/sLogo.png"/>
                <p className="Roboto" style={{ fontSize: '16px'}}>Site Made by Synthia Technologies <br/><br/> <a
                    style={{ color:'white' }} href="https://www.synthia.tech">www.synthia.tech</a><br/>contact@synthia.tech
                </p>
            </div>
            </footer>
        </>
    )
}

export default Foot