import Navbar from "../components/navbar.jsx";
import Homecont from "../components/content.jsx";
import Foot from "../components/footer.jsx";


function Home() {
    return (
        <>
            <header>
                <Navbar style={{width: '100%'}}/>
            </header>

            <section>
                <Homecont />
            </section>

            <Foot />
        </>
    )
}

export default Home;