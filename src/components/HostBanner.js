import './HostBanner.css';
import HostBanner1 from '../images/mimage.jpg';
function HostBanner() {
    return(
        <section class="hero">
        <div class="container-wrap">
          <img height="400px" width="100%" src={HostBanner1} className="cover-pic"/>
        </div>
    </section>
    );
}

export default HostBanner;