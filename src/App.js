import './App.css';
import About from './components/About';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import Host from './components/Host';
import CamperSearch from './components/CamperSearch';
import Camperbook from './components/Camperbook';

function App() {
  return (
   <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="contact" element={<Contact/>}/>
      <Route path="host" element={<Host/>}/>
      <Route path='campersearch' element={<CamperSearch />} />
      <Route path='camperbook' element={<Camperbook/>}/>
    </Routes>
   </>
  );
}

export default App;
