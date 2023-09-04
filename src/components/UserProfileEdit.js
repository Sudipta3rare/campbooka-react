 import './UserProfileEdit.css';
//  import serviceBg from '../images/banner-pic2.jpg';

function UserProfileEdit(){
    return(
        <section className="service-wrap">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="privacy-sec">
                <nav>
                  <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <a
                      className="nav-item nav-link active"
                      id="nav-mobile-tab"
                      data-toggle="tab"
                      href="#nav-mobile"
                      role="tab"
                      aria-controls="nav-mobile"
                      aria-selected="true"
                      >Edit Pofile</a
                    >
                    <a
                      className="nav-item nav-link"
                      id="nav-front-end-tab"
                      data-toggle="tab"
                      href="#nav-front-end"
                      role="tab"
                      aria-controls="nav-front-end"
                      aria-selected="false"
                      >Email & SMS</a
                    >
                    <a
                      className="nav-item nav-link"
                      id="nav-database-tab"
                      data-toggle="tab"
                      href="#nav-database"
                      role="tab"
                      aria-controls="nav-database"
                      aria-selected="false"
                      >Change password</a
                    >
  
                    <a
                      className="nav-item nav-link"
                      id="nav-database-tab3"
                      data-toggle="tab"
                      href="#nav-database3"
                      role="tab"
                      aria-controls="nav-database"
                      aria-selected="false"
                      >Logout</a
                    >
                  </div>
                </nav>
              </div>
            </div>
            <div className="col-md-8">
              <div className="tab-content" id="nav-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="nav-mobile"
                  role="tabpanel"
                  aria-labelledby="nav-mobile-tab"
                >
                  <div className="service-box">
                    <div className="image-upload">
                      <h4>Edit your pofile</h4>
                      <div className="d-flex align-items-center">
                        <i className="fa fa-lock" aria-hidden="true"></i>
                        <p style={{margin: "15px"}}>Personal Information</p>
                      </div>
                      <div style={{marginbottom: "25px"}} className="p-image">
                        <p>Pofile picture</p>
                        <i className="fa fa-camera upload-button"></i>
                        <input className="file-upload" type="file" accept="image/*" />
                      </div>
                      <form className="rd-mailform1">
                        <div className="row">
                          <div className="col-sm-12">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="First Name"
                                required
                              />
                            </div>
                          </div>
                          <div className="col-sm-12">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Middle Name"
                              />
                            </div>
                          </div>
                          <div className="col-sm-12">
                            <div className="row">
                              <div className="col-md-12">
                                <div className="form-group">
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Last Name"
                                    required
                                  />
                                </div>
                              </div>
                              <div className="col-md-12">
                                <div className="form-group">
                                  <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Email Address"
                                    required
                                  />
                                </div>
                              </div>
                              <div className="col-md-12">
                                <div className="form-group">
                                  <input
                                    className="form-control"
                                    placeholder="Facebook"
                                    required
                                  />
                                  <a
                                    href="#"
                                    className="btn btn-primary btn-sm btn-2 facebook"
                                    >Connect</a
                                  >
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
  
                        <div className="row">
                          <div className="col-sm-12">
                            <div className="d-flex align-items-center">
                              <i className="fa fa-lock" aria-hidden="true"></i>
                              <p style={{margin: "15px"}}>Contact Information</p>
                            </div>
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Street address"
                                required
                              />
                            </div>
                          </div>
                          <div className="col-sm-12">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Apt or suite no"
                              />
                            </div>
                          </div>
                          <div className="col-sm-12">
                            <div className="row">
                              <div className="col-md-12">
                                <div className="form-group">
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="City"
                                    required
                                  />
                                </div>
                              </div>
                              <div className="col-md-12">
                                <div className="form-group">
                                  <input
                                    type="email"
                                    className="form-control"
                                    placeholder="State"
                                    required
                                  />
                                </div>
                              </div>
                              <div className="col-md-12">
                                <div className="form-group">
                                  <input
                                    className="form-control"
                                    placeholder="Zip code"
                                    required
                                  />
                                </div>
                              </div>
                              <div className="col-md-12">
                                <div className="form-group">
                                  <input
                                    className="form-control"
                                    placeholder="Phone number"
                                    required
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
  
                        <div className="row">
                          <div className="col-sm-12">
                            <p style={{margintop: "29px"}}>
                              How you publicly appear on this site
                            </p>
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Camper URL"
                                required
                              />
                            </div>
                          </div>
                          <div className="col-sm-12">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Bio"
                              />
                            </div>
                          </div>
                          <div className="col-sm-12">
                            <div className="row">
                              <div className="col-md-12">
                                <div className="form-group">
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Public Location"
                                    required
                                  />
                                </div>
                              </div>
                              <div className="col-md-12">
                                <div className="form-group">
                                  <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Personal URL"
                                    required
                                  />
                                </div>
                              </div>
                              <div className="col-md-12">
                                <div className="form-group">
                                  <input
                                    className="form-control"
                                    placeholder="Instagram Handle"
                                    required
                                  />
                                </div>
                              </div>
                              <div className="col-md-12">
                                <div className="form-group">
                                  <input
                                    className="form-control"
                                    placeholder="Twitter Handle"
                                    required
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
  
                        <button
                          className="contact_submit_btn btn btn-primary btn-sm btn-2"
                          type="submit"
                        >
                          Save Change
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
  
                <div
                  className="tab-pane fade"
                  id="nav-front-end"
                  role="tabpanel"
                  aria-labelledby="nav-front-end-tab"
                >
                  <div className="service-box">
                    <div className="service-box-details">
                      <h2>Email and SMS</h2>
                      <div className="d-flex align-items-center edit">
                        <i className="fa fa-envelope-o fa-x" aria-hidden="true"></i>
  
                        <h5>Optional Communication from the CampBooka Team</h5>
                      </div>
                      <form className="form-1" action="/action_page.php">
                        <input
                          type="checkbox"
                          id="vehicle1"
                          name="vehicle1"
                          value="Bike"
                        />
                        <label for="vehicle1"> Personalized Recommendation</label
                        ><br />
                        <p>sent to share</p>
                        <input
                          type="checkbox"
                          id="vehicle2"
                          name="vehicle2"
                          value="Car"
                        />
                        <label for="vehicle2">
                          Exclusive offers,news and tips </label
                        ><br />
                        <p>sent 1-2 times every few months</p>
                        <input
                          type="checkbox"
                          id="vehicle3"
                          name="vehicle3"
                          value="Boat"
                        />
                        <label for="vehicle3"> New Feature announcements</label
                        ><br />
                        <p>sent 1-4 times a year</p>
                        <input
                          type="checkbox"
                          id="vehicle1"
                          name="vehicle1"
                          value="Bike"
                        />
                        <label for="vehicle1"> Feedback and surveys</label><br />
                        <p>sent</p>
                        <input
                          type="checkbox"
                          id="vehicle2"
                          name="vehicle2"
                          value="Car"
                        />
                        <label for="vehicle2"> Safety tips and reminders </label
                        ><br />
                        <p>sent when we have important safety info or feedback</p>
                        <br />
                      </form>
                    </div>
  
                    <div className="service-box-details">
                      <div className="d-flex align-items-center edit-1">
                        <i className="fa fa-envelope-o fa-x" aria-hidden="true"></i>
                        <i
                          style={{marginleft: "20px"}}
                          className="fa fa-mobile fa-2x"
                          aria-hidden="true"
                        ></i>
                        <h5>Camp Experience Communication</h5>
                      </div>
                      <form className="form-2" action="/action_page.php">
                        <input
                          type="checkbox"
                          id="vehicle1"
                          name="vehicle1"
                          value="Bike"
                        />
                        <label for="vehicle1"> New messages</label><br />
                        <p>sent every time you receive a message</p>
                        <input
                          type="checkbox"
                          id="vehicle1"
                          name="vehicle1"
                          value="Bike"
                        />
                        <label for="vehicle1">Booking request notification</label
                        ><br />
                        <p>
                          sent every time an update to a booking request is made
                        </p>
                        <input
                          type="checkbox"
                          id="vehicle1"
                          name="vehicle1"
                          value="Bike"
                        />
                        <label for="vehicle1">
                          Booking confirmation notification</label
                        ><br />
                        <p>
                          sent every time you received or make a confirmed booking
                        </p>
                        <input
                          type="checkbox"
                          id="vehicle2"
                          name="vehicle2"
                          value="Car"
                        />
                        <label for="vehicle2">
                          Booking cancellation and modification notification </label
                        ><br />
                        <p>
                          sent every time you received or make a confirmed booking
                        </p>
                        <input
                          type="checkbox"
                          id="vehicle3"
                          name="vehicle3"
                          value="Boat"
                        />
                        <label for="vehicle3">Booking reminder notification</label
                        ><br />
                        <p>sent before your booking starts</p>
                        <input
                          type="checkbox"
                          id="vehicle1"
                          name="vehicle1"
                          value="Bike"
                        />
                        <label for="vehicle1">
                          Review trip reminder notification</label
                        ><br />
                        <p>
                          one text message and up to 4 emails sent after every
                          trip
                        </p>
                        <input
                          type="checkbox"
                          id="vehicle2"
                          name="vehicle2"
                          value="Car"
                        />
                        <label for="vehicle2"> Account support </label><br />
                        <p>
                          we may need to send you message regarding your camp
                          account
                        </p>
                        <br />
                        <button
                          style={{marginleft: "395px"}}
                          className="btn btn-primary btn-sm btn-2"
                        >
                          Save change
                        </button>
                      </form>
                    </div>
                  </div>
  
                  <div className="other" style={{margintop: "50px"}}>
                    <div className="d-flex align-items-center others">
                      <i className="fa fa-envelope-o fa-x" aria-hidden="true"></i>
                      <i
                        style={{marginleft: "20px"}}
                        className="fa fa-mobile fa-2x"
                        aria-hidden="true"
                      ></i>
                      <h5>Other System Communication you may receive</h5>
                    </div>
  
                    <div className="notifiaction">
                      <p>
                        Referal notification
                        <span
                          >sent every time you earn or are given referal
                          credit</span
                        >
                      </p>
                      <p>
                        Invited to trip notification
                        <span
                          >sent every time a fellow camper invite on their
                          upcoming Trips</span
                        >
                      </p>
                      <p>
                        Gift card notification
                        <span
                          >sent every time you send or receive a camp gift
                          card</span
                        >
                      </p>
                      <p>
                        Camper photographer notification
                        <span
                          >send when new assignments become available in your
                          area</span
                        >
                      </p>
                      <p>
                        Forget your password notifiaction
                        <span
                          >sent every time you earn or are given referal
                          credit</span
                        >
                      </p>
                    </div>
                  </div>
                </div>
  
                <div
                  className="tab-pane fade"
                  id="nav-database"
                  role="tabpanel"
                  aria-labelledby="nav-database-tab"
                >
                  <div className="service-box">
                    <div className="forget-form-sec-tab">
                      <div className="container">
                        <form className="rd-mailform1">
                          <div className="row">
                            <div className="rd-mailform1-wrap">
                              <div className="col-md-12">
                                <div className="form-group">
                                  <h4>Update Password !</h4>
                                  <div className="input-container d-flex">
                                    <input
                                      type="password"
                                      className="form-control"
                                      placeholder="Current Password"
                                      required
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-12">
                                <div className="form-group">
                                  <div className="input-container d-flex">
                                    <input
                                      type="password"
                                      className="form-control"
                                      placeholder="New Password"
                                      required
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-12">
                                <div className="form-group">
                                  <div className="input-container d-flex">
                                    <input
                                      type="password"
                                      className="form-control"
                                      placeholder="Confirm New Password"
                                      required
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="text-center">
                                <button
                                  className="contact_submit_btn btn"
                                  type="submit"
                                >
                                  Submit
                                </button>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
  
                <div
                  className="tab-pane fade"
                  id="nav-database3"
                  role="tabpanel"
                  aria-labelledby="nav-database-tab3"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default UserProfileEdit;