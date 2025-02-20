function Getintouchcont() {
    return(
        <>
            <div className="fcontainer">
                <div id="popupWindow">
                    <input type="image" src="/images/close.svg" onClick="closePopup()" alt="exit"/>

                    <div className="fcontainer center" style={{marginTop: '50px'}}>
                        <form>
                            <input type="text" placeholder="Name / Business Name"/>
                            <input type="email" placeholder="Email"/><br/>

                            <input type="text" id="formplan" placeholder="Plan"/>
                        </form>
                    </div>
                </div>
            </div>

            <div className="pHeader Arvo">
                <p><b>Plans</b></p>
                <hr/>
                <br/>
                <hr style="width:115px;"/>

                <div className="fcontainer">
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
                                <a className="plLearnmore" onClick="silverPopup()">Learn More</a>
                                <button className="Arvo" onClick="silverPopup()">
                                    <p><b className="num">$30</b><br/>
                                        <b className="pm">Per Month</b></p>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="fcontainer">
                        <div className="plCard gold taLeft center">
                            <h1 className="Arvo Heading">Gold</h1>
                            <p className="Roboto">
                                <ul>
                                    <li>Everything Silver has and...</li>
                                    <li><b>Plus Website Design</b> (up to ten pages)</li>
                                    <li><b>Standard SEO</b></li>
                                    <li><b>Monthly Maintenance</b></li>
                                    <li><b>Social Media Integration</b> (links and feeds)</li>
                                    <li><b>One Major Update Each Year</b></li>
                                    <li><b>Simple On-Site Payment</b></li>
                                </ul>
                            </p>
                            <div className="fcontainer">
                                <a className="plLearnmore" onClick="goldPopup()">Learn More</a>
                                <button className="Arvo" onClick="goldPopup()">
                                    <p><b className="num">$75</b><br/>
                                        <b className="pm">Per Month</b></p>
                                </button>
                            </div>
                        </div>
                    </div>
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
                </div>
            </div>
        </>
    )
}

export default Getintouchcont;