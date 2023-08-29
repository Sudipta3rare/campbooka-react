import { useEffect, useState } from "react";
import { API_BASE_URL } from "../configuration/Constants";
import PlaceCard from "./PlaceCard";

function PlacesSection(props) {

    const [data, setData] = useState([]);

    const requestOptions = {
        method: "POST", 
        headers: { "Content-Type": "application/json"}, 
        body: JSON.stringify({
            placeId : 1,
            fromDate : "01-08-2023",
            toDate : "03-08-2023",
            noOfAdults : 3,
            noOfChildren : 1
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

    return (
        <div className="container-list container">
            <div className="columns">
                <div className="column" >
                   {data.map( d => (<PlaceCard key={d.placeName} acres={d.acres} description={d.description}/>) )}
                </div>
            </div>
        </div>
    );
}

export default PlacesSection;