import { useEffect } from "react";
import Navbar from "../components/navbar.jsx";
import Homecont from "../components/content/Homecont.jsx";
import Foot from "../components/footer.jsx";


function Home() {

    useEffect(() => {
        document.getElementById('homebutton').style.textDecoration = "underline";
        document.getElementById('getintouchbutton').style.textDecoration = "none";
        document.getElementById('portfoliobutton').style.textDecoration = "none";
    })

    return (
        <>
            <header>
                <Navbar style={{width: '100%'}} page='home' />
            </header>

            <section>
                <Homecont />
            </section>

            <Foot />
        </>
    )
}

export default Home;