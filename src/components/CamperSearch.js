import Navbar from './Navbar';
import PlacesSection from './PlacesSection';
import SafetyPartnerSection from './SafetyPartnerSection';
import Footer from './Footer';
import { useLocation } from 'react-router-dom';

function CamperSearch() {

    const location = useLocation();

    return (
        <>
            <Navbar />
            <PlacesSection guestDetails={location.state} />
            <SafetyPartnerSection />
            <Footer />
        </>
    );
}
export default CamperSearch;