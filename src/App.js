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
import Mainbanner from './pages/home/Mainbanner';
import Footer from './pages/home/Footer';
import Type from './pages/home/Type';
import Signin from './pages/home/Signin';
import Business from './pages/home/Business';
import Signup from './pages/home/Signup';
import Kycdocuments from './pages/home/Kycdocuments';
import Accountsection from './pages/home/Accountsection';
import Useraccountform from './pages/home/Useraccountform/Useraccountform';



function App() {
  const { isOpen, setIsOpen, isLogedIn, setIsLogedIn } = useContext(DataContext);
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
        <NavbarOne />

        {isLogedIn ?
          <div className={`top-web-sec ${isOpen ? 'side-open-padleft' : 'side-close-padleft'}`}>
            <Sidenav />
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

          </div> :
          <>
            <Routes>
              <Route exact path="/" element={
                <>
                  <Mainbanner />
                  <Footer />
                </>
              } />
              <Route exact path="/type" element={<Type />} />
              <Route exact path="/signin" element={<Signin />} />
              <Route exact path="/business" element={<Business />} />
              <Route exact path="/signup" element={<Signup />} />
              <Route exact path="/kycdocuments" element={<Kycdocuments />} />
              <Route exact path="/accountsection" element={<Accountsection />} />
              <Route exact path="/useraccountform" element={<Useraccountform />} />

              <Route exact path="*" element={<p className='bef-login-home-sec'>ERROR 404</p>} />

            </Routes>

          </>
        }
      </Router>
    </>
  );
}

export default App;
