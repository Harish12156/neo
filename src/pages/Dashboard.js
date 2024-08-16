import React from 'react';
import Transactions from './dashboard-pages/inner/Transactions';
import Actions from './dashboard-pages/inner/Actions';
import Dashboardmain from './dashboard-pages/Dashboardmain';
import { useLocation } from 'react-router-dom';
import Send from './dashboard-pages/Send';
import Receive from './dashboard-pages/Receive';
import Accounts from './dashboard-pages/Accounts';
import Goals from './dashboard-pages/Goals';
import Data from './dashboard-pages/Data';
import Dataright from './dashboard-pages/inner/Dataright';

function Dashboard() {
  const location = useLocation();

  return (
    <div className='top-dash-overrall-sec'>
      <div className='container-fluid'>
        <div className='row g-4'>
          <div className='col-xl-8'>
            <Actions />
            {location.pathname === '/' && <Dashboardmain />}
            {location.pathname === '/send' && <Send />}
            {location.pathname === '/receive' && <Receive />}
            {location.pathname === '/accounts' && <Accounts />}
            {location.pathname === '/goals' && <Goals />}
            {location.pathname === '/data' && <Data />}
          </div>
          <div className='col-xl-4'>
            {location.pathname === '/data' ? <Dataright /> : <Transactions />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
