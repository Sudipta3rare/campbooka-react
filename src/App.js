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

function App() {
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

export default App;
