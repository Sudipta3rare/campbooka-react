import { useState } from 'react';
import './HostPropertyCreateRight.css';

function HostPropertyCreateRight() {
    const [selectedFile, setSelectedFile]=useState(null);
    function handleFileUpload(event){
        setSelectedFile(event.target.files[0]);

    }
    function handleUpload(){
        console.log('Is this working');
    }
    return (
        <div className="col-md-9">
            <div className="right-side">
                <div className="overview-tabs">
                    <div className="row">
                        <h4>Add Photo</h4>
                        <div className="small-12 medium-2 large-2 columns">
                            <div className="circle">
                                <img className="profile_pic"
                                    src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg" />
                            </div>
                            <div className="p-image">
                                <i className="fa fa-camera upload-button"></i>
                                <input 
                                    className="file-upload"
                                    type="file"
                                    accept="image/*"
                                    onChange={handleFileUpload}
                                    onClick={handleUpload} />
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
                        <h4 id="name">Name</h4>
                        <input className="ph1" type="text" placeholder="Name" />
                    </div>
                    <div className="name">
                        <h4 id="property-type">Property Type</h4>
                        <input className="ph1" type="text" placeholder="Property Type" />
                    </div>
                    <div className="name">
                        <h4 id="property-price">Property Price</h4>
                        <input className="ph1" type="text" placeholder="Property Price" />
                    </div>

                    <div className='name'>
                        <h4>Property Place</h4>
                        <select name="" id="" className='ph1'>
                            <option value="">Place Name1</option>
                            <option value="">Place Name2</option>
                            <option value="">Place Name3</option>
                            <option value="">Place Name4</option>
                        </select>
                    </div>
                    <div className="des-wrap">
                        <h4 id="description">Description</h4>
                        <textarea className="form-control1" rows="4" name="message" placeholder="Write Description" aria-label="Write message"></textarea>
                    </div>
                    <div className="acres">
                        <h4 id="acres1">Acres</h4>
                        <p>A rough estimate is ok! This helps campbooka know what to expect</p>
                        <input className="ph1" type="text" placeholder="Acres" />
                    </div>
                    <div className="website-wrap">
                        <h4 id="website">Website</h4>
                        <p>Does your property have a website</p>
                        <input className="ph1" type="text" placeholder="www." />
                    </div>
                    <div className='submit-button'>
                        <a href="">Submit</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HostPropertyCreateRight;