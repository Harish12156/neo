import React from 'react';
import Transactions from './dashboard-pages/inner/Transactions';
import Actions from './dashboard-pages/inner/Actions';
import Dashboardmain from './dashboard-pages/Dashboardmain';
import { useLocation } from 'react-router-dom';
import Send from './dashboard-pages/Send';
import Receive from './dashboard-pages/Receive';
import Accounts from './dashboard-pages/Accounts';

function Dashboard() {
  const location = useLocation();

  return (
    <div className='top-dash-overrall-sec'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-lg-8'>
            <Actions />
            {location.pathname === '/' && <Dashboardmain />}
            {location.pathname === '/send' && <Send />}
            {location.pathname === '/receive' && <Receive />}
            {location.pathname === '/accounts' && <Accounts />}
          </div>
          <div className='col-lg-4'>
            <Transactions />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
