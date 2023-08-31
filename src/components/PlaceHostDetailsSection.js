import './PlaceHostDetailsSection.css';
import sf3 from '../images/sf3.png';

function PlaceHostDetailsSection() {
    return (
        <section className='host-details'>
            <div className="container">
            <div className="pof-wrap d-flex">
                <img src={sf3} alt="" />
                    <p>Hosted by David <span className="d-block">Joined in August 2018</span></p>
            </div>

            <a href="#" data-toggle="modal" data-target="#exampleModal">Connect Host</a>
        </div>
        </section>
        

    );
}

export default PlaceHostDetailsSection;