import './NewTools.css';
import NewTool1 from '../images/newtools1.png';
import NewTool2 from '../images/newtools2.png';
import NewTool3 from '../images/newtools3.png';
function NewTools() {
    return (
        <section className="newtools">
      <div className="container">
        <div className="section-head">
          <h3>New tools to find <span>yourself outside.</span></h3>
        </div>
        <div className="newtools-wrap">
          <div className="row">
            <div className="col-md-4">
              <div className="newtools-box">
                <img src={NewTool1} alt="" />
                <h4>Stargazing Spots</h4>
                <p>See the International Dark Sky map</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="newtools-box">
                <img src={NewTool2} alt="" />
                <h4>Explore Public Lands</h4>
                <p>NPS, USFS, & BLM maps</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="newtools-box">
                <img src={NewTool3} alt="" />
                <h4>Work From Anywhere</h4>
                <p>Cell service maps</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    );
}

export default NewTools;