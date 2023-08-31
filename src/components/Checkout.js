import CheckoutBookingPriceSection from './CheckoutBookingPriceSection';
import CheckoutKnowSection from './CheckoutKnowSection';
import CheckoutNavbar from './CheckoutNavbar';

function Checkout() {
    return (
        <>
            <CheckoutNavbar />
            <section className='knows'>
                <div class="container">
                    <div class="row">
                        <CheckoutKnowSection />
                        <CheckoutBookingPriceSection />
                    </div>
                </div>
            </section>
        </>
    );
}

export default Checkout;