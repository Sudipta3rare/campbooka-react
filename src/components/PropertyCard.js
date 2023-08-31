import './PropertyCard.css';
import g1 from '../images/g1.png';
import { useNavigate } from 'react-router-dom';

function PropertyCard(props) {

    let reviewCat = '';
    if(props.likePercentage > 85)
      reviewCat = 'Excellent';
    if(props.likePercentage > 65)
      reviewCat = 'Good';
    if(props.likePercentage >= 40)
      reviewCat = 'Moderate';
    if(props.likePercentage < 40)
      reviewCat = 'Needs Improvement';

    const navigate = useNavigate();

    function handleOnClickReserve() {
      navigate("/checkoutrule", {
        state: {
          price: props.price
        }
      });
    }

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
                    <h6>Property name : <span>{props.propertyName}</span></h6>
                    <p className="t1">Property Type : <span>{props.accomodationType}</span> </p>
                    <p className="t2">Area: <span> {props.area} sq-ft</span></p>
                    <p className="t3">Description :<span>{props.description}</span><br/><span>Studio Apartment with Air conditioning</span></p>
                    <p className="t4">Location: <span> Kolkata</span></p>
                    <span className="siTaxiOp">Free airport taxi</span>
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="update-wrap">
                    <div className="siDetails">
                      <div className="siRating"><span>{reviewCat}</span><button>{props.likePercentage}</button></div>
                      <div className="siDetailTexts"><span className="siPrice">${props.price}</span><span className="siTaxOp">Includes taxes
                          and fees</span><a onClick={handleOnClickReserve} className="btn btn-primary btn-sm ">Reserve</a></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    );
}

export default PropertyCard;