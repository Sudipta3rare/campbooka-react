import Navbar from './Navbar';
import CampBodyLeft from './CampBodyLeft';
import HostDashboardRight from'./HostDashboardRight';
import { useLocation } from 'react-router-dom';

function HostDashboard() {
    
    const location = useLocation();

    return(
        <>
        <Navbar/>
          <section className="campbody">
                <div className="container">
                    <div className="campbody-wrap">
                        <div className="row">
                            <CampBodyLeft email={location.state.email}/>
                            <HostDashboardRight/>
                        </div>
                    </div>
                </div>
            </section>   
                     
        </>
    )
}

export default HostDashboard;