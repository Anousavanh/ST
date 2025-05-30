import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home';
import STWA from './pages/stwa/stwa.jsx';
import STV from './pages/stv/stv.jsx';
import Stwareserve from './pages/stwa/reserve/reserve.jsx';
import Stvreserve from './pages/stv/reserve/reserve.jsx';
import Stwaroom from './pages/stwa/room/room.jsx';
import './index.css';

function TitleAndFaviconUpdater() {
  const location = useLocation();
  
  useEffect(() => {
    const path = location.pathname;
    let title, favicon;
    
    if (path === '/') {
      title = 'ST GROUP';
      favicon = '/favicon-stgroup.ico';
    } else if (path.startsWith('/stwa')) {
      title = 'ST Hotel Wattay Airport';
      favicon = '/stwa/HotelLogo.png';
    } else if (path.startsWith('/stv')) {
      title = 'ST Vegas';
      favicon = '/stv/Logo.png';
    }
    
    // เปลี่ยน title
    document.title = title;
    
    // เปลี่ยน favicon
    let link = document.querySelector("link[rel*='icon']");
    if (!link) {
      link = document.createElement('link');
      link.rel = 'shortcut icon';
      document.getElementsByTagName('head')[0].appendChild(link);
    }
    link.href = favicon;
  }, [location]);
  
  return null;
}

function App() {
  return (
    <Router>
      <TitleAndFaviconUpdater />
      <div className="min-h-screen bg-gray-50">
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/stwa" element={<STWA />} />
            <Route path="/stv" element={<STV />} />
            <Route path="/stwa/reserve" element={<Stwareserve />} />
            <Route path="/stv/reserve" element={<Stvreserve />} />
            <Route path="/stwa/room" element={<Stwaroom />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;