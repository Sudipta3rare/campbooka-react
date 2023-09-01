import Feature from './Feature';
import { useState, useEffect } from 'react';
import { API_BASE_URL } from '../configuration/Constants';

function Features(props) {
    const [featureList, setFeatureList] = useState([]);

    const requestOptions = {
        method: "GET", 
        headers: { "Content-Type": "application/json"}, 
    };
    
    useEffect(() => {
        async function getDataFromBackend() {
            const response = await fetch(API_BASE_URL + "/api/getFeaturesByPlace/" + props.placeId, requestOptions);
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