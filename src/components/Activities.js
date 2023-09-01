import { useEffect, useState } from "react";
import { API_BASE_URL } from "../configuration/Constants";
import Activity from "./Activity";

function Activities(props) {

    const [activityList, setActivityList] = useState([]);

    const requestOptions = {
        method: "GET", 
        headers: { "Content-Type": "application/json"}, 
    };
    
    useEffect(() => {
        async function getDataFromBackend() {
            const response = await fetch(API_BASE_URL + "/api/getActivitiesByPlace/" + props.placeId, requestOptions);
            const responseData = await response.json();
            setActivityList(responseData);
        }
        getDataFromBackend();
    }, []);

    return (
        <ul>
            {activityList.map(a => (<Activity key={a.id} activityName={a.activityName}/>))}            
        </ul>
    );
}

export default Activities;