import './Discover.css';
import dis1 from '../images/discover1.png';
import dis2 from '../images/discover2.png';
import dis3 from '../images/discover3.png';
import dis4 from '../images/discover4.png';
import dis5 from '../images/discover5.png';
import dis6 from '../images/discover6.png';



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
                <img src={dis1} alt="" />
                <h4>Available Tonight</h4>
              </div>
            </div>
            <div className="col-md-4">
              <div className="discover-box">
                <img src={dis2} alt="" />
                <h4>Available This Weekend</h4>
              </div>
            </div>
            <div className="col-md-4">
              <div className="discover-box">
                <img src={dis3} alt="" />
                <h4>Available Next Weekend</h4>
              </div>
            </div>
          </div>
          <div className="row second-row">
            <div className="col-md-4">
              <div className="discover-box">
                <img src={dis4} alt="" />
                <h4>Camping Near Me</h4>
              </div>
            </div>
            <div className="col-md-4">
              <div className="discover-box">
                <img src={dis5} alt="" />
                <h4>Glamping Near Me</h4>
              </div>
            </div>
            <div className="col-md-4">
              <div className="discover-box">
                <img src={dis6} alt="" />
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