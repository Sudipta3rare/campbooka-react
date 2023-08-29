import './PlaceCard.css';
import place1 from '../images/place1.png';

function PlaceCard(props) {
    return (
        <div className="card border-dlt">
            <div className="card-image">
                <figure className="image is-4by3">
                    <a href="camperbook.html">
                        <img src={place1} alt=""/>
                    </a>
                </figure>
            </div>
            <div className="card-content">
                <div className="contents">
                    {props.description}
                    <br/>
                    <small>{props.acres}</small>
                </div>
            </div>
        </div>
    );
}

export default PlaceCard;