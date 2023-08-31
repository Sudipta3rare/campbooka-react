function CheckoutReviewAndPageSection() {
    return (
        <div className="col-md-8">
            <div className="pay-wrap">
                <h2>
                    Review and pay
                </h2>
                <p>Camper details</p>

                <div className="contact-wrap">
                    <form id="contact_form" action="">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group name">
                                    <input type="text" name="name" className="form-control" placeholder="First Name" aria-label="Full Name" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group name">
                                    <input type="text" name="name" className="form-control" placeholder="Last Name" aria-label="Full Name" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group email">
                                    <input type="email" name="email" className="form-control" placeholder="Email Address" aria-label="Email Address" />
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="form-group number">
                                    <input type="number" name="phone" className="form-control" placeholder="Phone" aria-label="Phone Number" />
                                </div>
                            </div>


                        </div>
                    </form>
                </div>

                <div className="vehicles">
                    <p>Trip details <span className="d-block">Number of vehicles*</span> </p>
                    <div className="col-md-6">
                        <div className="form-group name">
                            <input style={{marginleft: "-18px"}} type="text" name="name" className="form-control" placeholder="No of vehicle" aria-label="Full Name" />
                        </div>
                    </div>

                    <form className="camp-method">
                        <label>
                            Camping method*:
                        </label>
                        <br />
                        <input type="radio" id="gender" name="gender" value="male" /> Tent
                        <br />
                        <input type="radio" id="gender" name="gender" value="female" /> RV or campervan <br />
                    </form>
                </div>

                <div className="contact-wrap">
                    <h2>
                        Payment details
                    </h2>
                    <p>All transactions are secure and encrypted.</p>
                    <form id="contact_form" action="">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="form-group name">
                                    <input dir="ltr" type="text" inputmode="numeric" name="number" id="Field-numberInput"
                                        placeholder="1234 1234 1234 1234" autocomplete="billing cc-number" aria-invalid="false"
                                        aria-describedby="knownCardBrandDesc cardBrandIconsDesc" aria-required="true"
                                        className="form-control" value="" style={{paddingRight: "51.2px"}} />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group name">
                                    <input type="text" name="name" className="form-control" placeholder="Expiration- MM/YY" aria-label="" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group email">
                                    <input type="number" name="email" className="form-control" placeholder="CVC" aria-label="close" />
                                </div>
                            </div>

                            <div className="col-md-12">
                                <div className="form-group number">
                                    <input type="text" name="phone" className="form-control" placeholder="Country" aria-label="Phone Number" />
                                </div>
                            </div>
                        </div>
                    </form>

                    <p style={{fontSize: "14px"}}>
                        By providing your card information, you allow CampBooka to charge your card for future payments in accordance with their terms.
                    </p>
                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                    <label style={{marginLeft: "10px"}} for="vehicle1">
                        Save this card for future trips
                    </label>
                </div>
            </div>
        </div>
    );
}

export default CheckoutReviewAndPageSection;