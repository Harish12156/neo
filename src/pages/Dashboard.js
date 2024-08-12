import React from 'react'
import Transactions from './dashboard-pages/inner/Transactions'
import Actions from './dashboard-pages/inner/Actions'
import Dashboardhome from './dashboard-pages/Dashboardhome'

function Dashboard() {
  return (
    <div className='top-dash-overrall-sec'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-lg-8'>
            <Actions />
            <Dashboardhome />
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
