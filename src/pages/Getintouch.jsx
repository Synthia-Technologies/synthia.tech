import { useEffect } from "react";
import Navbar from "../components/navbar.jsx";
import Foot from "../components/footer.jsx";
import Getintouchcont from "../components/content/Getintouchcont.jsx";

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

            <section>
                <Getintouchcont />
            </section>

            <footer>
                <Foot />
            </footer>
        </>
    )
}

export default Getintouch;