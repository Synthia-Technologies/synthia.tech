import { useEffect } from "react";
import Navbar from "../components/navbar.jsx";
import Foot from "../components/footer.jsx";
import Portfoliocont from "../components/content/Portfoliocont.jsx";

function Portfolio() {

    useEffect(() => {
        document.getElementById('headingtext').innerHTML = "Past Projects I have had the pleasure of working on."

        document.getElementById('homebutton').style.textDecoration = "none";
        document.getElementById('getintouchbutton').style.textDecoration = "none";
        document.getElementById('portfoliobutton').style.textDecoration = "underline";
    })

    return(
        <>
            <header>
                <Navbar style={{width: '100%'}}/>
            </header>
            <section>
                <Portfoliocont />
            </section>
            <Foot />
        </>
    )
}

export default Portfolio;