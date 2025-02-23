function DiamondCard() {

    return (
        <>
            <div className="fcontainer">
                <div className="plCard diamond taLeft center">
                    <h1 className="Arvo Heading">Diamond</h1>
                    <p className="Roboto">
                        <ul>
                            <li>Everything Gold has and...</li>
                            <li><b>Premium Website Design</b> (unlimited pages, animations)</li>
                            <li><b>Contact Forms</b> (complex inquiries)</li>
                            <li><b>Priority Support & Updates</b></li>
                            <li><b>Advanced Security</b> (SSL, regular audits)</li>
                        </ul>
                    </p>
                    <div className="fcontainer">
                        <a className="plLearnmore" onClick="diamondPopup()">Learn More</a>
                        <button className="Arvo" onClick="diamondPopup()">
                            <p><b className="num">$125</b><br/>
                                <b className="pm">Per Month</b></p>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DiamondCard;