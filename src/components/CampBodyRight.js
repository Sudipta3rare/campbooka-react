function CampBodyRight(){
    return(
        <div className="col-md-6" style={{margintop: "60px", fontsize: "20px"}}>
            <ul className="nav nav-tabs" role="tablist">
                <li className="nav-item">
                    <a className="nav-link active" href="#profile" role="tab" data-toggle="tab">Trips</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#buzz" role="tab" data-toggle="tab">saves</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#references" role="tab" data-toggle="tab">Reviews</a>
                </li>
            </ul>
        
            <div className="tab-content">
                <div role="tabpanel" className="tab-pane fade in active" id="profile">profile</div>
                <div role="tabpanel" className="tab-pane fade" id="buzz">saves</div>
                <div role="tabpanel" className="tab-pane fade" id="references">Reviews</div>
            </div>
        </div>
    )
}

export default CampBodyRight;