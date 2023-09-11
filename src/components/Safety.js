import './Safety.css';
import Sf1 from '../images/sf1.png';
import Sf2 from '../images/sf2.png';
import Sf3 from '../images/sf3.png';

function Safety() {
    return (
        <section className="safety">
      <div className="container">
        <div className="section-head">
          <h3>Safety at <span>Campbooka</span></h3>
        </div>
        <div className="safety-wrap">
          <div className="row">
            <div className="col-md-4">
              <div className="safety-wrap-box">
                <img src={Sf1} alt="" />
                <h4>Inclusion Policy</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <a href="#">Learn More</a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="safety-wrap-box">
                <img src={Sf2} alt="" />
                <h4>Inclusion Policy</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <a href="#">Learn More</a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="safety-wrap-box">
                <img src={Sf3} alt="" />
                <h4>Inclusion Policy</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <a href="#">Learn More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    );
}

export default Safety;