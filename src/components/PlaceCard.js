import './PlaceCard.css';
import place1 from '../images/place1.png';
import { useNavigate } from 'react-router-dom';

function PlaceCard(props) {

    const navigate = useNavigate();

    const placeCardOnClickHandler = () => {
        navigate("/camperbook", {
            state: {
                placeId: props.placeId,
                placeName: props.placeName,
                acres: props.acres,
                description: props.description
            }
        })
    };

    return (
        <div className="card border-dlt">
            <div className="card-image">
                <figure className="image is-4by3">
                    <a onClick={placeCardOnClickHandler}>
                        <img src={place1} alt=""/>
                    </a>
                </figure>
            </div>
            <div className="card-content">
                <div className="contents">
                    <label>
                        <h4>{props.placeName}</h4>
                    </label>
                    <br/>
                    {props.description}
                    <br/>
                    <small>{props.acres} acres</small>
                </div>
            </div>
        </div>
    );
}

export default PlaceCard;