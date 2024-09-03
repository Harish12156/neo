import React, { useContext } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../../assets/images/Logo_rempic_swan.png';
import Logoicon from '../../assets/images/Logo_rempic_icon.png';
import Dashboard from '../../assets/images/side-nav/dashboard.png';
import Dashboardw from '../../assets/images/side-nav/dashboard-w.png';
import Account from '../../assets/images/side-nav/account.png';
import Accountw from '../../assets/images/side-nav/account-w.png';
import Card from '../../assets/images/side-nav/card.png';
import Cardw from '../../assets/images/side-nav/card-w.png';
import Transactions from '../../assets/images/side-nav/transactions.png';
import Transactionsw from '../../assets/images/side-nav/transactions-w.png';
import Crypto from '../../assets/images/side-nav/crypto.png';
import Cryptow from '../../assets/images/side-nav/crypto-w.png';
import Portfolio from '../../assets/images/side-nav/portfolio.png';
import Portfoliow from '../../assets/images/side-nav/portfolio-w.png';
import Setting from '../../assets/images/side-nav/setting.png';
import Settingw from '../../assets/images/side-nav/setting-w.png';
import Signout from '../../assets/images/side-nav/sign-out.png';
import DataContext from '../../context/DataContext';
import { RxCross1 } from "react-icons/rx";

function Sidenav() {
  const { isOpen, setIsOpen, setIsLogedIn } = useContext(DataContext);
  const location = useLocation();
  const currentYear = new Date().getFullYear();

  const toggleClick = () => {
    setIsOpen(false);
  };

  const toggleLogin = () => {
    setIsLogedIn(false);
  };

  const isDashboardActive = () => {
    const dashboardRoutes = ['/','/send','/receive','/accounts','/goals','/data'];
    return dashboardRoutes.includes(location.pathname);
  };

  const isAccountActive = () => {
    const accountRoutes = ['/account', '/money-transfer', '/account-transfer'];
    return accountRoutes.includes(location.pathname);
  };

  const getLinkClass = (path) => {
    if (isDashboardActive() && path === '/') {
      return 'list-item-side active-page-root-css';
    }
    if (isAccountActive() && path === '/account') {
      return 'list-item-side active-page-root-css';
    }
    return location.pathname === path ? 'list-item-side active-page-root-css' : 'list-item-side';
  };


  const getIcon = (defaultIcon, activeIcon, path) => {
    if (isDashboardActive() && path === '/') {
      return activeIcon;
    }
    if (isAccountActive() && path === '/account') {
      return activeIcon;
    }
    return location.pathname === path ? activeIcon : defaultIcon;
  };

  
  return (
    <div className={`top-left-side-nav-banner ${isOpen ? 'side-open-width' : 'side-close-width'}`}>
      <div className='pt-3 d-flex flex-column h-100'>
        <div>
          <div className='text-end d-md-none mb-2'>
            <button className='mobile-sidenav-close' onClick={toggleClick}><RxCross1/></button>
          </div>
          <div className='text-center'>
            <Link to="/" className=''>
              <LazyLoadImage alt="Logo" src={isOpen ? Logo : Logoicon} className='side-nav-logo' />
            </Link>
          </div>

          <ul className='mt-2 d-flex flex-column list-item-top-sec'>
            <Link to="/" className={getLinkClass('/')}>
              <LazyLoadImage
                alt="Dashboard"
                src={getIcon(Dashboard, Dashboardw, '/')}
                className='side-text-1'
              />
              <span className='hides-when-close'>Dashboard</span>
            </Link>

            <Link to="/account" className={getLinkClass('/account')}>
              <LazyLoadImage
                alt="Account"
                src={getIcon(Account, Accountw, '/account')}
                className='side-text-1'
              />
              <span className='hides-when-close'>Account</span>
            </Link>

            <Link to="/card" className={getLinkClass('/card')}>
              <LazyLoadImage
                alt="Card"
                src={getIcon(Card, Cardw, '/card')}
                className='side-text-1'
              />
              <span className='hides-when-close'>Card</span>
            </Link>

            <Link to="/transactions" className={getLinkClass('/transactions')}>
              <LazyLoadImage
                alt="Transactions"
                src={getIcon(Transactions,Transactionsw, '/transactions')}
                className='side-text-1'
              />
              <span className='hides-when-close'>Transactions</span>
            </Link>

            <Link to="/crypto" className={getLinkClass('/crypto')}>
              <LazyLoadImage
                alt="Crypto"
                src={getIcon(Crypto, Cryptow, '/crypto')}
                className='side-text-1'
              />
              <span className='hides-when-close'>Crypto</span>
            </Link>

            <Link to="/portfolio" className={getLinkClass('/portfolio')}>
              <LazyLoadImage
                alt="Portfolio"
                src={getIcon(Portfolio, Portfoliow, '/portfolio')}
                className='side-text-1'
              />
              <span className='hides-when-close'>My Portfolio</span>
            </Link>

            <Link to="/setting" className={getLinkClass('/setting')}>
              <LazyLoadImage
                alt="Setting"
                src={getIcon(Setting, Settingw, '/setting')}
                className='side-text-1'
              />
              <span className='hides-when-close'>Setting</span>
            </Link>

          </ul>
        </div>

        <div className='mt-auto'>
          <button className="list-item-side justify-content-center list-item-side-logout mb-1" onClick={toggleLogin}>
            <LazyLoadImage
              alt="Dashboard"
              src={Signout}
              className='side-text-1'
            />
            <span className='hides-when-close'>Logout</span>
          </button>
          <p className='side-logout-text-1'>©{currentYear}All Rights Reserved</p>
        </div>

      </div>
    </div>
  );
}


export default Sidenav;
