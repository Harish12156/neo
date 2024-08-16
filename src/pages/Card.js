import React, { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Swipe1 from '../assets/images/dashboard/card/swipe-1.png';
import Swipe3 from '../assets/images/dashboard/card/swipe-3.png';
import Favicon from '../assets/images/dashboard/card/favicon.png';
import VisaInc from '../assets/images/dashboard/card/Visa_Inc._logo.png';
import Master from '../assets/images/dashboard/card/master.png';
import illustration from "../assets/images/card/Illustration.png";
import { RxCross2 } from "react-icons/rx";
import Add from '../assets/images/dashboard/account/add.png';

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
              <div className='card h-100 mycard-section border-0 p-3 rounded-3 position-relative'>
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
                            <span className='dash-card-txt-1-1'>**** **** **** 1690</span>
                            <div className='d-flex flex-row'>
                              <h5 className='mb-0 dash-card-txt-1-2'>Platinum Plus</h5>
                              <span className='ms-auto dash-card-txt-1-2'>Exp 01/22</span>
                            </div>
                          </div>
                          <div className='d-flex flex-row align-items-center'>
                            <h5 className='mb-0 dash-card-txt-1'>Sunny Aveiro</h5>
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
                            <span className='dash-card-txt-1-1'>**** **** **** 1690</span>
                            <div className='d-flex flex-row'>
                              <h5 className='mb-0 dash-card-txt-1-2'>Platinum Plus</h5>
                              <span className='ms-auto dash-card-txt-1-2'>Exp 01/22</span>
                            </div>
                          </div>
                          <div className='d-flex flex-row align-items-center'>
                            <h5 className='mb-0 dash-card-txt-1'>Sunny Aveiro</h5>
                            <LazyLoadImage alt={`Master`} src={Master} className='dash-card-img-2 ms-auto' style={{ height: "40px" }} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <button className="btn addcard-btn" type="button" onClick={toggleOffcanvas}>
                      + Add Card
                    </button>


                    <div
                      className={`offcanvas offcanvas-bottom rounded-3 ${showOffcanvas ? 'show' : ''}`}
                      id="offcanvasBottom"
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: showOffcanvas ? '100%' : '0px',  // Apply height: 100% only when opened
                        border: 'none'
                      }}
                      aria-labelledby="offcanvasBottomLabel"
                    >
                      <div className="offcanvas-header pb-0">
                        <button
                          type="button"
                          className="btn-close-red ms-auto"
                          onClick={toggleOffcanvas}
                          aria-label="Close"
                        ><RxCross2 /></button>
                      </div>

                      <div className="offcanvas-body pt-0">
                        <div className="text-center">
                          <LazyLoadImage alt="Add" src={Add} width={90} />
                          <h6 style={{ color: "var(--color-1)" }} className='fw-semibold'>Add New Card</h6>
                        </div>

                        <form className='mt-4'>
                          <div className="mb-3">
                            <label className="form-label">Cardholder Name</label>
                            <input type="text" className="form-control" placeholder='John Doe' />
                          </div>
                          <div className="mb-3">
                            <label className="form-label">Card Number</label>
                            <input type="text" className="form-control" placeholder="XXXX XXXX XXXX XXXX" />
                          </div>

                          <div className="mb-3">
                            <label className="form-label">Card Type</label>
                            <select className="form-select" aria-label="Default select example">
                              <option value="" selected>
                                Choose one
                              </option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </select>
                          </div>



                          <div className="mb-3 d-flex align-items-center gap-3">
                            <div>
                              <label className="form-label">Expiry</label>
                              <input type="text" className="form-control" placeholder="MM/YY" />
                            </div>
                            <div>
                              <label className="form-label">CVV</label>
                              <input type="text" className="form-control" placeholder="XX" />
                            </div>
                          </div>
                          <div className="mb-3">
                            <label className="form-label">Routing Number</label>
                            <input type="text" className="form-control" placeholder="125478266526" />
                          </div>
                          <div className='d-flex justify-content-between'>
                            <div className='fw-medium'>Save Bank info</div>
                            <div className="form-check form-switch">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                role="switch"
                                id="flexSwitchCheckChecked"
                              />
                            </div>
                          </div>
                          <div className="my-3">
                            <button className="d-send-btn-1">Done</button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-8'>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
