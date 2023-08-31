import './CamperNavbar.css';
import logo from '../images/logo.png';

function CamperNavbar() {
    return (
        <div className="header-colours">
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light ">
              <a className="navbar-brand" href="#">
                <img src={logo} width="45" height="45" alt="" />
              </a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto" style={{gap: "20px", alignitems: "baseline"}}>
                  <li className="nav-item">
                    <form className="form-inline">
                      <input className="form-control mr-sm-2" type="search" placeholder="Search Dates Guests" aria-label="Search"/>
                      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
                        <i className="fa fa-search"></i>
                      </button>
                    </form>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Host Dashboard
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <a className="dropdown-item" href="hostcalender.html">Calendar</a>
                      <a className="dropdown-item" href="viewproperty.html">Property</a>
                      <a className="dropdown-item" href="#">Extras</a>
                      <a className="dropdown-item" href="#">Insurance</a>
                      <a className="dropdown-item" href="#">Payouts & Taxes</a>
                      <a className="dropdown-item" href="#">Resources</a>
                    </div>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="host-inbox.html">Inbox</a>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <img src={logo} width="45" height="45" alt="" />
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <a className="dropdown-item" href="#">Account</a>
                      <a className="dropdown-item" href="#">Payouts</a>
                      <a className="dropdown-item" href="#">Trips</a>
                      <a className="dropdown-item" href="#">Saves</a>
                      <a className="dropdown-item" href="#">FAQ</a>
                      <a className="dropdown-item" href="#">Logout</a>
                    </div>
                  </li>
                </ul>
              </div>
            </nav>
           </div>
        </div>
    );
}

export default CamperNavbar;