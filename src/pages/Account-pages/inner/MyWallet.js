import React from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md';
import { BsBank2, BsPersonBoundingBox } from 'react-icons/bs';
import Swipe2 from '../../../assets/images/dashboard/card/swipe-2.png';
import { PiCaretDownFill, PiCaretUpFill } from 'react-icons/pi';
import { Link, useLocation } from 'react-router-dom';

function MyWallet() {
  const location = useLocation();

  return (
    <>
      <div className="card dash-card-1">
        <div className="card-body">
          <div className='row g-4 align-items-center'>
            <div className='col-xl-5 text-center'>
              <h5 className='dash-acco-txt-1'>My Wallet</h5>
            </div>
            <div className='col-xl-6'>
              <div className='card h-100 dash-swipe-card-1' style={{ backgroundImage: `url(${Swipe2})` }}>
                <div className='card-body'>
                  <div className='d-flex flex-column justify-content-between h-100'>
                    <h5 className='mb-0'>Current Balance</h5>
                    <div className='d-flex flex-row align-items-center py-4'>
                      <span className='dash-card-txt-2'>$3,567.12</span>
                      <button className='dash-acco-btn-1 ms-auto'><span>+</span></button>
                    </div>
                    <div className='d-flex flex-row align-items-center'>
                      <h5 className='mb-0 d-flex gap-2 align-items-center'>
                        <PiCaretUpFill style={{ color: "#40D861" }} />14.32%
                      </h5>
                      <h5 className='mb-0 ms-auto d-flex gap-2'>USD <PiCaretDownFill /></h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='row align-items-center cryto-section mt-5'>
            <div className='col-6 col-md-4'>
              <Link 
                to="/money-transfer" 
                className={`link-btn w-100 ${location.pathname === "/money-transfer" ? "dash-actions-active" : ""}`}
              >
                <BsPersonBoundingBox className='arrow-right ms-0 me-2 ' />
                Money Transfer
                <MdKeyboardArrowRight className='arrow-right ms-auto' />
              </Link>
            </div>
            <div className='col-6 col-md-4'>
              <Link 
                to="/account-transfer" 
                className={`link-btn w-100 ${location.pathname === "/account-transfer" ? "dash-actions-active" : ""}`}
              >
                <BsBank2 className='arrow-right ms-0 me-2' />
                Account Transfer 
                <MdKeyboardArrowRight className='arrow-right ms-auto' />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MyWallet;
