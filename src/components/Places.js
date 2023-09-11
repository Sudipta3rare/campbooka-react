import './Places.css';
import Place1 from '../images/place1.png';
import Place2 from '../images/place2.png';
import Place3 from '../images/place3.png';



function Places() {
    return (
        <section className="places">
      <div className="container">
        <div className="section-head">
          <h3>
            campbooka is the simplest way to <br />
            <span>find yourself outside</span>
          </h3>
        </div>
        <div className="places-wrap-sec">
          <div className="places-wrap1 d-none d-lg-block d-md-block d-sm-none">
            <div className="row">
              <div className="col-md-6">
                <div className="places-wrap-img">
                  <img src={Place1} alt="" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="place-wrap-text">
                  <h2>01</h2>
                  <h4>Unlock new access to unexpected places.</h4>
                  <p>
                    Easily book secluded outdoor tent sites, RV sites, and
                    glamping stays on private lands from blueberry farms to
                    lake-side yurts.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="places-wrap1 d-block d-sm-block d-md-none d-lg-none">
            <div className="row">
              <div className="col-md-6">
                <div className="place-wrap-text">
                  <h2>01</h2>
                  <h4>Unlock new access to unexpected places.</h4>
                </div>
              </div>
              <div className="col-md-6">
                <div className="places-wrap-img">
                  <img src={Place1} alt="" />
                  <p>
                    Easily book secluded outdoor tent sites, RV sites, and
                    glamping stays on private lands from blueberry farms to
                    lake-side yurts.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="places-wrap2 d-none d-lg-block d-md-block d-sm-none">
            <div className="row">
              <div className="col-md-6">
                <div className="place-wrap-text">
                  <h2>02</h2>
                  <h4>Discover unique outdoor experiences.</h4>
                  <p>
                    Relax in an outdoor sauna, explore hidden swimming holes, do
                    yoga with the goats, and eat wood-fired pizza under the
                    stars.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="places-wrap-img">
                  <img src={Place2} alt="" />
                </div>
              </div>
            </div>
          </div>

          <div className="places-wrap2 d-block d-sm-block d-md-none d-lg-none">
            <div className="row">
              <div className="col-md-6">
                <div className="place-wrap-text">
                  <h2>02</h2>
                  <h4>Discover unique outdoor experiences.</h4>
                </div>
              </div>
              <div className="col-md-6">
                <div className="places-wrap-img">
                  <img src={Place2} alt="" />
                  <p>
                    Relax in an outdoor sauna, explore hidden swimming holes, do
                    yoga with the goats, and eat wood-fired pizza under the
                    stars.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="places-wrap1 d-none d-lg-block d-md-block d-sm-none">
            <div className="row">
              <div className="col-md-6">
                <div className="places-wrap-img">
                  <img src={Place3} alt="" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="place-wrap-text">
                  <h2>03</h2>
                  <h4>Protect our wild places.</h4>
                  <p>
                    By booking with Hipcamp, you're funding the protection of
                    open spaces and supporting the people who support the land.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="places-wrap1 d-block d-sm-block d-md-none d-lg-none">
            <div className="row">
              <div className="col-md-6">
                <div className="place-wrap-text">
                  <h2>03</h2>
                  <h4>Protect our wild places.</h4>
                </div>
              </div>
              <div className="col-md-6">
                <div className="places-wrap-img">
                  <img src={Place3} alt="" />
                  <p>
                    By booking with Hipcamp, you're funding the protection of
                    open spaces and supporting the people who support the land.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    );
}

export default Places;