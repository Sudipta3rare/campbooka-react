import './CampingSectionOne.css';

function CampingSectionOne() {
    return (
        <section className="camping-sec d-none d-lg-block d-md-block d-sm-none">
      <div className="container">
        <div className="camping-content-box1">
          <div className="camping-content-box1-img">
            <img src="images/camping1.png" alt=""/>
          </div>
          <div className="camping-content-box1-text">
            <h3>CAMP<span>BOOKA</span></h3>
            <p>Stay at the best Cambooka across the country.</p>
            <a>Enter to Win</a>
          </div>
        </div>

        <div className="camping-content-box2">
          <div className="camping-content-box2-text">
            <h3>BEST OF<span>2023</span></h3>
            <p>Explore America's best Cambooka to visit in 2023.</p>
            <a>Enter to Win</a>
          </div>
          <div className="camping-content-box2-img">
            <img src="images/camping2.png" alt="" />
          </div>
        </div>
      </div>
    </section>
    );
}

export default CampingSectionOne;