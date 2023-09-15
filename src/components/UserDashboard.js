import CampBodyLeft from './CampBodyLeft';
import './UserDashboard.css';
import Navbar from './Navbar';
import CampBodyRight from './CampBodyRight';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { API_BASE_URL } from '../configuration/Constants';

function UserDashboard() {
    const location = useLocation();
    const [data, setData] = useState(null);

    const requestOptions = {
        method: "POST", 
        headers: { "Content-Type": "application/json"},
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

    return (
        <>
            <Navbar />
            <section className="campbody">
                <div className="container">
                    <div className="campbody-wrap">
                        <div className="row">
                            <CampBodyLeft data={data} />
                            <CampBodyRight />
                        </div>
                    </div>
                </div>
            </section>
        </>

    );
}
export default UserDashboard;