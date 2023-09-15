import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import { API_BASE_URL } from "../configuration/Constants";
import g4 from '../images/g4.png';

function BookingHistory() {

    const[data, setData] = useState([]);
    const { auth } = useAuth();

    const requestOptions = {
        method: "POST", 
        headers: { "Content-Type": "application/json" },
        body: null
    };

    async function getDataFromBackend() {
        console.log(auth?.email);
        requestOptions.body = JSON.stringify({ email: auth?.email });
        const response = await fetch(API_BASE_URL + "/api/host/getBookingHistory", requestOptions);
        const responseData = await response.json();
        setData(responseData);
    }

    useEffect(() => {
        getDataFromBackend();
    }, []);

    return (
        <div className="booking-history">
            <h4>Booking History</h4>
            <div className="table-responsive">
                <table className="table table-striped" width="100%">
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Property Name</th>
                            <th>Booking Date</th>
                            <th>Camper Name</th>
                            <th>Payable Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data && data.map(d => (
                            <tr>
                                <td>
                                    <div className="pic">
                                        <img src={g4} alt="p1" />
                                    </div>
                                </td>
                                <td>{d.propertyName}</td>
                                <td>{d.bookingDate}</td>
                                <td>{d.camperName}</td>
                                <td>${d.payableAmount}</td>
                            </tr>
                        ))}
                       
                        
                    </tbody>
                </table>
            </div>
            <div className="read-more">Read More</div>
        </div>
    );
}

export default BookingHistory;