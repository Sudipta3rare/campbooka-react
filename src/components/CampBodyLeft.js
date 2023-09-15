import './CampBodyLeft.css';
import sf3 from '../images/sf3.png';

function CampBodyLeft(props) {

  return (
    <div className="col-md-4">
      <div className="campbody-left">
        <div className="campbody-left-box" style={{ margintop: "60px" }}>
          <div className="dava">
            <img src={sf3} width="60" height="60" alt="img" />
            <div className="img-left">
              <h3>{props.data?.name}</h3>
            </div>
          </div>
          <div className="img-bellow">
            <div className="d-flex align-items-baseline">
              <i className="fa fa-heart" aria-hidden="true"></i>
              <p>{props.data?.joinDate}</p>
            </div>
            <div className="d-flex align-items-baseline">
              <i className="fa fa-map-marker" aria-hidden="true"></i>
              <p style={{ marginleft: "10px" }}>{props.data?.city}</p>
            </div>
            <p style={{ marginleft: "10px" }} >{props.data?.bio}</p>
            <a href="userProfileEdit">Edit profile</a>
          </div>
        </div>
      </div>

      <div className="campbody-left-box2" >
        <div className="connect">
          <div className="box-1">

            <p>Trusted Campbooka</p>
            <div className="d-flex align-items-baseline " >
              <i className="fa fa-check" aria-hidden="true"></i>
              <p className="p4" >{props.data?.email}</p>
            </div>

            
          </div>
          <div className="box-2">
          <p>Facebook</p>
            <button className="btn btn-primary btn-sm btn-2">+Connect</button>
          </div>
        </div>
      </div>
      <div className="campbody-left-box3">
        <div className="d-flex">
          <div className="doller">$0</div>
          <p className="p1">Balance</p>
          <p className="p2">Earn cash</p>
        </div>
      </div>
      <div>
        <div className="campbody-left-box4">
          <div className="d-flex ok3">
            <a href="#"><i className="fa fa-plus" aria-hidden="true"></i></a>
            <p>Continue building out your camp pofile by adding places </p>
          </div>
        </div>
      </div>
    </div>

  )
}
export default CampBodyLeft;