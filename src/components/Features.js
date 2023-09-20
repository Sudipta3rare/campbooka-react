import Feature from './Feature';
import { useState, useEffect } from 'react';
import { API_BASE_URL } from '../configuration/Constants';

function Features(props) {
    const [featureList, setFeatureList] = useState([]);
    const headers = new Headers();

    headers.append("Content-Type", "application/json");

    const requestOptions = {
        method: "GET", 
        headers: headers, 
    };
    
    useEffect(() => {
        async function getDataFromBackend() {
            const response = await fetch(API_BASE_URL + "/api/public/getFeaturesByPlace/" + props.placeId, requestOptions);
            const responseData = await response.json();
            setFeatureList(responseData);
        }
        getDataFromBackend();
    }, []);
    return (
        <ul>
            {featureList.map(f => (<Feature key={f.id} featureName={f.featureName}/>))} 
        </ul>
    );
}

export default Features;