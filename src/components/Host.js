import './HostNav.css';
import HostNav from './HostNav';
import HostBanner from './HostBanner';
import HostAbout from './HostAbout';
import HostAboutRight from './HostAboutRight';
import HostAboutLeft from './HostAboutLeft';
import OverlayForModal from './OverlayForModal';
import LoginModal from './LoginModal';
import { useState } from 'react';

function Host() {
    const [overlayDisplay, setOverlayDisplay] = useState(false);

    function handleShowModal() {
        setOverlayDisplay(true);
    }

    function handleCloseModal() {
        setOverlayDisplay(false);
    }

    return (
        <>
            <HostNav doLogin={ handleShowModal } />
            <HostBanner />
            <HostAbout>
                <HostAboutLeft />
                <HostAboutRight />
            </HostAbout>
            {overlayDisplay && <OverlayForModal />}
            {overlayDisplay && <LoginModal doCloseModal={handleCloseModal}/>}

        </>
    );
}

export default Host;