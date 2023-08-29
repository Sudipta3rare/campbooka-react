import g1 from '../images/g1.png';

function PlaceImageSection() {
    return (
        <div class="container">
            <div class="row" style={{padding: "20px"}}>
                <div class="col-md-6">
                    <div class="allimg-wrap1">
                        <img src={g1} alt="" />
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="row">
                        <div class="col-md-6">
                            <img src={g1} alt="" />
                        </div>
                        <div class="col-md-6">
                            <img src={g1} alt="" />
                        </div>
                        <div class="col-md-6" style={{margintop: "15px"}}>
                            <img src={g1} alt="" />
                        </div>
                        <div class="col-md-6" style={{margintop: "15px"}}>
                            <img src={g1} alt="" />
                            <a class="view-all-bts" href="">view all</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PlaceImageSection;