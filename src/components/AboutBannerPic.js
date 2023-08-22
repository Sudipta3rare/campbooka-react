import './AboutBannerPic.css';
import camp1pic from '../images/camp1.avif';
import camp2pic from '../images/camp2.avif';
import camp3pic from '../images/camp3.avif';

function AboutBannerPic() {
    return (
        <section className="banner-pic">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="aboutus-pic1">
                <img src={camp1pic} alt="pic-1"/>
              </div>
            </div>
            <div className="col-md-4">
              <div className="aboutus-pic1">
                <img src={camp2pic} alt="pic-1"/>
              </div>
            </div>
            <div className="col-md-4">
              <div className="aboutus-pic1">
                <img src={camp3pic} alt="pic-1"/>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default AboutBannerPic;