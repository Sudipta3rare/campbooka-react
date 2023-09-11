import './Campsite.css';
import CampImg from '../images/campsite-img.png';
function Campsite() {
    return (
        <section className="campsite">
            <div className="container">
                <div className="section-head">
                <h3>Get ready for the 2024 <span>total solar eclipse.</span></h3>
                <p>Find a spot to camp along the path of totality.</p>
                </div>
                <div className="campsite-image">
                <img src={CampImg} alt="" />
                <a href="#">Find a campsite</a>
                </div>
            </div>
        </section>
    );
}

export default Campsite;