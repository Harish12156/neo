import React, { useContext } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/Logo_rempic_swan.png';
import DataContext from '../../context/DataContext';

function Sidenav() {
  const { isOpen } = useContext(DataContext);

  return (
    <div className={`top-left-side-nav-banner ${isOpen ? 'side-open-width' : 'side-close-width'}`}>
      <Link to="/">
        <LazyLoadImage alt="Logo" src={Logo} className='img-fluid' />
      </Link>
    </div>
  );
}

export default Sidenav;
