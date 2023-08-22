import './About.css';
import Navbar from './Navbar';
import InnerBanner from './InnerBanner';
import AboutInnerHead from './AboutInnerHead';
import AboutBannerPic from './AboutBannerPic';
import AboutMessage from './AboutMessage';
import AboutUsTexts from './AboutUsTexts';
import AboutUstexts2 from './AboutUsText2';

function About() {
    return (
        <>
            <Navbar />
            <InnerBanner />
            <AboutInnerHead />
            <AboutBannerPic />
            <AboutMessage />
            <AboutUsTexts />
            <AboutUstexts2 />
        </>
    );
}

export default About;