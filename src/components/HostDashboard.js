import Navbar from './Navbar';
import CampBodyLeft from './CampBodyLeft';
import HostDashboardRight from'./HostDashboardRight';

function HostDashboard(){
    return(
        <>
        <Navbar/>
          <section className="campbody">
                <div className="container">
                    <div className="campbody-wrap">
                        <div className="row">
                            <CampBodyLeft/>
                            <HostDashboardRight/>
                        </div>
                    </div>
                </div>
            </section>   
                     
        </>
    )
}

export default HostDashboard;