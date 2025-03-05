import { useEffect } from "react";
import Navbar from "../components/navbar.jsx";
import Foot from "../components/footer.jsx";
import Getintouchcont from "../components/content/Getintouchcont.jsx";

function Getintouch() {

    useEffect(() => {
        document.getElementById('homebutton').style.textDecoration = "none";
        document.getElementById('getintouchbutton').style.textDecoration = "underline";
        document.getElementById('portfoliobutton').style.textDecoration = "none";
    })

    return(
        <>
            <header>
                <Navbar style={{width: '100%'}} page='getintouch' />
            </header>

            <section>
                <Getintouchcont/>
            </section>

            <Foot />
        </>
    )
}

export default Getintouch;