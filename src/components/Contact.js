import './About.css';
import Navbar from './Navbar';
import InnerBanner from './InnerBanner';
import GetInTouch from './GetInTouch';
import GetInTouch2 from './GetInTouch2';
import ContactUsContainer from './ContactUsContainer';

function Contact() {
    return (
        <>
            <Navbar />
            <InnerBanner data={"Contact Us"} />
            <ContactUsContainer>
                <GetInTouch />
                <GetInTouch2 />
            </ContactUsContainer>

        </>
    );
}

export default Contact;