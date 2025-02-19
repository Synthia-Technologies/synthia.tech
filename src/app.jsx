import './index.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import Getintouch from "./pages/Getintouch.jsx";

function App() {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/getintouch" element={<Getintouch/>}/>
                <Route path="/" element={<Portfolio/>}/>
            </Routes>
        </Router>
    )
}

export default App;