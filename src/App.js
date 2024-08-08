import './App.css';
import './assets/css/style.css';
import Sidenav from './pages/common/Sidenav';
import Home from './pages/Home';
import ScrollToTop from './ScrollToTop';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useContext, useEffect } from 'react';
import DataContext from './context/DataContext';
import NavbarOne from './pages/common/NavbarOne';

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

        <div className={` ${isOpen ? 'side-open-padleft' : 'side-close-padleft'}`}>
          <NavbarOne />
          <ScrollToTop />
          <Routes>
            <Route exact path="/" element={<Home />} />
          </Routes>

        </div>
      </Router>
    </>
  );
}

export default App;
