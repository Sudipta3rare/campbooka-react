
function Discover() {
    return (
        <section className="discover">
      <div className="container">
        <div className="section-head">
          <h3>Discover top <span>spots near you</span></h3>
        </div>
        <div className="discover-wrap">
          <div className="row">
            <div className="col-md-4">
              <div className="discover-box">
                <img src="images/discover1.png" alt="" />
                <h4>Available Tonight</h4>
              </div>
            </div>
            <div className="col-md-4">
              <div className="discover-box">
                <img src="images/discover2.png" alt="" />
                <h4>Available This Weekend</h4>
              </div>
            </div>
            <div className="col-md-4">
              <div className="discover-box">
                <img src="images/discover3.png" alt="" />
                <h4>Available Next Weekend</h4>
              </div>
            </div>
          </div>
          <div className="row second-row">
            <div className="col-md-4">
              <div className="discover-box">
                <img src="images/discover4.png" alt="" />
                <h4>Camping Near Me</h4>
              </div>
            </div>
            <div className="col-md-4">
              <div className="discover-box">
                <img src="images/discover5.png" alt="" />
                <h4>Glamping Near Me</h4>
              </div>
            </div>
            <div className="col-md-4">
              <div className="discover-box">
                <img src="images/discover6.png" alt="" />
                <h4>RV Sites Near Me</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    );
}

export default Discover;