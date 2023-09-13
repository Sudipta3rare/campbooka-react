import './HostNav.css';
import SiteLogo from '../images/logo.png';


function HostNav(props) {

    return (
        <header className="header-main">
    <nav className="navbar navbar-expand-lg navbar-light nav1 ">
      <a className="navbar-brand" href="#">
        <img src={SiteLogo} alt="Logo" width="50" height="50" />
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link " href="#">Insurance </a>
          </li>
          <li className="nav-item">
            <a className="nav-link " href="#">Professional Campground</a>
          </li>
        </ul>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <button className="btn btn-primary m-btn1" data-toggle="modal" data-target="#exampleModalCenter" onClick={ props.doLogin }>
              Login
            </button>
          </li>
        </ul>
      </div>
    </nav>
  </header>
    );
}

export default HostNav;