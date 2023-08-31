import './PropertyCard.css';
import g1 from '../images/g1.png';

function PropertyCard() {
    return (
        <div className="col-md-12" style={{padding: "25px"}}>
            <div className="viewproperty-wrap-box">
              <div className="row align-items-center">
                <div className="col-md-3">
                  <div className="pic-wrap">
                    <img src={g1} alt="camp1"/>
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="des-wrap">
                    <h6>Property name : <span>Baskervilles </span></h6>
                    <p className="t1">Property Type : <span>Tiny Cottage</span> </p>
                    <p className="t2">Area: <span> 400 sq-ft</span></p>
                    <p className="t3">Description :<span> Entire studio • 1 bathroom • 21m² 1 full
                        bed</span><br/><span>Studio Apartment with Air conditioning</span></p>
                    <p className="t4">Location: <span> Kolkata</span></p>
                    <span className="siTaxiOp">Free airport taxi</span>
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="update-wrap">
                    <div className="siDetails">
                      <div className="siRating"><span>Excellent</span><button>8.9</button></div>
                      <div className="siDetailTexts"><span className="siPrice">$112</span><span className="siTaxOp">Includes taxes
                          and fees</span><a href="checkoutrule.html" className="btn btn-primary btn-sm ">Reserve</a></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    );
}

export default PropertyCard;