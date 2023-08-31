import './PlaceImageSection.css';
import g1 from '../images/g1.png';

function PlaceImageSection() {
    return (
        <div className="container">
            <div className="row" style={{ padding: "20px" }}>
                <div className="col-md-6">
                    <div className="allimg-wrap1">
                        <img src={g1} alt="" />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="row">
                        <div className="col-md-6">
                            <img src={g1} alt="" />
                        </div>
                            <div className="col-md-6">
                                <img src={g1} alt="" />
                            </div>
                            <div className="col-md-6" style={{ marginTop: "15px" }}>
                                <img src={g1} alt="" />
                            </div>
                            <div className="col-md-6" style={{ marginTop: "15px" }}>
                                <img src={g1} alt="" />
                                <a className="view-all-bts" href="">view all</a>
                                <a className="view-all-bts" href="">view all</a>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

            export default PlaceImageSection;