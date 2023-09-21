import HostPropertyCreateLeft from "./HostPropertyCreateLeft";
import HostPropertyCreateRight from "./HostPropertyCreateRight";
import Navbar from "./Navbar";

function HostPropertyCreate(){
    return(
            <>
                <Navbar/>
                <section>
                    <div className="property">
                        <div className="container">
                            <div className="row justify-content-center">
                                <HostPropertyCreateRight/>
                             </div>
                        </div>
                    </div>
                </section>
            </>
    );
}

export default HostPropertyCreate;