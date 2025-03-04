import React from 'react';

function Homecont() {

    return (
        <>
            <div className="pHeader Arvo">
                <p><b>What is Synthia?</b></p>
                <hr/>
                <br/>
                <hr style={{ width: '115px' }}/>
            </div>
            <div className="pText center">
                <p className="Roboto">
                    <b>Synthia</b> is a web development and design firm that brings well-designed and functional
                    websites to you for some of the best prices around. <b>Synthia</b> specializes in working with
                    businesses to manage all of their digital needs without them having to do a single thing other
                    than focus on the parts of your business that you enjoy.
                </p>
            </div>
            <br/><br/>
            <div className="pHeader Arvo">
                <p><b>Who am I?</b></p>
                <hr/>
                <br/>
                <hr style={{ width: '115px' }}/>
            </div>
            <div className="pText center fcontainer">
                <p className="Roboto">
                    Hello, my name is <b>Elodie</b>, and I am a high school student here in <b>Saint Paul, MN</b>.
                    I would like to make it as transparent as I can that I am a junior developer trying to gain
                    experience in this industry that
                    fascinates me by developing breathtaking websites for each client I work with, ensuring each and
                    every one of my clients gets the best experience working with me that I can offer them.
                </p>
                <img alt="Developer Headshot" className="headshot" src="/images/Eheadshot.jpg"/>
            </div>
        </>
    )
}

export default Homecont;