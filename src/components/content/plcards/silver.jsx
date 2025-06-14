

function SilverCard() {

    return (
        <>
            <div className="fcontainer">
                <div className="plCard silver taLeft center">
                    <h1 className="Arvo Heading">Silver</h1>
                    <p className="Roboto">
                        <ul>
                            <li><b>Basic Website Design</b> (up to 5 pages)</li>
                            <li><b>Email Support</b> (during office hours)</li>
                            <li><b>Contact Form</b> (simple inquiries)</li>
                            <li><b>Basic Site Security</b></li>
                        </ul>
                    </p>
                    <div className="fcontainer">
                        <button className="Arvo">
                            <p className="discountNum"><b>40$</b></p>
                            <p><b className="num">$35</b><br/>
                                <b className="pm">Per Month</b></p>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SilverCard;