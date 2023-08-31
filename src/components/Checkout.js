import { useLocation } from 'react-router-dom';
import CheckoutBookingPriceSection from './CheckoutBookingPriceSection';
import CheckoutKnowSection from './CheckoutKnowSection';
import CheckoutNavbar from './CheckoutNavbar';

function Checkout() {

    const location = useLocation();
    const price = location.state.price;
    return (
        <>
            <CheckoutNavbar />
            <section className='knows'>
                <div class="container">
                    <div class="row">
                        <CheckoutKnowSection />
                        <CheckoutBookingPriceSection price={price} />
                    </div>
                </div>
            </section>
        </>
    );
}

export default Checkout;