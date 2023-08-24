import './HostNav.css';
import HostNav from './HostNav';
import HostBanner from './HostBanner';
import HostAbout from './HostAbout';
import HostAboutRight from './HostAboutRight';
import HostAboutLeft from './HostAboutLeft';

function Host() {
    return (
        <>
            <HostNav/>
            <HostBanner/>
            <HostAbout>
                <HostAboutLeft/>
                <HostAboutRight/>
            </HostAbout>
            

        </>
    );
}

export default Host;