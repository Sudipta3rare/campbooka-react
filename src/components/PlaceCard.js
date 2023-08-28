import './PlaceCard.css';
import place1 from '../images/place1.png';

function PlaceCard() {
    return (
        <div class="card border-dlt">
            <div class="card-image">
                <figure class="image is-4by3">
                    <a href="camperbook.html">
                        <img src={place1} alt=""/>
                    </a>
                </figure>
            </div>
            <div class="card-content">
                <div class="contents">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. <a href="#">@bulmaio</a>. <a href="#">#css</a> <a href="#">#responsive</a>
                    <br/>
                    <small>11:09 PM - 1 Jan 2016</small>
                </div>
            </div>
        </div>
    );
}

export default PlaceCard;