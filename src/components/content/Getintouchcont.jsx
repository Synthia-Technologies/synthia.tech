import SilverCard from "./plcards/silver.jsx"
import GoldCard from "./plcards/gold.jsx"
import DiamondCard from "./plcards/diamond.jsx"

function Getintouchcont() {
    return(
        <>

            <div className="pHeader Arvo">
                <p><b>Plans</b></p>
                <hr/>
                <br/>
                <hr style={{width: '115px'}}/>
            </div>

            <div className='fcontainer'>
                <SilverCard/>
                <GoldCard/>
                <DiamondCard/>
            </div>
            <br/><br/><br/><br/><br/><br/><br/><br/>
        </>
    )
}

export default Getintouchcont;