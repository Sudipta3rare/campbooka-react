import { useState } from 'react';
import { API_BASE_URL } from '../configuration/Constants';
import useAuth from '../hooks/useAuth';
import './HostPropertyCreateRight.css';

function HostPropertyCreateRight() {

    const [selectedFile, setSelectedFile] = useState(null);
    const [propertyName, setPropertyName] = useState('');
    const [propertyType, setPropertyType] = useState('');
    const [propertyPrice, setPropertyPrice] = useState('');
    const [propertyPlace, setPropertyPlace] = useState('');
    const [propertyDescription, setPropertyDescription] = useState('');
    const [propertyArea, setPropertyArea] = useState('');
    const [propertyWebsite, setPropertyWebsite] = useState('');

    const handlePropertyNameChange = (event) => setPropertyName(event.target.value);
    const handlePropertyTypeChange = (event) => setPropertyType(event.target.value);
    const handlePropertyPriceChange = (event) => setPropertyPrice(event.target.value);
    const handlePropertyPlaceChange = (event) => setPropertyPlace(event.target.value);
    const handlePropertyDescriptionChange = (event) => setPropertyDescription(event.target.value);
    const handlePropertyWebsiteChange = (event) => setPropertyWebsite(event.target.value);
    const handlePropertyAreaChange = (event) => setPropertyArea(event.target.value);

    const { auth } = useAuth();
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", "Bearer " + auth?.jwtToken);

    const requestOptions = {
        method: "POST",
        headers: headers,
        body: null
    };
    function handleFileUpload(event) {
        setSelectedFile(event.target.files[0]);
    }
    function handleUpload() {
        console.log('Is this working');
    }
    async function sendDataToBackend() {
        requestOptions.body = JSON.stringify({
            propertyName,
            propertyType,
            description: propertyDescription, 
            placeName: propertyPlace,
            area: propertyArea,
            price: propertyPrice,
        })
        const response = await fetch(API_BASE_URL + "/api/host/addNewProperty", requestOptions);
    }

    return (
        <div className="col-md-9">
            <div className="right-side">
                <div className="overview-tabs">
                    <div className="row">
                        <h4>Add Photo</h4>
                        <div className="small-12 medium-2 large-2 columns">
                            <div className="circle">
                                <img className="profile_pic" src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg" />
                            </div>
                            <div className="p-image">
                                <i className="fa fa-camera upload-button">
                                <input 
                                    className="file-upload"
                                    type="file"
                                    accept="image/*"
                                    onChange={handleFileUpload}
                                    onClick={handleUpload} />
                                </i>
                            </div>
                        </div>
                    </div>

                    {/* <p className="photos">Photos</p>
                        <div className="btn-adjust">
                            <a href="#" className="my-btn ">Add Photos</a>
                        </div> */}
                    {/* <div style={{marginbottom: "25px"}} className="p-image">
                            <i className="fa fa-camera upload-button"></i>
                            <input className="file-upload1" type="file" accept="image/*" />
                        </div> */}
                    <div className="name">
                        <h4 id="name">Property Name</h4>
                        <input className="ph1" type="text" placeholder="Name" value={propertyName} onChange={handlePropertyNameChange} />
                    </div>
                    <div className="name">
                        <h4 id="property-type">Property Type</h4>
                        <input className="ph1" type="text" placeholder="Property Type" value={propertyType} onChange={handlePropertyTypeChange} />
                    </div>
                    <div className="name">
                        <h4 id="property-price">Property Price</h4>
                        <input className="ph1" type="text" placeholder="Property Price" value={propertyPrice} onChange={handlePropertyPriceChange} />
                    </div>

                    <div className='name'>
                        <h4>Property Place</h4>
                        <select name="" id="" className='ph1' 
                            onChange={handlePropertyPlaceChange} value={propertyPlace}>
                            <option value="Ipsum Chill">Ipsum Chill</option>
                            <option value="Camp BigMount">Camp BigMount</option>
                            <option value="Silicon Valley">Silicon Valley</option>
                            <option value="London Vales">London Vales</option>
                        </select>
                    </div>
                    <div className="des-wrap">
                        <h4 id="description">Description</h4>
                        <textarea onChange={handlePropertyDescriptionChange} value={propertyDescription} className="form-control1" rows="4" name="message" placeholder="Write Description" aria-label="Write message"/>
                    </div>
                    <div className="acres">
                        <h4 id="acres1">Acres</h4>
                        <p>A rough estimate is ok! This helps campbooka know what to expect</p>
                        <input className="ph1" type="text" placeholder="Acres" value={propertyArea} onChange={handlePropertyAreaChange} />
                    </div>
                    <div className="website-wrap">
                        <h4 id="website">Website</h4>
                        <p>Does your property have a website</p>
                        <input className="ph1" type="text" placeholder="www.example.com" value={propertyWebsite} onChange={handlePropertyWebsiteChange} />
                    </div>
                    <button onClick={sendDataToBackend} className='submit-button'>
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
}

export default HostPropertyCreateRight;