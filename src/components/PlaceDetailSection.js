import './PlaceDetailSection.css';
function PlaceDetailSection(props) {
    return (
        <div className="container" style={{margintop: "20px"}}>
            <h1 className="Property-title">{props.placeName}</h1>
                <div className="btn-gr">
                    <div className="all-btns">
                    <a href="#">
                        see available sites
                    </a>
                    <a href="#" data-toggle="modal" data-target="#exampleModal1" >
                        <i className="fa fa-upload" aria-hidden="true"></i> 
                        share
                    </a>
                    <a href="#">
                        <i className="fa fa-heart" aria-hidden="true"></i>
                        save
                    </a>
                </div>
            </div>
        </div>
    );
}

export default PlaceDetailSection;