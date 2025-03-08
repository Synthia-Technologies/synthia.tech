import { home, getintouch, portfolio } from '../nav.js'

function Navbar({ page = 'home' }) {

    const pageContent = {
        home: {
            headingtext: 'Expert websites, so you can focus on growth.'
        },
        getintouch: {
            headingtext: 'Find a Plan perfectly tailored to your needs.'
        },
        portfolio: {
            headingtext: 'About the quality of my work.'
        }
    };

    const navtoggle = () => {
        if (buttonv === 0) {
            document.getElementById('dropdown-box').style.display = "block";

            document.getElementById('navmobile').innerHTML = "<span style={{transform: 'rotate(135deg)', margin-top: '10px'}}></span>";
        } else {
            document.getElementById('dropdown-box').style.display = "none";

            document.getElementById('navmobile').innerHTML = "<span></span><span></span><span></span>";
        }

        // Toggle between 0 and 1
        buttonv = 1 - buttonv;
    };

    // Access the headingtext based on the current page
    const { headingtext } = pageContent[page] || {};

    return (
        <>
            <div>
                <input onClick={home} alt="Synthia Technologies" type="image" src="/images/Banner.svg" id="banner" />

                <nav id="navbar" className="Arvo" aria-label="Primary Navigation">
                    <a id='homebutton' onClick={home} className="underline">Home</a>
                    <a id='getintouchbutton' onClick={getintouch}>Get In Touch</a>
                    <a id='portfoliobutton' onClick={portfolio}>Portfolio</a>
                </nav>

                <div id='navmobile' onclick={navtoggle}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

            </div>
            <div className="fcontainer">
                <p className="Arvo" id="headingtext">{headingtext}</p>
                <div id="shapes">
                    <img alt="geometric shapes" src="/images/hShapes.png" />
                </div>
            </div>
        </>
    );
}

export default Navbar;
