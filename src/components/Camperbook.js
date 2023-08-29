import CamperNavbar from "./CamperNavbar";
import PlaceDescriptionSection from "./PlaceDescriptionSection";
import PlaceDetailSection from "./PlaceDetailSection";
import PlaceHostDetailsSection from "./PlaceHostDetailsSection";
import PlaceImageSection from "./PlaceImageSection";
import PropertyCardSection from "./PropertyCardSection";
import ThingsToDoSection from "./ThingsToDoSection";

function Camperbook() {
    return (
        <>
            <header>
                <CamperNavbar />
            </header>
            <PlaceDetailSection  />
            <PlaceImageSection />
            <PlaceDescriptionSection />
            <PropertyCardSection />
            <PlaceHostDetailsSection/>
            <ThingsToDoSection />
        </>
        
    );
}
export default Camperbook;