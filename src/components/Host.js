import './HostNav.css';
import HostNav from './HostNav';
import HostBanner from './HostBanner';
import HostAbout from './HostAbout';
import HostAboutRight from './HostAboutRight';
import HostAboutLeft from './HostAboutLeft';
import HostWork from './HostWork';
import HostNeed from './HostNeed';
import HostNeedC1Left from './HostNeedC1Left';
import HostNeedC1Right from './HostNeedC1Right';
import HostNeedC2Left from './HostNeedC2Left';
import HostNeedC2Right from './HostNeedC2Right';
import HostNeedC3Left from './HostNeedC3Left';
import HostNeedC3Right from './HostNeedC3Right';
import HostFaq from './HostFaq';

function Host() {
    return (
        <>
            <HostNav/>
            <HostBanner/>
            <HostAbout>
                <HostAboutLeft/>
                <HostAboutRight/>
            </HostAbout>
            <HostWork/>
            <HostNeed>
                <HostNeedC1Left/>
                <HostNeedC1Right/>
                <HostNeedC2Left/>
                <HostNeedC2Right/>
                <HostNeedC3Left/>
                <HostNeedC3Right/>
            </HostNeed>
            <HostFaq/>

        </>
    );
}

export default Host;