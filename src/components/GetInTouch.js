import './GetInTouch.css'

function GetInTouch() {
    return(
        
        <div class="col-lg-6">
             <div class="contact-wrap">
  
              <h3 class="send-header">Send us a Message   <i style={{fontsize: "30px" }} class="fa fa-envelope-open" aria-hidden="true"></i> </h3>
              
              <form id="contact_form" action="">
                  <div class="row">
                      <div class="col-md-6">
                          <div class="form-group name">
                              <input type="text" name="name" class="form-control" placeholder="Name" aria-label="Full Name"/>
                          </div>
                      </div>
                      <div class="col-md-6">
                          <div class="form-group email">
                              <input type="email" name="email" class="form-control" placeholder="Email Address" aria-label="Email Address"/>
                          </div>
                      </div>
                      <div class="col-md-6">
                          <div class="form-group subject">
                              <input type="text" name="subject" class="form-control" placeholder="Subject" aria-label="Subject"/>
                          </div>
                      </div>
                      <div class="col-md-6">
                          <div class="form-group number">
                              <input type="text" name="phone" class="form-control" placeholder="Phone" aria-label="Phone Number"/>
                          </div>
                      </div>
                      <div class="col-md-12">
                          <div class="form-group message">
                              <textarea  class="form-control" rows="4" name="message" placeholder="Write message" aria-label="Write message"></textarea>
                          </div>
                      </div>
                      <div class="col-md-12">
                          <div class="text-center">
                            <a href="#" class="form-control" id="sub">Submit</a>
                          </div>
                      </div>
                  </div>
              </form>
             </div>
             
            </div>
    );

}

export default GetInTouch;