import Navbar from './Navbar';
import PlacesSection from './PlacesSection';
import PlaceCard from './PlaceCard';
import SafetyPartnerSection from './SafetyPartnerSection';
import Footer from './Footer';

function CamperSearch() {
    return (
        <>
            <Navbar />
            <PlacesSection>
                <PlaceCard />
                <PlaceCard />
                <PlaceCard />
                <PlaceCard />
            </PlacesSection>
            <SafetyPartnerSection />
            <Footer />
        </>
    );
}
export default CamperSearch;