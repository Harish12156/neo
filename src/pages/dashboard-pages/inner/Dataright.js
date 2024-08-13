import React, { useState } from 'react';

import { CiCalendar } from 'react-icons/ci';

function Dataright() {


    return (
            <div className="dash-trans-sec card dash-card-1 h-100">
                <div className="card-body">
                    <div className='d-flex align-items-center justify-content-between mb-2'>
                        <h5 className='dash-head-1'>Data</h5>
                        <h4 className='fc-y'><CiCalendar /></h4>
                    </div>

  
                </div>
            </div>
    );
}

export default Dataright;
