import { useLocation } from "react-router-dom";
import CamperNavbar from "./CamperNavbar";
import PlaceDescriptionSection from "./PlaceDescriptionSection";
import PlaceDetailSection from "./PlaceDetailSection";
import PlaceHostDetailsSection from "./PlaceHostDetailsSection";
import PlaceImageSection from "./PlaceImageSection";
import PropertyCardSection from "./PropertyCardSection";
import ThingsToDoSection from "./ThingsToDoSection";

function Camperbook() {

    const location = useLocation();
    const placeData = location.state;
    console.log(placeData);


    return (
        <>
            <header>
                <CamperNavbar />
            </header>
            <PlaceDetailSection placeName={placeData.placeName} />
            <PlaceImageSection />
            <PlaceDescriptionSection acres={placeData.acres} description={placeData.description} />
            <PropertyCardSection placeId={placeData.placeId}/>
            <PlaceHostDetailsSection/>
            <ThingsToDoSection />
        </>
        
    );
}
export default Camperbook;