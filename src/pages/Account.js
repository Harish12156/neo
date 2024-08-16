import React from 'react'

import { LazyLoadImage } from 'react-lazy-load-image-component';


import MyWallet from './Account-pages/inner/MyWallet';
import FiatCurrency from './Account-pages/inner/Fiat-Currency';
import Fiattofiat from './Account-pages/inner/Fiattofiat';
import Cryptotofiat from './Account-pages/inner/Cryptotofiat';
import { useLocation } from 'react-router-dom';
import Accounts from './dashboard-pages/Accounts';
import Moneytransfer from './Account-pages/Moneytransfer';


function Account() {
  const location = useLocation();

  return (
    <div className='container-fluid'>
      <div className='row g-4'>

        <div className='col-xl-8'>
          <MyWallet />
          {location.pathname === '/account' && <FiatCurrency />}
          {location.pathname === '/money-transfer' && <Moneytransfer />}
          {location.pathname === '/account-transfer' && <Accounts />}

        </div>


        <div className='col-xl-4  '>
          <div className='cryto-section'>
            <Fiattofiat />
            <Cryptotofiat />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Account
