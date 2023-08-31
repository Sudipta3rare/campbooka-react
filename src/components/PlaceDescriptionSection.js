import './PlaceDescriptionSection.css';
function PlaceDescriptionSection() {
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
                                <h5 > Activites</h5>
                                <ul>
                                    <li>
                                        <i className="fa fa-tree" aria-hidden="true"></i>
                                        Fishing
                                    </li>
                                    <li>
                                        <i className="fa fa-tree" aria-hidden="true"></i>
                                        Fishing
                                    </li>
                                    <li><i className="fa fa-tree" aria-hidden="true"></i>
                                        Fishing</li>
                                    <li><i className="fa fa-tree" aria-hidden="true"></i>
                                        Fishing</li>
                                    <li><i className="fa fa-tree" aria-hidden="true"></i>
                                        Fishing</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="facilites-list">
                                <h5 style={{marginleft: "40px"}}> Feature</h5>
                                <ul>
                                    <li>
                                        <i className="fa fa-tree" aria-hidden="true"></i>
                                        Fishing
                                    </li>
                                    <li>
                                        <i className="fa fa-tree" aria-hidden="true"></i>
                                        Fishing
                                    </li>
                                    <li><i className="fa fa-tree" aria-hidden="true"></i>
                                        Fishing</li>
                                    <li><i className="fa fa-tree" aria-hidden="true"></i>
                                        Fishing</li>
                                    <li><i className="fa fa-tree" aria-hidden="true"></i>
                                        Fishing</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PlaceDescriptionSection;