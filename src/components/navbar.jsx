import { home, getintouch, portfolio } from '../nav.js'

function Navbar() {

    return (
        <>
                <div>
                    <input onClick={home} alt="Synthia Technologies" type="image" src="/images/Banner.png"
                           id="banner"/>

                    <nav id="navbar" className="Arvo" aria-label="Primary Navigation">
                            <a onClick={home} style={{ textDecoration: 'underline' }}>Home</a>
                            <a onClick={getintouch} style={{ textDecoration: 'none' }}>Get In Touch</a>
                            <a onClick={portfolio} style={{ textDecoration: 'none' }}>Portfolio</a>
                    </nav>
                </div>
                <div className="fcontainer">
                    <p className="Arvo" id="headingtext">Expert websites, so you can focus on growth.</p>
                    <div id="shapes">
                        <img alt="geometric shapes" src="/images/hShapes.png"/>
                    </div>
                </div>
        </>
    )
}

export default Navbar