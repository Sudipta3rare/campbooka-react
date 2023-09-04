import DetailsExpand from "./DetailsExpand";

function AdminSidebar(){
    return(
        <aside id="sidebar" className="sidebar">

        <ul className="sidebar-nav" id="sidebar-nav">
    
          <li className="nav-item">
            <a className="nav-link " href="index.html">
              <i className="bi bi-grid"></i>
              <span>Dashboard</span>
              
            </a>
          </li>
    
          <li className="nav-item">
            <a className="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse" href="#">
              <i className="bi bi-menu-button-wide"></i><span>Details</span><i className="bi bi-chevron-down ms-auto"></i>
            </a>
            <ul id="components-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
              <DetailsExpand data={"Host-Details"}/>
              <DetailsExpand data={"Camper-Details"}/>
              <DetailsExpand data={"Add-Host"}/>
              <DetailsExpand data={"Add-Camper"}/>
              
            </ul>
          </li>
    
          <li className="nav-item">
            <a className="nav-link collapsed" data-bs-target="#forms-nav" data-bs-toggle="collapse" href="#">
              <i className="bi bi-journal-text"></i><span>Reorts</span><i className="bi bi-chevron-down ms-auto"></i>
            </a>
            <ul id="forms-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
              <li>
                <a href="reports.html">
                  <i className="bi bi-circle"></i><span>Payments</span>
                </a>
              </li>
            </ul>
          </li>
    
          <li className="nav-heading">Pages</li>
    
          <li className="nav-item">
            <a className="nav-link collapsed" href="#">
              <i className="bi bi-person"></i>
              <span>Profile</span>
            </a>
          </li>
    
          <li className="nav-item">
            <a className="nav-link collapsed" href="#">
              <i className="bi bi-question-circle"></i>
              <span>Booking-Details</span>
            </a>
          </li>
    
          <li className="nav-item">
            <a className="nav-link collapsed" href="#">
              <i className="bi bi-envelope"></i>
              <span>Contact</span>
            </a>
          </li>
    
          <li className="nav-item">
            <a className="nav-link collapsed" href="#">
              <i className="bi bi-card-list"></i>
              <span>Register</span>
            </a>
          </li>
    
          <li className="nav-item">
            <a className="nav-link collapsed" href="#">
              <i className="bi bi-box-arrow-in-right"></i>
              <span>Login</span>
            </a>
          </li>

        </ul>
    
      </aside>
    )
}

export default AdminSidebar;