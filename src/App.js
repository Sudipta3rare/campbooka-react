import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import MainForm from './components/MainForm';
import CampingSectionOne from './components/CampingSectionOne';
import CampingSectionTwo from './components/CampingSectionTwo';
import Campsite from './components/Campsite';
import NewTools from './components/NewTools';
import Discover from './components/Discover';
import Places from './components/Places';
import Plan from './components/Plan';
import Gateway from './components/Gateway';
import SectionEndMenu from './components/SectionEndMenu';
import Safety from './components/Safety';
import Footer from './components/Footer';
import About from './components/About';
import InnerBanner from './components/InnerBanner';
import AboutInnerHead from './components/AboutInnerHead';
import AboutBannerPic from './components/AboutBannerPic';
import AboutMessage from './components/AboutMessage';
import AboutUsTexts from './components/AboutUsTexts';
import AboutUstexts2 from './components/AboutUsText2';
function App() {
  return (
   <>
      {/* <header>
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
      <Footer /> */}
      <Navbar></Navbar>
      <InnerBanner></InnerBanner>
      <AboutInnerHead></AboutInnerHead>
      <AboutBannerPic></AboutBannerPic>
      <AboutMessage></AboutMessage>
      <AboutUsTexts></AboutUsTexts>
      <AboutUstexts2></AboutUstexts2>
   </>
  );
}

export default App;
