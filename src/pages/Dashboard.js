import React from 'react'
import Transactions from './dashboard-pages/inner/Transactions'
import Actions from './dashboard-pages/inner/Actions'
import Dashboardmain from './dashboard-pages/Dashboardmain'
import { useLocation } from 'react-router-dom';

function Dashboard() {
  const location = useLocation();

  return (
    <div className='top-dash-overrall-sec'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-lg-8'>
            <Actions />
            {location.pathname === '/' && <Dashboardmain />}
            {location.pathname === '/send' && <p >send</p>}

          </div>
          <div className='col-lg-4'>
            <Transactions />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
