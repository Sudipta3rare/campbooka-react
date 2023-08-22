import './AboutMessage.css';

function AboutMessage() {
    return (
        <section style={{background: "#d8cde5"}} class="aboutus-text">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="aboutus-wrap">
                
                <i style={{fontsize: "30px"}} className="fa fa-envelope-open" aria-hidden="true"></i>
                <h3 style={{padding: "20px 0"}}>Welcome Message</h3>
                
                <p>"Welcome to CampBooka, your gateway to unforgettable outdoor adventures! Get ready to immerse yourself in the beauty of the great outdoors and create lasting memories. Start your adventure today with CampBooka, and let the exploration begin!"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default AboutMessage;