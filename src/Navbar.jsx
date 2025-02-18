import './index.css'

function Header() {

    return (
        <>
            <header>
                <div>
                    <input alt="Synthia Technologies" onClick="home()" type="image" src="images/Banner.png"
                           id="banner"/>

                    <nav id="navbar" className="Arvo">
                        <a onClick="home()" style="text-decoration: underline;">Home</a>
                        <a onClick="getintouch()" style="text-decoration: none;">Get In Touch</a>
                        <a onClick="portfolio()" style="text-decoration: none;">Portfolio</a>
                    </nav>
                </div>
                <div className="fcontainer">
                    <p className="Arvo" id="headingtext">Expert websites, so you can focus on growth.</p>
                    <div id="shapes">
                        <img alt="geometric shapes" src="images/hShapes.png"/>
                    </div>
                </div>

            </header>
        </>
    )
}

export default Header