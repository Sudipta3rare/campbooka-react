import CampBodyLeft from './CampBodyLeft';
import Navbar from './Navbar';
import CampBodyRight from './CampBodyRight';

function UserDashboard() {
    return(
        <>
            <Navbar/>
            <section className="campbody">
                <div className="container">
                    <div className="campbody-wrap">
                        <div className="row">
                            <CampBodyLeft/>
                            <CampBodyRight/>
                        </div>
                     </div>
                </div>
            </section>
        </>         
        
    );
}
export default UserDashboard;