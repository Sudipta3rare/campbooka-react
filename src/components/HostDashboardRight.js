import './HostDashboardRight.css';
import g1 from '../images/g1.png';
import g3 from '../images/g3.png';
import g4 from '../images/g4.png';

function HostDashboard(){
    return(
        <div className="col-md-8">
            <div className="div2">
              <div className="campbody-right">
                <div className="properties">
                  <h2>Dave's Properties</h2>
                  <div className="img-wrap">
                    <img src={g1} alt="p1" />
                    <img src={g3} alt="p2" />
                    <img src={g4} alt="p3" />
                  </div>
                </div>
                <div className="description">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ornare mattis orci a dictum. Cras pretium luctus augue, placerat eleifend enim laoreet ac. Aliquam vehicula egestas sollicitudin. Maecenas rhoncus accumsan felis congue pellentesque. Mauris et tempor massa. rutrum egestas ipsum in fermentum. Nam aliquet aliquet pellentesque. Sed finibus tincidunt tincidunt. Morbi maximus nibh sed suscipit elementum. Proin sit amet nisl mi. Duis eget lacinia magna. Nunc non rutrum nisi, a convallis ante. Praesent nulla urna, fringilla quis nunc gravida, mattis lacinia risus. Vivamus eu tempus ex.</p>
                  <a href="viewproperty.html" className="btn btn-primary btn-sm btn-2">View Property</a>
                </div>
              </div>
            </div>
            <div className="booking-history">
              <h4>Booking History</h4>
              <div className="table-responsive">
                <table className="table table-striped" width="100%">
                  <thead> 
                    
                    <tr>
                      <th>Image</th>
                      <th>Property Name</th>
                      <th>Booking Date</th>
                      <th>Camper Name</th>
                      <th>Payable Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className="pic">
                          <img src={g4} alt="p1" />
                        </div>
                      </td>
                      <td>Baskervilles</td>
                      <td>19/05/2023</td>
                      <td>Sherlock Holmes</td>
                      <td>$100</td>
                    </tr>
                    <tr>
                      <td>
                        <div className="pic">
                          <img src={g1} alt="p1" />
                        </div>
                      </td>
                      <td>Baskervilles</td>
                      <td>19/05/2023</td>
                      <td>Sherlock Holmes</td>
                      <td>$100</td>
                    </tr>
                    <tr>
                      <td>
                        <div className="pic">
                          <img src={g3} alt="p1" />
                        </div>
                      </td>
                      <td>Baskervilles</td>
                      <td>19/05/2023</td>
                      <td>Sherlock Holmes</td>
                      <td>$100</td>
                    </tr>
                    <tr>
                      <td>
                        <div className="pic">
                          <img src={g4} alt="p1" />
                        </div>
                      </td>
                      <td>Baskervilles</td>
                      <td>19/05/2023</td>
                      <td>Sherlock Holmes</td>
                      <td>$100</td>
                    </tr>
                    <tr>
                      <td>
                        <div className="pic">
                          <img src={g4} alt="p1" />
                        </div>
                      </td>
                      <td>Baskervilles</td>
                      <td>19/05/2023</td>
                      <td>Sherlock Holmes</td>
                      <td>$100</td>
                    </tr>
                    <tr>
                      <td>
                        <div className="pic">
                          <img src={g4} alt="p1" />
                        </div>
                      </td>
                      <td>Baskervilles</td>
                      <td>19/05/2023</td>
                      <td>Sherlock Holmes</td>
                      <td>$100</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="read-more">Read More</div>
            </div>
          </div>


    );
}
export default HostDashboard;