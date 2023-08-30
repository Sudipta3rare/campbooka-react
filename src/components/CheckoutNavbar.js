import './CheckoutNavbar.css';
import logo from '../images/logo.png';

function CheckoutNavbar() {
    return (
        <nav style={{backgroundColor: "#a3a8baba"}} className="navbar navbar-expand-md navbar-light ">
            <a className="navbar-brand" href="#">
                CampBooka
                <img width="8%" src={logo} alt="Logo" className="logo-desktop" />
                <img width="8%" src={logo} alt="Logo" className="logo-mobile" />
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
        </nav>
    );
}

export default CheckoutNavbar;