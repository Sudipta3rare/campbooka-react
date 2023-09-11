import Banner from './Banner';
import Navbar from './Navbar';
import MainForm from './MainForm';
import CampingSectionOne from './CampingSectionOne';
import CampingSectionTwo from './CampingSectionTwo';
import Campsite from './Campsite';
import NewTools from './NewTools';
import Discover from './Discover';
import Places from './Places';
import Gateway from './Gateway';
import SectionEndMenu from './SectionEndMenu';
import Safety from './Safety';
import SafetyPartner from './SafetyPartner';
import Footer from './Footer';
import Plan from './Plan';
import OverlayForModal from './OverlayForModal';
import LoginModal from './LoginModal';
import { useState } from 'react';

function Home() {
  const [overlayDisplay, setOverlayDisplay] = useState(false);

  function handleShowModal () {
    setOverlayDisplay(true);
  }

  function handleCloseModal () {
    setOverlayDisplay(false);
  }

  return (
    <>
      <header>
        <Navbar doLogin={ handleShowModal }/>
      </header>
      <Banner />
      <MainForm />
      <CampingSectionOne />
      <CampingSectionTwo />
      <Campsite />
      <NewTools />
      <Discover />
      <Places />
      <Plan />
      <Gateway />
      <SectionEndMenu />
      <Safety />
      <SafetyPartner/>
      <Footer />
      {overlayDisplay && <OverlayForModal />}
      {overlayDisplay && <LoginModal doCloseModal={handleCloseModal}/>}
      
    </>
  );
}

export default Home;