import { useEffect, useState } from "react";
import PropertyCard from "./PropertyCard";
import { API_BASE_URL } from "../configuration/Constants";
import { useLocation } from "react-router-dom";

function PropertyCardSection(props) {

    const [data, setData] = useState();

    const requestOptions = {
        method: "GET", 
        headers: { "Content-Type": "application/json"}, 
    };

    useEffect(() => {
        async function getDataFromBackend() {
            const response = await fetch(API_BASE_URL + '/api/postPropertyFromPlace/' + props.placeId, requestOptions);
            const responseData = await response.json();
            setData(responseData); 
            
        }
        getDataFromBackend();
        console.log("UseEffect() Hit");
    }, []);

    return (
        <div className="container">
            <div className="viewproperty-wrap">
                <div className="row">
                    {data && data.map(d => (<PropertyCard 
                        key = {d.id} 
                        propertyName={d.propertyName} 
                        accomodationType={d.accomodationType}
                        area={d.area}
                        description={d.description}
                        price={d.price}
                        likePercentage={d.likePercentage}
                        reviews={d.reviews}
                    />))}
                </div>
            </div>
        </div>
        </section>
    );
}

export default PropertyCardSection;