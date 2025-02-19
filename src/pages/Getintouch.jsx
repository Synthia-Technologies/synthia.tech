import Navbar from "../components/navbar.jsx";
import Homecont from "../components/content.jsx";
import Foot from "../components/footer.jsx";

function Getintouch() {

    document.getElementById('headingtext').InnerHTML = "Find a Plan perfectly tailored to your needs."

    return(
        <>
            <header>
                <Navbar style={{width: '100%'}}/>
            </header>
        </>
    )
}

export default Getintouch;