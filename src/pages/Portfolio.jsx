import Navbar from "../components/navbar.jsx";

function Portfolio() {

    document.getElementById('headingtext').InnerHTML = "Past Projects I have had the pleasure of working on."

    return(
        <>
            <header>
                <Navbar style={{width: '100%'}}/>
            </header>
        </>
    )
}

export default Portfolio;