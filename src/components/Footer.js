function Footer() {
    return (
        <footer className="footer-main">
            <div className="container">
                <div className="footer-logo">
                    <a href="index.html"><img src="./images/logo.png" alt="" /></a>
                </div>
                <div className="footer-top">
                    <div className="footer-wrap">
                        <div className="row">
                            <div className="col-md-3">
                                <h4>Contact Us</h4>
                                <ul className="footer-contact">
                                    <li>
                                        <i className="fa fa-map-marker" aria-hidden="true"></i
                                        ><a href="#">123 Our Address</a>
                                    </li>
                                    <li>
                                        <i className="fa fa-phone" aria-hidden="true"></i
                                        ><a href="tel:0433355558">0433355558</a>
                                    </li>
                                    <li>
                                        <i className="fa fa-envelope" aria-hidden="true"></i
                                        ><a href="mailto:info@blackthorn.com"
                                        >info@blackthorn.com</a
                                        >
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-3">
                                <ul className="footer-menu">
                                    <li><a href="#">About Us</a></li>
                                    <li><a href="#">Careers</a></li>
                                    <li><a href="#">Journal</a></li>
                                    <li><a href="#">Gift cards</a></li>
                                    <li><a href="#">Contact</a></li>
                                    <li><a href="#">Hipcamper FAQ</a></li>
                                </ul>
                            </div>
                            <div className="col-md-3">
                                <ul className="footer-menu">
                                    <li><a href="#">Hosting</a></li>
                                    <li><a href="#">Becoming a Host</a></li>
                                    <li><a href="#">Is My Land a Fit?</a></li>
                                    <li><a href="#">Insurance</a></li>
                                    <li><a href="#">Standards</a></li>
                                    <li><a href="#">Hosting FAQ</a></li>
                                </ul>
                            </div>
                            <div className="col-md-3">
                                <ul className="footer-menu">
                                    <li>
                                        <a href="#"><img src="images/f1.png" alt="" /></a>
                                    </li>
                                    <li>
                                        <a href="#"><img src="images/f2.png" alt="" /></a>
                                    </li>
                                    <li>
                                        <p>SEE OUR CUSTOM ITEMS ON</p>
                                        <a href="#"><img src="images/f3.png" alt="" /></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <ul className="quick-link">
                        <li><a href="#">Near Me</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Earn Hipcash</a></li>
                        <li><a href="#">Start hosting</a></li>
                        <li><a href="#">Log in</a></li>
                    </ul>
                    <div className="copyright">
                        <p>
                            Copyright © 2023 All Rights Reserved. Designed by
                            <a href="http://3raredesigns.com/">3 Rare Design</a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;