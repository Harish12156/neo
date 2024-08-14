import './App.css';
import './assets/css/style.css';
import './assets/css/demo.css';

import './assets/css/var.css';
import Sidenav from './pages/common/Sidenav';
import Dashboard from './pages/Dashboard';
import ScrollToTop from './ScrollToTop';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useContext, useEffect } from 'react';
import DataContext from './context/DataContext';
import NavbarOne from './pages/common/NavbarOne';
import Account from './pages/Account';
import Card from './pages/Card';
import Transactions from './pages/Transactions';
import Crypto from './pages/Crypto';
import Portfolio from './pages/Portfolio';
import Setting from './pages/Setting';
import Profile from './pages/Profile';
import Receive from './pages/dashboard-pages/Receive';
import Cryptoinner from './pages/Cryptoinner';


function App() {
  const { isOpen, setIsOpen } = useContext(DataContext);
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 1050px)');
    const handleMediaQueryChange = (e) => {
      if (e.matches) {
        setIsOpen(false);
      } else {
        setIsOpen(true);
      }
    };
    handleMediaQueryChange(mediaQuery);
    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);
  return (
    <>
      <Router>
        <Sidenav />

        <div className={`top-web-sec ${isOpen ? 'side-open-padleft' : 'side-close-padleft'}`}>
          <NavbarOne />
          <ScrollToTop />
          <Routes>
            <Route exact path="/" element={<Dashboard />} />
            <Route exact path="/send" element={<Dashboard />} />
            <Route exact path="/receive" element={<Dashboard />} />
            <Route exact path="/accounts" element={<Dashboard />} />
            <Route exact path="/goals" element={<Dashboard />} />
            <Route exact path="/data" element={<Dashboard />} />
            <Route exact path="/account" element={<Account />} />
            <Route exact path="/money-transfer" element={<Account />} />
            <Route exact path="/account-transfer" element={<Account />} />
            <Route exact path="/card" element={<Card />} />
            <Route exact path="/transactions" element={<Transactions />} />
            <Route exact path="/crypto" element={<Crypto />} />
            <Route exact path="/portfolio" element={<Portfolio />} />
            <Route exact path="/setting" element={<Setting />} />
            <Route exact path="/profile" element={<Profile />} />
            <Route exact path="/cryptoinner" element={<Cryptoinner />} />

            <Route exact path="*" element={<p>ERROR 404</p>} />
          </Routes>

        </div>
      </Router>
    </>
  );
}

export default App;
