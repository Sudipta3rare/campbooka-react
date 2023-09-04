import sf3 from '../images/sf3.png';
import './HostProfileLeft.css';

function HostProfileLeft(){
    return(
        <div className="col-md-8">
            <div className="dashboard-left" style={{margintop: "30px"}}>
            <div className="leftbox-1 d-flex">
                <img src={sf3} alt="sf3"  width="60" height="60" />
                <div className="img-left">
                    <h3>Good Morning , Dave!</h3>
                    <a href="host-edit-profile.html">Update pofile photo</a>
                </div>  
            </div>
            <div className="box-2">
                <p>MANAGING BLACKTHRON RETREATE,KS</p>
                <p>Here's how things have been looking the last 30 days.</p>
                <div className="row">
                    <div className="col-md-3" >
                        <p style={{fontweight: "700"}}>100% <br/> Recommend rate <br/> Excellent</p>
                    </div>
                    <div className="col-md-3">
                        <p style={{fontweight: "700"}}> 3 <br/> Bookings <br/>Wahoo!</p>
                    </div>
                    <div className="col-md-3">
                        <p style={{fontweight: "700"}}> $0 <br/> Referral <br/> Invite hosts</p>    
                    </div>
                    <div className="col-md-10 ">
                        <div className="con1"> <p style={{fontweight: "500" , fontsize: "20px"}}> We've Update our inclusion standards</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.In ornare mattis orci a dictum. Cras pretium luctus augue, placerat eleifend enim laoreet ac. Aliquam vehicula egestas sollicitudin. Maecenas rhoncus accumsan felis congue pellentesque. .</p>
                            <button  className="btn btn-primary btn-sm" style={{backgroundcolor: "green", color: "white"}}>I agree</button>
                        </div>
                    </div>
                    <div className="col-md-8 ">
                        <div className="con2 d-flex align-items-center"> 
                            <div className="logo " >
                                <i className="fa fa-free-code-camp fa-2x" aria-hidden="true"></i>
                            </div>
                            <div className="text-1">
                                <p style={{marginleft: "10px;"}}>No Fire ban in effect</p>
                                <p style={{marginleft: "10px;"}}>You can toggle Property wide fire restriction here . Always adhere to state and local fire restriction</p>
                            </div>
                            <div>
                                <label className="switch">
                                    <input type="checkbox"/>
                                    <span className="slider round"></span>
                                </label>
                            </div>
                        </div> 
                    </div>

                    <div className="col-md-8 ">
                        <div className="dis-box d-flex">
                            <div className="box-3 d-flex align-items-center">
                                <div className="icons">
                                    <i className="fa fa-money fa-2x" aria-hidden="true"></i>
                                </div>
                                <div className="text-2">
                                    <p style={{marginleft: "10px;"}}> Discounts</p>
                                    <p style={{marginleft: "10px;"}}> Manage and add discounts for Hipcamper to use </p>
                                </div>
                            </div>
                            <div className="d-flex" style={{alignitems: "center"}}>
                                <a href="#" style={{color: "green"}}> Manage discounts </a>
                                <i className="fa fa-long-arrow-right fa-2x" aria-hidden="true" style={{marginleft: "10px", color: "green"}}></i>
                            </div>
                            
                        </div>
                        
                    </div>

                    <div className="col-md-8 ">
                        <div className="dis-box d-flex">
                            <div className="box-4 d-flex align-items-center">
                                <div className="icons">
                                    <i className="fa fa-money fa-2x" aria-hidden="true"></i>
                                </div>
                                <div className="text-2">
                                    <p style={{marginleft: "10px;"}}> Extras</p>
                                    <p style={{marginleft: "10px;"}}> Manage and add goods rentals and experience </p>
                                </div>
                            </div>
                            <div className="d-flex" style={{alignitems: "center"}}>
                                <a href="#" style={{color: "green"}}> Manage Extras</a>
                                <i className="fa fa-long-arrow-right fa-2x" aria-hidden="true" style={{marginleft: "10px", color: "green"}}></i>
                            </div>
                        </div>
                        
                    </div>

                    <div className="col-md-8 ">
                        <div className="dis-box d-flex">
                            <div className="box-5 d-flex align-items-center">
                                <div className="icons">
                                    <i className="fa fa-envelope fa-2x" aria-hidden="true"></i>
                                </div>
                                <div className="text-2">
                                    <p style={{marginleft: "10px;"}}> scheduled Message</p>
                                    <p style={{marginleft: "10px;"}}> Manage and add scheduled Messages to be automatically sent to Campbooka </p>
                                </div>
                            </div>
                            <div className="d-flex" style={{alignitems: "center"}}>
                                <a href="#" style={{color: "green"}}> Manage scheduled Message</a>
                                <i className="fa fa-long-arrow-right fa-2x" aria-hidden="true" style={{marginleft: "10px", color: "green"}}></i>
                            </div>
                        </div>     
                    </div>

                    <div className="col-md-8 ">
                        <div className="dis-box d-flex">
                            <div className="box-6 d-flex align-items-center">
                                <div className="icons">
                                    <i className="fa fa-refresh fa-2x" aria-hidden="true"></i>
                                </div>
                                <div className="text-2">
                                    <p style={{marginleft: "10px;"}}> External calenders</p>
                                    <p style={{marginleft: "10px;"}}> Manage and add external calenders  </p>
                                </div>
                            </div>
                            <div className="d-flex" style={{alignitems: "center"}}>
                                <a href="#" style={{color: "green"}}> Manage External calenders</a>
                                <i className="fa fa-long-arrow-right fa-2x" aria-hidden="true" style={{marginleft: "10px", color: "green"}}></i>
                            </div>
                        </div>      
                    </div>
                </div>

                <div className="row lb1">
                    <div className="col-md-9">
                        <div className="long-box">
                        <div className="Bookings">
                            <h4>Bookings at a glance </h4>
                            <p> Bookings in the next 7 days</p>
                            </div>
                            <div className="small-box d-flex">
                            <div className="col-md-2 ">
                                <img src={sf3}  width="41" height="40" />

                            </div>
                            <div className="col-md-5">
                                <p style={{fontsize: "12px"}}>Roxana Buck at Blackthron basecamp </p>
                                <p style={{fontsize: "12px", margintop: "-12px"}}> Mon May 08 - Tue May 09 (1 Night) </p>
                            </div>
                            <div className="col-md-2" style={{marginleft: "100px"}}>
                                <div className="d-flex align-items-center">
                                    <a href="#">view</a>
                                    <i className="fa fa-long-arrow-right" aria-hidden="true" style={{marginleft: "10px"}}></i>
                                </div>
                                

                            </div>
                            </div>

                            <div className="small-box d-flex">
                            <div className="col-md-2 ">
                                <img src={sf3}  width="41" height="40" />

                            </div>
                            <div className="col-md-5">
                                <p style={{fontsize: "12px"}}>Roxana Buck at Blackthron basecamp </p>
                                <p style={{fontsize: "12px", margintop: "-12px"}}> Mon May 08 - Tue May 09 (1 Night) </p>
                            </div>
                            <div className="col-md-2" style={{marginleft: "100px"}}>
                                <div className="d-flex align-items-center">
                                    <a href="#">view</a>
                                    <i className="fa fa-long-arrow-right" aria-hidden="true" style={{marginleft: "10px"}}></i>
                                </div>
                            </div>
                            </div>
                            
                            <div className="small-box d-flex">
                            <div className="col-md-2 ">
                                <img src={sf3}  width="41" height="40" />

                            </div>
                            <div className="col-md-5">
                                <p style={{fontsize: "12px"}}>Roxana Buck at Blackthron basecamp </p>
                                <p style={{fontsize: "12px", margintop: "-12px"}}> Mon May 08 - Tue May 09 (1 Night) </p>
                            </div>
                            <div className="col-md-2" style={{ marginleft: "100px"}}>
                                <div className="d-flex align-items-center">
                                    <a href="#">view</a>
                                    <i className="fa fa-long-arrow-right" aria-hidden="true" style={{marginleft: "10px"}}></i>
                                </div>
                            </div>
                            </div>

                            <div className="small-box d-flex">
                            <div className="col-md-2 ">
                                <img src={sf3}  width="41" height="40" />

                            </div>
                            <div className="col-md-5">
                                <p style={{fontsize: "12px"}}>Roxana Buck at Blackthron basecamp </p>
                                <p style={{fontsize: "12px", margintop: "-12px"}}> Mon May 08 - Tue May 09 (1 Night) </p>
                            </div>
                            <div className="col-md-2" style={{ marginleft: "100px"}}>
                                <div className="d-flex align-items-center">
                                    <a href="#">view</a>
                                    <i className="fa fa-long-arrow-right" aria-hidden="true" style={{ marginleft: "10px"}}></i>
                                </div>
                            </div>
                            </div>

                            <div className="small-box d-flex">
                            <div className="col-md-2 ">
                                <img src={sf3}  width="41" height="40" />

                            </div>
                            <div className="col-md-5">
                                <p style={{fontsize: "12px"}}>Roxana Buck at Blackthron basecamp </p>
                                <p style={{fontsize: "12px", margintop: "-12px"}}> Mon May 08 - Tue May 09 (1 Night) </p>
                            </div>
                            <div className="col-md-2" style={{ marginleft: "100px"}}>
                                <div className="d-flex align-items-center">
                                    <a href="#">view</a>
                                    <i className="fa fa-long-arrow-right" aria-hidden="true" style={{ marginleft: "10px"}}></i>
                                </div>
                            </div>
                            </div>


                        </div>

                    </div>
                    
                    

                </div>

                <div className="row">
                <div className="col-md-9">
                    <div className="text-4 ">
                        <h4>Campbooka Hosting Tips</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.In ornare mattis orci a dictum. Cras pretium luctus augue, placerat eleifend enim laoreet ac. Aliquam vehicula egestas sollicitudin. Maecenas rhoncus accumsan felis congue pellentesque</p>
                        <div className="d-flex" style={{alignitems: "center"}}>
                        <a href="#" style={{color: "green"}}>View more general Hosting tips</a>
                        <i className="fa fa-long-arrow-right fa-2x" aria-hidden="true" style={{marginleft: "10px", color: "green"}}></i>
                    </div>

                    </div>

                </div>

                <div className="col-md-9">
                    <div className="text-4 ">
                        <h4>Add another property</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.In ornare mattis orci a dictum. Cras pretium luctus augue, placerat eleifend enim laoreet ac. Aliquam vehicula egestas sollicitudin. Maecenas rhoncus accumsan felis congue pellentesque</p>
                        <a href="hostproperty-create.html"  className="btn btn-primary btn-sm" style={{backgroundcolor: "green", color: "white"}}>Create new property</a>

                    </div>

                </div>

                <div className="col-md-9">
                    <div className="text-4 ">
                        <h4>Invite fellow landowners</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.In ornare mattis orci a dictum. Cras pretium luctus augue, placerat eleifend enim laoreet ac. Aliquam vehicula egestas sollicitudin. Maecenas rhoncus accumsan felis congue pellentesque</p>
                        <a  className="btn btn-primary btn-sm" style={{backgroundcolor: "green", color: "white"}}>Refer a landowner</a>

                    </div>

                </div>

                </div>
                <p>need help ? File a Ticket or call us at</p>


                </div>
            </div>
        </div>
    );
}

export default HostProfileLeft;