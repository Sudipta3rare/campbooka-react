import './GetInTouch.css'

function GetInTouch() {
    return(
        
        <div className="col-lg-6">
             <div className="contact-wrap">
  
              <h3 className="send-header">Send us a Message   <i style={{fontsize: "30px" }} className="fa fa-envelope-open" aria-hidden="true"></i> </h3>
              
              <form id="contact_form" action="">
                  <div className="row">
                      <div className="col-md-6">
                          <div className="form-group name">
                              <input type="text" name="name" className="form-control" placeholder="Name" aria-label="Full Name"/>
                          </div>
                      </div>
                      <div className="col-md-6">
                          <div className="form-group email">
                              <input type="email" name="email" className="form-control" placeholder="Email Address" aria-label="Email Address"/>
                          </div>
                      </div>
                      <div className="col-md-6">
                          <div className="form-group subject">
                              <input type="text" name="subject" className="form-control" placeholder="Subject" aria-label="Subject"/>
                          </div>
                      </div>
                      <div className="col-md-6">
                          <div className="form-group number">
                              <input type="text" name="phone" className="form-control" placeholder="Phone" aria-label="Phone Number"/>
                          </div>
                      </div>
                      <div className="col-md-12">
                          <div className="form-group message">
                              <textarea  className="form-control" rows="4" name="message" placeholder="Write message" aria-label="Write message"></textarea>
                          </div>
                      </div>
                      <div className="col-md-12">
                          <div className="text-center">
                            <a href="#" className="form-control" id="sub">Submit</a>
                          </div>
                      </div>
                  </div>
              </form>
             </div>
             
            </div>
    );

}

export default GetInTouch;