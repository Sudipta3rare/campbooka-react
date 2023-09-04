
function HostPropertyCreateLeft(){
    return(
            <div className="col-md-3"> 
                <div className="left-wrap">
                    <div className="overview">
                        <h4>Overview</h4>
                        <a href=""> photos </a>
                        <a href="#name">property name</a>
                        <a href="#description">Description</a>
                        <a href="#acres1">Acres</a>
                        <a href="#website">website</a>
                    </div>
                    <div className="admin">
                        <h4>Admin</h4>
                        <a href="#ins1"> Insurance </a>
                        <a href="#id">Id verification </a>
                        <a href="#payout">payouts</a>
                        <a href="#verify">Taxes</a>
                    </div>
                    <div className="location">
                        <h4>Location</h4>
                        <a href="#address">Address</a>
                        <a href="#verify">Verify Entrance</a>
                    </div>
                    <div className="rules">
                        <h4>Rules & Policy</h4> 
                        <a href="#rules">Covid Certification</a>
                    </div>
                </div>
            </div>
    );
}
export default HostPropertyCreateLeft;