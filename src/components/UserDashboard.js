import CampBodyLeft from './CampBodyLeft';
import Navbar from './Navbar';
import CampBodyRight from './CampBodyRight';
import { useLocation } from 'react-router-dom';

function UserDashboard() {
    const location = useLocation();

    return (
        <>
            <Navbar />
            <section className="campbody">
                <div className="container">
                    <div className="campbody-wrap">
                        <div className="row">
                            <CampBodyLeft  email={location.state.email} />
                            <CampBodyRight />
                        </div>
                    </div>
                </div>
            </section>
        </>

    );
}
export default UserDashboard;