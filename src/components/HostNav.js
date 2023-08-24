import './HostNav.css';
import SiteLogo from '../images/logo.png';


function HostNav() {
    return (
        <header class="header-main">
    <nav class="navbar navbar-expand-lg navbar-light nav1 ">
      <a class="navbar-brand" href="#">
        <img src={SiteLogo} alt="Logo" width="50" height="50" />
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link " href="#">Insurance </a>
          </li>
          <li class="nav-item">
            <a class="nav-link " href="#">Professional Campground</a>
          </li>
        </ul>
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="btn btn-primary m-btn1" href="#" data-toggle="modal" data-target="#exampleModalCenter">Login</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
    );
}

export default HostNav;