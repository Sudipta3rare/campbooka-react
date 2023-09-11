import './Gateway.css';
import Gal1 from '../images/g1.png';
import Gal2 from '../images/g2.png';
import Gal3 from '../images/g3.png';
import Gal4 from '../images/g4.png';
import Gal5 from '../images/g5.png';
import Gal6 from '../images/g6.png';
import Gal7 from '../images/g7.png';
import Gal8 from '../images/g8.png';
import Gal9 from '../images/g9.png';

function Gateway() {
    return (
        <section className="gateway">
            <div className="container">
                <div className="section-head">
                    <h3>Find your <span>next getaway</span></h3>
                </div>

                <div className="gateway-wrap">
                    <div className="gateway-wrap-box">
                        <a href="#"><img src={Gal1} /></a>
                        <div className="gateway-img-content">
                            <h3>Beach Stays</h3>
                            <p>Set up by the water</p>
                        </div>
                    </div>
                    <div className="gateway-wrap-box">
                        <a href="#"><img src={Gal2} /></a>
                        <div className="gateway-img-content">
                            <h3>Lorem</h3>
                            <p>Set up by the water</p>
                        </div>
                    </div>
                    <div className="gateway-wrap-box">
                        <a href="#"><img src={Gal3} /></a>
                        <div className="gateway-img-content">
                            <h3>Lorem</h3>
                            <p>Set up by the water</p>
                        </div>
                    </div>
                    <div className="gateway-wrap-box">
                        <a href="#"><img src={Gal4} /></a>
                        <div className="gateway-img-content">
                            <h3>Lorem</h3>
                            <p>Set up by the water</p>
                        </div>
                    </div>
                    <div className="gateway-wrap-box">
                        <a href="#"><img src={Gal5} /></a>
                        <div className="gateway-img-content">
                            <h3>Lorem</h3>
                            <p>Set up by the water</p>
                        </div>
                    </div>
                    <div className="gateway-wrap-box">
                        <a href="#"><img src={Gal6} /></a>
                        <div className="gateway-img-content">
                            <h3>Lorem</h3>
                            <p>Set up by the water</p>
                        </div>
                    </div>
                    <div className="gateway-wrap-box">
                        <a href="#"><img src={Gal7} /></a>
                        <div className="gateway-img-content">
                            <h3>Lorem</h3>
                            <p>Set up by the water</p>
                        </div>
                    </div>
                    <div className="gateway-wrap-box">
                        <a href="#">
                            <img src={Gal8} />
                        </a>
                        <div className="gateway-img-content">
                            <h3>Lorem</h3>
                            <p>Set up by the water</p>
                        </div>
                    </div>
                    <div className="gateway-wrap-box">
                        <a href="#"><img src={Gal9} /></a>
                        <div className="gateway-img-content">
                            <h3>Lorem</h3>
                            <p>Set up by the water</p>
                        </div>
                    </div>
                </div>

                <div className="gateway-btn">
                    <a href="#">More View</a>
                </div>
            </div>
        </section>
    );
}

export default Gateway;