import './App.css';
import About from './components/About';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import Host from './components/Host';
import CamperSearch from './components/CamperSearch';
import Camperbook from './components/Camperbook';
import Checkout from './components/Checkout';
import Checkout2Page from './components/Checkout2Page';
import Layout from './components/Layout';
import UserDashboard from './components/UserDashboard';
import RequireAuth from './components/RequireAuth';
import HostDashboard from './components/HostDashboard';
import UserEditProfile from './components/UserEditProfile';
import HostPropertyCreate from './components/HostPropertyCreate';

function App() {
  return (
   <>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path="/" element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="host" element={<Host/>}/>
        <Route path='campersearch' element={<CamperSearch />} />
        <Route path='camperbook' element={<Camperbook/>}/>
        <Route path='checkoutrule' element={<Checkout />} />
        <Route path='checkout2' element={<Checkout2Page/>} />
        <Route path='createprop' element={<HostPropertyCreate/>}/>

        <Route element={<RequireAuth />}>
          <Route path='userdashboard' element={<UserDashboard />} />
          <Route path='userProfileEdit' element={<UserEditProfile/>} />
          <Route path='hostdashboard' element={<HostDashboard/>} />
        </Route>
      </Route>     
    </Routes>
   </>
  );
}

export default App;
