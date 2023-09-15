import './HostDashboardRight.css';
import g1 from '../images/g1.png';
import g3 from '../images/g3.png';
import g4 from '../images/g4.png';
import BookingHistory from './BookingHistory';

function HostDashboard(props) {
  return (
    <div className="col-md-8">
      <div className="div2">
        <div className="campbody-right">
          <div className="properties">
            <h2>{props.hostname}'s Properties</h2>
            <div className="img-wrap">
              <img src={g1} alt="p1" />
              <img src={g3} alt="p2" />
              <img src={g4} alt="p3" />
            </div>
          </div>
          <div className="description">
            <a href="viewproperty.html" className="btn btn-primary btn-sm btn-2">View Property</a>
          </div>
          <BookingHistory/>
        </div>
      </div>
    </div>
  );
}
export default HostDashboard;