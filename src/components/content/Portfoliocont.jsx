import LangCard from "../langCards.jsx"

function Portfoliocont() {
    return (
        <>

            <div className="pHeader Arvo">
                <p><b>Languages and Tools</b></p>
                <hr />
                <br />
                <hr style={{ width: '115px' }} />
            </div>
            <div className="fcontainer center LangCardcontaner">
                <LangCard lang="javascript" />
                <LangCard lang="html" />
                <LangCard lang="css" />
            </div><br />
            <div className="fcontainer center LangCardcontaner">
                <LangCard lang="react" />
                <LangCard lang="git" />
            </div>

            <div className="pHeader Arvo">
                <p><b>Past Projects</b></p>
                <hr />
                <br />
                <hr style={{ width: '115px' }} />
            </div>
            <div className="pText center fcontainer">
                <div style={{ width: '100%' }}>
                    <p className="Roboto">
                        <a href="https://www.wdwoodlandschool.org"><b>The West Denmark Woodland School</b></a> is a child care
                        facility located in Luck, WI.
                        I had the pleasure of working with them over the summer of 2024. To this day I maintain the
                        site,
                        if they ever need me to edit anything they are able to email me and it will be fixed in a matter
                        of hours.
                    </p>
                </div>
                <div style={{ width: '100%' }}>
                    <img alt='wdwoodlandschool.org screenshot' style={{ width: '100%' }} src="/images/Pfwoodlandschool.svg" />
                </div>
            </div><br/><br/>
            <div className="pText center fcontainer">
                <div style={{ width: '100%' }}>
                    <p className="Roboto">
                        <a href="https://luuikau.synthia.tech"><b>Luuikau</b></a> is an artist based in
                        Saint Paul, MN. I made his website in june of 2025. The site was made in react and includes several
                        features such as a commission form and links to his social media. 
                    </p>
                </div>
                <div style={{ width: '100%' }}>
                    <img alt='wdwoodlandschool.org screenshot' style={{ width: '100%' }} src="/images/Pfwoodlandschool.svg" />
                </div>
            </div>
            <br />
        </>
    )
}

export default Portfoliocont;