import { useLocation } from "react-router-dom";
import CheckoutFinalBookingPriceSection from "./CheckoutFinalBookingPriceSection";
import CheckoutNavbar from "./CheckoutNavbar";
import CheckoutReviewAndPageSection from "./CheckoutReviewAndPaySection";

function Checkout2Page() {
    const location = useLocation();
    const price = location.state.price;

    return (
        <>
            <CheckoutNavbar />
            <section className="knows">
                <div class="container">
                    <div class="row">
                        <CheckoutReviewAndPageSection />
                        <CheckoutFinalBookingPriceSection price={price}/>
                    </div>
                </div>

            </section>

        </>
    );
}

export default Checkout2Page;