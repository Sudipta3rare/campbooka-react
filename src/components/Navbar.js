import './Navbar.css';
import SiteLogo from '../images/logo.png'
import useAuth from '../hooks/useAuth';
import Cookies from 'universal-cookie';
import { useEffect, useState } from 'react';

function Navbar(props) {
    const { auth, setAuth } = useAuth();
    const [buttonText, setButtonText] = useState('');
    const [collapsed, setCollapsed] = useState(true);

    function doLogout() {
        new Cookies().remove("JWT");
        setButtonText("Log In");
        setAuth({});
    }

    useEffect(() => {
        setButtonText(auth?.jwtToken ? "Log out" : "Log In");
    }, []);

    return (
        <div className="header-bottom">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-dark">
                    <a className="navbar-brand">
                        <img src={SiteLogo} alt=""/>
                    </a>
                    <button
                        onClick={() => setCollapsed(!collapsed)}
                        className={collapsed ? "navbar-toggler collapsed": "navbar-toggler"}
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded={collapsed ? "false" : "true" }
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className={collapsed ? "collapse navbar-collapse": "collapse navbar-collapse show"} id="navbarSupportedContent">
                        <ul className="navbar-nav">
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle"
                                    href="#"
                                    id="navbarDropdown"
                                    role="button"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false">
                                    Near Me
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-md-3">
                                                <span className="text-uppercase">Best camping near me</span>
                                                <ul className="nav flex-column">
                                                    <li className="nav-item">
                                                        <a className="nav-link active" href="#">
                                                            <img src="images/tent.png" alt="" />Tent
                                                            Camping Near Me
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link" href="#">
                                                            <img src="images/car.png" alt="" />RV parks
                                                            near me
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link" href="#">
                                                            <img src="images/glamp.png" alt="" />Glamping
                                                            near me
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link" href="#">
                                                            <img src="images/beach.png" alt="" /> Beach
                                                            camping near me
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link" href="#"
                                                        ><img src="images/lake.png" alt="" /> Lake
                                                            camping near me</a
                                                        >
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-md-3">
                                                <span className="text-uppercase">Near Me</span>
                                                <ul className="nav flex-column">
                                                    <li className="nav-item">
                                                        <a className="nav-link active" href="#">Menu1</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link" href="#">Menu2</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link" href="#">Menu3</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link" href="#">Menu4</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link" href="#">Menu5</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link" href="#">Menu6</a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-md-3">
                                                <span className="text-uppercase">Near Me</span>
                                                <ul className="nav flex-column">
                                                    <li className="nav-item">
                                                        <a className="nav-link active" href="#">Menu1</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link" href="#">Menu2</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link" href="#">Menu3</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link" href="#">Menu4</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link" href="#">Menu5</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link" href="#">Menu6</a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-md-3">
                                                <span className="text-uppercase">Near Me</span>
                                                <ul className="nav flex-column">
                                                    <li className="nav-item">
                                                        <a className="nav-link active" href="#">Menu1</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link" href="#">Menu2</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link" href="#">Menu3</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link" href="#">Menu4</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link" href="#">Menu5</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link" href="#">Menu6</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link" href="about"> About Us </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="contact">Contact</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="Host">Become a Host</a>
                            </li>
                            <li className="nav-item">
                                <button
                                    className="nav-link menu-btn"
                                    data-toggle="modal"
                                    data-target="#exampleModalCenter"
                                    onClick={auth?.jwtToken ? doLogout : props.doLogin}>
                                        { buttonText }
                                </button>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default Navbar;