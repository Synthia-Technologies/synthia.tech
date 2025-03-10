import { home, getintouch, portfolio } from '../nav.js'
import React, { useState } from 'react';

function Navbar({ page = 'home', onNavigate }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

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

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Get the heading text for the current page
    const headingtext = pageContent[page]?.headingtext || '';

    return (
        <>
            <div>
                <img
                    onClick={home}
                    alt="Synthia Technologies"
                    src="/images/Banner.svg"
                    id="banner"
                />

                <nav id="navbar" className="Arvo" aria-label="Primary Navigation">
                    <a
                        id="homebutton"
                        onClick={home}
                        className={page === 'home' ? "underline" : ""}
                    >
                        Home
                    </a>
                    <a
                        id="getintouchbutton"
                        onClick={getintouch}
                        className={page === 'getintouch' ? "underline" : ""}
                    >
                        Get In Touch
                    </a>
                    <a
                        id="portfoliobutton"
                        onClick={portfolio}
                        className={page === 'portfolio' ? "underline" : ""}
                    >
                        Portfolio
                    </a>
                </nav>

                <div id="navmobile" onClick={toggleMenu}>
                    {isMenuOpen ? (
                        <span style={{ transform: 'rotate(135deg)', marginTop: '10px' }}></span>
                    ) : (
                        <>
                            <span></span>
                            <span></span>
                            <span></span>
                        </>
                    )}
                </div>

                {isMenuOpen && (
                    <div id="dropdown-box">
                        {/* Mobile menu content goes here */}
                    </div>
                )}
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