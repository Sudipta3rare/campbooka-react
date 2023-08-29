import g1 from '../images/g1.png';

function PropertyCard() {
    return (
        <div class="col-md-12" style={{padding: "25px"}}>
            <div class="viewproperty-wrap-box">
              <div class="row align-items-center">
                <div class="col-md-3">
                  <div class="pic-wrap">
                    <img src={g1} alt="camp1"/>
                  </div>
                </div>
                <div class="col-md-7">
                  <div class="des-wrap">
                    <h6>Property name : <span>Baskervilles </span></h6>
                    <p class="t1">Property Type : <span>Tiny Cottage</span> </p>
                    <p class="t2">Area: <span> 400 sq-ft</span></p>
                    <p class="t3">Description :<span> Entire studio • 1 bathroom • 21m² 1 full
                        bed</span><br/><span>Studio Apartment with Air conditioning</span></p>
                    <p class="t4">Location: <span> Kolkata</span></p>
                    <span class="siTaxiOp">Free airport taxi</span>
                  </div>
                </div>
                <div class="col-md-2">
                  <div class="update-wrap">
                    <div class="siDetails">
                      <div class="siRating"><span>Excellent</span><button>8.9</button></div>
                      <div class="siDetailTexts"><span class="siPrice">$112</span><span class="siTaxOp">Includes taxes
                          and fees</span><a href="checkoutrule.html" class="btn btn-primary btn-sm ">Reserve</a></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    );
}

export default PropertyCard;