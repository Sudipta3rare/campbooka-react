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
        const cookies = new Cookies();
        cookies.remove("JWT");
        cookies.remove("email");
        cookies.remove("role");
        setButtonText("Log In");
        setAuth({});
    }

    useEffect(() => {
        setButtonText(auth?.jwtToken ? "Sign out" : "Sign In / Sign Up");
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