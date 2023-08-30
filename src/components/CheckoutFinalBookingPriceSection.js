import g3 from '../images/g3.png';

function CheckoutFinalBookingPriceSection() {
    return (
        <div className="col-md-4">
            <div className="booking-img d-flex">
                <img src={g3} alt="" />
                <p>
                    Holcomb Valley Ranch Campground
                    <span className="d-block">date: june 27-29</span>
                </p>
            </div>

            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Booking Summary</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Subttal
                        </td>
                        <td>$190.00</td>
                    </tr>
                    <tr>
                        <td>Service Fee
                        </td>
                        <td>$28.70</td>
                    </tr>
                    <tr>
                        <td>Total</td>
                        <td>$218.70</td>
                    </tr>
                </tbody>
            </table>
            <a className="discount-code" href="#">Add a discount code</a>
            <p className="terms-condition">
                By clicking on I agree and book now, you agree to pay the total amount shown, which includes the Service
                Fees, and you agree to the host's Moderate Cancellation Policy, the host's rules, Hipcamp's
                <a className="discount-code" href="#">Terms of Use,</a>
                and Hipcamp's
                <a className="discount-code" href="#">Privacy Policy.</a>
            </p>
            <a className="agree-continue" href="#">Agree & Continue</a>
            <p style={{ marginTop: "28px", fontWeight: 500 }}>Don't worry, you won't be charged yet.</p>
            <p>
                <i className="fa fa-lock" aria-hidden="true"></i>
                <span style={{marginLeft: "10px", fontSize: "15px", fontWeight: 600}}>Secure checkout</span>
            </p>
        </div>
    );
}

export default CheckoutFinalBookingPriceSection;