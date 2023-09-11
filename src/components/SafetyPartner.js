import './SafetyPartner.css';
import Prtn1 from  '../images/p1.png';
import Prtn2 from '../images/p2.png';
import Prtn3 from '../images/p3.png';


function SafetyPartner() {
    return (
        <section className="partner">
      <div className="container">
        <div className="section-head">
          <h3>Safety <span>partners</span></h3>
        </div>
        <div className="partner-wrap">
          <div className="row">
            <div className="col-md-4">
              <div className="partner-wrap-box">
                <img src={Prtn1} alt="" />
                <h4>Recreate Responsibly</h4>
                <p>1. Know before you go</p>
                <p>2. Practice physical distancing</p>
                <p>3. Plan ahead</p>
                <p>4. Play it safe</p>
                <p>5. Explore locally</p>
                <p>6. Leave no trace</p>
                <p>7. Build an inclusive outdoors</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="partner-wrap-box">
                <img src={Prtn2} alt="" />
                <h4>Leave No Trace</h4>
                <p>1. Plan ahead and prepare</p>
                <p>2. Travel and camp on durable surfaces</p>
                <p>3. Dispose of waste properly</p>
                <p>4. Leave what you find</p>
                <p>5. Minimize campfire impacts</p>
                <p>6. Respect wildlife</p>
                <p>7. Be considerate of others</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="partner-wrap-box">
                <img src={Prtn3} alt="" />
                <h4>National Weather Service</h4>
                <p>
                  We integrate with the National Weather Service to provide
                  valuable fire advisories to Hosts and Hipcampers. Real-time
                  Red Flag Warnings and Fire Weather Watch Warnings help keep
                  our community safe.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    );
}

export default SafetyPartner;