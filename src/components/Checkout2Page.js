import CheckoutFinalBookingPriceSection from "./CheckoutFinalBookingPriceSection";
import CheckoutNavbar from "./CheckoutNavbar";
import CheckoutReviewAndPageSection from "./CheckoutReviewAndPaySection";

function Checkout2Page() {
    return (
        <>
            <CheckoutNavbar />
            <section className="knows">
                <div class="container">
                    <div class="row">
                        <CheckoutReviewAndPageSection />
                        <CheckoutFinalBookingPriceSection />
                    </div>
                </div>

            </section>

        </>
    );
}

export default Checkout2Page;