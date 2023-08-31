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
import Footer from './Footer';
import Plan from './Plan';

function Home() {
  return (
    <>
      <header>
        <Navbar />
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
      <Footer />
    </>
  );
}

export default Home;