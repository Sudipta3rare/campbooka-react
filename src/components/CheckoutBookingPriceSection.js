import g3 from '../images/g3.png';

function CheckoutBookingPriceSection() {
    return (
        <div className="col-md-4">
            <div className="booking-img d-flex">
                <img src={g3} alt="" />
                <p>
                    Holcomb Valley Ranch Campground
                    <span className="d-block">date</span>
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
                        <td>Subtotal</td>
                        <td>$190.00</td>
                    </tr>
                    <tr>
                        <td>Service Fee</td>
                        <td>$28.70</td>
                    </tr>
                    <tr>
                        <td>Total</td>
                        <td>$218.70</td>
                    </tr>
                </tbody>
            </table>

            <a className="agree-continue" href="checkout2.html">Agree & Continue</a>

            <p style={{margintop: "28px", fontWeight: 500}}>Don't worry, you won't be charged yet.</p>
            <p>
                <i className="fa fa-lock" aria-hidden="true"></i> 
                <span style={{marginLeft: "10px"}}>Secure checkout</span>
            </p>
        </div>
    );
}

export default CheckoutBookingPriceSection;