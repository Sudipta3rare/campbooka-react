import './PlaceDescriptionSection.css';
function PlaceDescriptionSection() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-7">
                    <div className="sites-wrap d-flex">
                        <div className="sites">
                            <p>
                                95 acres
                                <span className="d-block"> 8 sites</span>
                            </p>
                        </div>
                    </div>
                    <p className="property-des1">
                        95 acres on the beautiful Topisaw Creek. Here we've raised 5 kids and a multitude of dogs, cats and chickens and a small herd of pineywoods cattle. The woods are quiet and undisturbed , harboring native species like jack in the pulpit, trillium and Florida anise. The spring-fed (and thus always refreshing!) Topisaw Creek forms the eastern border of our property, so plan to spend
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