import g3 from '../images/g3.png';
import { useNavigate } from 'react-router-dom';

function CheckoutBookingPriceSection(props) {
    const serviceFee = 28.70;
    const navigate = useNavigate();


    function handleOnClickContinue() {
        navigate("/checkout2", {
            state: {
                price: props.price
            }
        })
    }
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
                        <td>${props.price}</td>
                    </tr>
                    <tr>
                        <td>Service Fee</td>
                        <td>${serviceFee}</td>
                    </tr>
                    <tr>
                        <td>Total</td>
                        <td>${serviceFee + props.price}</td>
                    </tr>
                </tbody>
            </table>

            <button className="agree-continue" onClick={handleOnClickContinue} >Agree & Continue</button>

            <p style={{marginTop: "28px", fontWeight: 500}}>Don't worry, you won't be charged yet.</p>
            <p>
                <i className="fa fa-lock" aria-hidden="true"></i> 
                <span style={{marginLeft: "10px"}}>Secure checkout</span>
            </p>
        </div>
    );
}

export default CheckoutBookingPriceSection;