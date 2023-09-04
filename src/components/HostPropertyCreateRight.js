function HostPropertyCreateRight(){
    return(
            <div className="col-md-9">
            <div className="right-side">
                <div className="overview-tabs">
                        <h4>Overview</h4>
                        <p className="photos">Photos</p>
                        <div className="btn-adjust">
                            <a href="#" className="my-btn ">Add Photos</a>
                        </div>
                        <div style={{marginbottom: "25px"}} className="p-image">
                            <i className="fa fa-camera upload-button"></i>
                            <input className="file-upload1" type="file" accept="image/*" />
                        </div>
                        <div className="name">
                            <h4 id="name">Name</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, cumque. Odit </p>
                            <input className="ph1" type="text" placeholder="A red placeholder text.." />
                        </div>
                        <div className="des-wrap">
                            <h4 id="description">Description</h4>
                            <textarea  className="form-control1" rows="4" name="message" placeholder="Write Description" aria-label="Write message"></textarea>
                        </div>
                        <div className="acres">
                            <h4 id="acres1">Acres</h4>
                            <p>A rough estimate is ok! This helps campbooka know what to expect</p>
                            <input className="ph1" type="text" placeholder="A red placeholder text.." />
                        </div>
                        <div className="website-wrap">
                            <h4 id="website">Website</h4>
                            <p>Does your property have a website</p>
                            <input className="ph1" type="text" placeholder="A red placeholder text.." />
                        </div>
                </div>

                <div className="admin-tabs">
                    <h4 id="ins1">Insurance</h4>
                    <p>Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Pariatur, maiores molestiae vero odio quis enim dolorum veritatis quos .</p>
                    <a href="#" className="my-btn ">Change my coverage</a>
                    <a href="#" className="my-btn5 ">Learn More</a>
                    <div className="id-link">
                        <h4 id="id">ID Information</h4>
                        <a href="#" className="my-btn ">Get verified</a>
                    </div>
                    <div className="payouts">
                        <h4 id="payout">Payouts</h4>
                        <p> paypal is your payout provider</p>
                        <a href="#" className="my-btn">Set Payout method</a>
                    </div>
                    <div className="verify">
                        <h4 id="verify">Verify taxes</h4>
                        <p>you are varified</p>
                        <a href="#" className="my-btn ">Set up taxes</a>
                    </div>
                </div>
                <div className="location-tabs">
                    <div className="address">
                        <h4 id="address">Property Address</h4>
                        <a href="#" className="my-btn ">Change address</a>
                    </div>
                    <div className="verify">
                        <h4 id="verify">Verify Address</h4>
                        <p>you are verified</p>
                        <a href="#" className="my-btn ">set navigation point</a>
                    </div>
                </div>
                <div className="rules-tabs">
                    <h4 id="rules">Rules & Policies</h4>
                    <p>Covid Certification</p>
                    <p>you are verified</p>
                    <a href="#" className="my-btn ">Get Certification</a>
                </div>
            </div>
        </div>
    );
}

export default HostPropertyCreateRight;