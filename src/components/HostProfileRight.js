function HostProfileRight(){
    return(
        <div className="col-md-4" style={{margintop: "200px"}}>
            <h5>Hosting stats</h5>
            <div className="earn"> 
                <h5 style={{margintop: "-10px"}}>Earnings</h5>
                <h5 style={{margintop: "21px", marginbottom: "20px", fontweight: "700",
                fontsize: "25px"}}>$129666.30</h5>
                <div className="d-flex align-items-center">
                    <a href="#">Last payout $93.60</a>
                    <i className="fa fa-long-arrow-right" aria-hidden="true" style={{marginleft: "10px"}}></i>
                </div>
            </div> 
        </div>
    );
}

export default HostProfileRight;