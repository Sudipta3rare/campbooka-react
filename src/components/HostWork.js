import "./HostWork.css";
import work from "../images/discover4.png";



function HostWork (){

    return(
        <section className="works">
      <div className="container">
        <h2>How Campbooka Works in 3 steps</h2>
        <div className="works-img">
        <div className="row">
            <div className="col-md-4">
            <div className="works-wrap ">
              <img src={work} alt="logo"/>
              <p><span>Its Free
                </span>Starting a listing is completely free and easy—it only takes minutes from start to publish.
              </p>
            </div>
            </div>
            <div className="col-md-4">
              <div className="works-wrap ">
                <img src={work} alt="logo"/>
                <p><span>Its Free
                </span>Starting a listing is completely free and easy—it only takes minutes from start to publish.
              </p>
              </div>
              </div>
  
              <div className="col-md-4">
                <div className="works-wrap ">
                  <img src={work} alt="logo"/>
                  <p><span>Its Free
                </span>Starting a listing is completely free and easy—it only takes minutes from start to publish.
              </p>
                </div>
                </div></div>
          

          </div>
        </div>
    </section>
    );
}
export default HostWork;