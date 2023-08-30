import { useEffect, useState } from "react";
import { API_BASE_URL } from "../configuration/Constants";
import PlaceCard from "./PlaceCard";

function PlacesSection(props) {

    const [data, setData] = useState([]);

    const requestOptions = {
        method: "POST", 
        headers: { "Content-Type": "application/json"}, 
        body: JSON.stringify({
            placeId : props.guestDetails.id,
            fromDate : props.guestDetails.dtRange[0],
            toDate : props.guestDetails.dtRange[1],
            noOfAdults : props.guestDetails.adCount,
            noOfChildren : props.guestDetails.chCount
        })
    };

    useEffect(() => {
        async function getDataFromBackend() {
            const response = await fetch(API_BASE_URL + '/api/getPlaceByLocation', requestOptions);
            const responseData = await response.json();
            setData(responseData); 
        }
        getDataFromBackend();
    }, []);

    function abc() {

    }

    return (
        <div className="container-list container">
            <div className="columns">
                <div className="column" >
                   {data.map( (d) => (<PlaceCard key={d.id} placeName = {d.placeName} acres={d.acres} description={d.description}/>) )}
                </div>
            </div>
        </div>
    );
}

export default PlacesSection;