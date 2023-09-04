import Navbar from "./Navbar";
import HostProfileRight from "./HostProfileRight";
import HostProfileLeft from "./HostProfileLeft";

function HostProfile(){
    return(
        <>
        <Navbar/>
          <section>
            <div className="section1">
              <div className="container">
                <div className="container-wrap">
                  <div className="row">
                    <HostProfileLeft/>
                    <HostProfileRight/>
                  </div>
                </div>
              </div>
            </div>
          </section> 
        </>

    );
}

export default HostProfile;