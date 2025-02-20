import { useEffect } from "react";
import Navbar from "../components/navbar.jsx";
import Homecont from "../components/content.jsx";
import Foot from "../components/footer.jsx";

function Getintouch() {

    useEffect(() => {
        document.getElementById('headingtext').innerHTML = "Find a Plan perfectly tailored to your needs."

        document.getElementById('homebutton').style.textDecoration = "none";
        document.getElementById('getintouchbutton').style.textDecoration = "underline";
        document.getElementById('portfoliobutton').style.textDecoration = "none";
    })

    return(
        <>
            <header>
                <Navbar style={{width: '100%'}}/>
            </header>
        </>
    )
}

export default Getintouch;