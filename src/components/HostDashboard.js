import Navbar from './Navbar';
import CampBodyLeft from './CampBodyLeft';
import HostDashboardRight from'./HostDashboardRight';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { API_BASE_URL } from '../configuration/Constants';
import useAuth from '../hooks/useAuth';

function HostDashboard() {
    
    const location = useLocation();
    const [data, setData] = useState(null);
    const { auth } = useAuth();

    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", "Bearer " + auth?.jwtToken);

    const requestOptions = {
        method: "POST", 
        headers: headers,
        body: null
    };
    useEffect(() => {
        async function getDataFromBackend() {
            requestOptions.body = JSON.stringify({ email: location.state.email });
            const response = await fetch(API_BASE_URL + "/api/user/getDashboardProfile", requestOptions);
            const responseData = await response.json();
            setData(responseData);
        }
        getDataFromBackend();
    }, []);

    return(
        <>
        <Navbar/>
          <section className="campbody">
                <div className="container">
                    <div className="campbody-wrap">
                        <div className="row">
                            <CampBodyLeft data={data}/>
                            <HostDashboardRight hostname={data?.name}/>
                        </div>
                    </div>
                </div>
            </section>   
                     
        </>
    )
}

export default HostDashboard;