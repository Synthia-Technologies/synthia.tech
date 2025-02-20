import { home, getintouch, portfolio } from '../nav.js'

function Navbar() {

    return (
        <>
                <div>
                    <input onClick={home} alt="Synthia Technologies" type="image" src="/images/Banner.png"
                           id="banner"/>

                    <nav id="navbar" className="Arvo" aria-label="Primary Navigation">
                            <a id='homebutton' onClick={home} className="underline">Home</a>
                            <a id='getintouchbutton' onClick={getintouch}>Get In Touch</a>
                            <a id='portfoliobutton' onClick={portfolio}>Portfolio</a>
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