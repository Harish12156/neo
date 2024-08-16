import React, { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Swipe1 from '../assets/images/dashboard/card/swipe-1.png';
import Swipe3 from '../assets/images/dashboard/card/swipe-3.png';
import Favicon from '../assets/images/dashboard/card/favicon.png';
import VisaInc from '../assets/images/dashboard/card/Visa_Inc._logo.png';
import Master from '../assets/images/dashboard/card/master.png';
import illustration from "../assets/images/card/Illustration.png";

function Card() {

  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const toggleOffcanvas = () => {
    setShowOffcanvas(!showOffcanvas);
  };

  return (
    <div className='card-section'>
      <div className='card-section-one'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-lg-4'>
              <div className='mycard-section border-0 p-3 rounded-3 position-relative'>
                <h6 className='fw-semibold'>My Card</h6>
                <div className='d-flex align-items-center flex-column py-3 gap-3'>
                  <div>
                    <div className='card h-100 dash-swipe-card-1' style={{ backgroundImage: `url(${Swipe1})` }}>
                      <div className='card-body'>
                        <div className='d-flex flex-column justify-content-between h-100'>
                          <div className='d-flex flex-row gap-2 align-items-center'>
                            <LazyLoadImage alt={`Favicon`} src={Favicon} className='dash-card-img-1' />
                            <span className='dash-card-txt-1'>Rempic Pay Bank</span>
                          </div>
                          <div className='d-flex flex-column mt-0 mt-md-4'>
                            <span>**** **** **** 1690</span>
                            <div className='d-flex flex-row'>
                              <h5 className='mb-0'>Platinum Plus</h5>
                              <span className='ms-auto'>Exp 01/22</span>
                            </div>
                          </div>
                          <div className='d-flex flex-row align-items-center'>
                            <h5 className='mb-0'>Sunny Aveiro</h5>
                            <LazyLoadImage alt={`VisaInc`} src={VisaInc} className='dash-card-img-2 ms-auto' />
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                  <div>
                    <div className='card h-100 dash-swipe-card-1' style={{ backgroundImage: `url(${Swipe3})` }}>
                      <div className='card-body'>
                        <div className='d-flex flex-column justify-content-between h-100'>
                          <div className='d-flex flex-row gap-2 align-items-center'>
                            <LazyLoadImage alt={`Favicon`} src={Favicon} className='dash-card-img-1' />
                            <span className='dash-card-txt-1'>Dutch Bangla Bank</span>
                          </div>
                          <div className='d-flex flex-column'>
                            <span>**** **** **** 1690</span>
                            <div className='d-flex flex-row'>
                              <h5 className='mb-0'>Platinum Plus</h5>
                              <span className='ms-auto'>Exp 01/22</span>
                            </div>
                          </div>
                          <div className='d-flex flex-row align-items-center'>
                            <h5 className='mb-0'>Sunny Aveiro</h5>
                            <LazyLoadImage alt={`Master`} src={Master} className='dash-card-img-2 ms-auto' style={{ height: "40px" }} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
