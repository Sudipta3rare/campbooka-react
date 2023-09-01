import Activities from './Activities';
import './PlaceDescriptionSection.css';
import Features from './Features';

function PlaceDescriptionSection(props) {
    
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-7">
                    <div className="sites-wrap d-flex">
                        <div className="sites">
                            <p>
                                {props.acres} acres
                                <span className="d-block">sites</span>
                            </p>
                        </div>
                    </div>
                    <p className="property-des1">
                        {props.description}
                    </p>
                </div>
                <div className="col-md-5">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="facilites-list">
                                <h5>Activites</h5>
                                <Activities placeId={props.placeId} />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="facilites-list">
                                <h5 style={{marginLeft: "40px"}}> Feature</h5>
                                <Features placeId={props.placeId} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PlaceDescriptionSection;