import './form.css'

import SilverCard from "./plcards/silver.jsx"
import GoldCard from "./plcards/gold.jsx"
import DiamondCard from "./plcards/diamond.jsx"

function Getintouchcont() {

    const handlePlanChange = (e) => {
        if (e.target.value !== 'plan') {
            document.getElementById('planholder').style.display = 'none';
        }
    };

    return (
        <>

            <div className="pHeader Arvo">
                <p><b>Plans</b></p>
                <hr />
                <br />
                <hr style={{ width: '115px' }} />
            </div>

            <div className='fcontainer'>
                <SilverCard />
                <GoldCard />
                <DiamondCard />
            </div>
            <br /><br /><br /><br /><br /><br /><br /><br />

            <div className="pHeader Arvo">
                <p><b>Get a Website</b></p>
                <hr />
                <br />
                <hr style={{ width: '115px' }} />
            </div>
            <div className="pText center">

                <form style={{ width: '100%' }} action="https://formsubmit.co/dba2f2ca6a4f7e46ef76b2afe1917bf3" method="POST">

                    <div className='fcontainer'>
                        <input type='text' name="buisness name" placeholder='Buisness Name' />
                        <input type='email' name="email" placeholder='Email' />
                    </div>
                    <div className='fcontainer'>
                        <select className='Roboto' name="plan" style={{ backgroundColor: 'white' }} onChange={handlePlanChange}>
                            <option id={'planholder'} >Plan</option>
                            <option value='silver'>silver</option>
                            <option value='gold'>gold</option>
                            <option value='diamond'>diamond</option>
                        </select>
                        <input type='text' name="domain" placeholder='Possible Domain Name (example.com)' />
                    </div>
                    <div className='fcontainer'>
                        <textarea className='Roboto' name="message" placeholder='Rough idea of the website' />
                    </div>
                    <div className='fcontainer'>
                        <input type='submit' value='Submit' />
                    </div>

                </form>
            </div>

            <div className="pHeader Arvo">
                <p><b>How Synthia websites work</b></p>
                <hr />
                <br />
                <hr style={{ width: '115px' }} />
            </div>
            <div className="pText center">
                <p className="Roboto">
                    When you click one of these plan cards listed below you will be sent to a form where you can buy
                    a website. After you fill out said for I will contact you in the days following asking if we are able
                    to meet on video call where we can discuss the design of the website in the website design planner
                    I use called Figma.
                    After this call I hope we can get to a conclusion on how you think the website will look and I can
                    get to programming. Depending on how complex the website is I can usually get it done within 2 weeks
                    and I will send you regular updates talking about my progress. When the website is finished you will
                    pay the fee listed on the plan you chose and the website will go up on the domain that you
                    select.<br /><br />
                    If you have any additional questions please contact me at contact@synthia.tech
                </p>
            </div>
        </>
    )
}

export default Getintouchcont;