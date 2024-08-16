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

import transactionlogo1 from "../../src/assets/images/transaction-img1.png";
import transactionlogo2 from "../../src/assets/images/transaction-img2.png";
import transactionlogo3 from "../../src/assets/images/transaction-img-3.png";
import transactionlogo4 from "../../src/assets/images/transaction-img-4.png";
import transactionlogo5 from "../../src/assets/images/transaction-img-5.png";
import transactionlogo6 from "../../src/assets/images/transaction-img-6.png";
import transactionlogo7 from "../../src/assets/images/transaction-img-7.png";
import transactionlogo8 from "../../src/assets/images/transaction-img-8.png";
import transactionlogo9 from "../../src/assets/images/transaction-img-9.png";
import Icon from "../assets/images/icon button.png";


function Card() {

  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const toggleOffcanvas = () => {
    setShowOffcanvas(!showOffcanvas);
  };



  const currentDate = new Date();
  const dateString = currentDate.toLocaleDateString();
  const timeString = currentDate.toLocaleTimeString();
  const monthString = currentDate.toLocaleDateString('en-US', { month: 'short' });
  // const dayString = currentDate.toLocaleDateString('en-US', { weekday: 'long' }); 
  const expensive = [
    {
      name: 'Floyd Miles',
      values: 14255151,
      Amount: "$220",
      images: transactionlogo1,
      time: `${monthString}, ${dateString}`,
      status: "completed",
    },
    {
      name: 'Esther Howard',
      values: 14255151,
      Amount: "$70",
      images: transactionlogo2,
      time: `${monthString}, ${dateString}`,
      status: "cancelled",
    },
    {
      name: 'Ronald Richards',
      values: 14255151,
      Amount: "$250",
      images: transactionlogo3,
      time: `${monthString}, ${dateString}`,
      status: "completed",
    },
    {
      name: 'Theresa Webb',
      values: 14255151,
      Amount: "$1200",
      images: transactionlogo4,
      time: `${monthString}, ${dateString}`,
      status: "completed",
    },
    {
      name: 'Floyd Miles',
      values: 14255151,
      Amount: "$220",
      images: transactionlogo5,
      time: `${monthString}, ${dateString}`,
      status: "completed",
    },
    {
      name: 'Esther Howard',
      values: 14255151,
      Amount: "$70",
      images: transactionlogo6,
      time: `${monthString}, ${dateString}`,
      status: "cancelled",
    },
    {
      name: 'Ronald Richards',
      values: 14255151,
      Amount: "$250",
      images: transactionlogo7,
      time: `${monthString}, ${dateString}`,
      status: "completed",
    },
    {
      name: 'Esther Howard',
      values: 14255151,
      Amount: "$70",
      images: transactionlogo8,
      time: `${monthString}, ${dateString}`,
      status: "cancelled",
    },
    {
      name: 'Ronald Richards',
      values: 14255151,
      Amount: "$250",
      images: transactionlogo9,
      time: `${monthString}, ${dateString}`,
      status: "completed",

    },
  ];

  return (
    <div className='card-section'>
      <div className='card-section-one'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-lg-4'>
              <div className='card h-100 mycard-section border-0 p-3 rounded-3 position-relative'>
                <h6 className='fw-semibold'>My Card</h6>
                <div className='d-flex align-items-center flex-column py-3 gap-3'>
                  <div className='w-100'>
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
                  <div className='w-100'>
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
                        border: 'none',
                        zIndex:'9'
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
            <div className='col-lg-8 card-transaction rounded-3'>
              <div className='row mt-2'>
                <div className='col-lg-12'>
                  <div>
                    <div className='d-flex align-items-center justify-content-between'>
                      <div>
                        <h5 className='mb-auto fw-semibold'>Card Transaction</h5>
                      </div>
                      <div className='d-flex me-2'>
                        <LazyLoadImage src={Icon} alt='Graph' className='img-fluid transaction-icon-img' />
                        <select className="form-select alt-apex-week-selector ms-2 py-2 border-0" aria-label="Default select example">
                          <option>Last Month</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='row mt-2'>
                <div className='col-lg-12'>
                  <div className='transaction-section-table'>
                    <table className="transaction-table">
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Type</th>
                          <th>Amount</th>
                          <th>Date</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {expensive.map((item, index) => {
                          let statusColor;
                          let backgroundcolor;

                          if (index < 1) {
                            statusColor = 'rgba(69, 194, 24, 1)';
                          } else if (index >= 1 && index < 2) {
                            statusColor = 'rgba(243, 99, 79, 1)';
                            backgroundcolor = 'rgba(252, 67, 41, 0.1)'
                          }
                          else if (index >= 2 && index < 5) {
                            statusColor = 'rgba(69, 194, 24, 1)';
                            backgroundcolor = '#ecf9e8'
                          }
                          else if (index >= 5 && index < 6) {
                            statusColor = 'rgba(243, 99, 79, 1)';
                            backgroundcolor = 'rgba(252, 67, 41, 0.1)';
                          }
                          else if (index >= 6 && index < 7) {
                            statusColor = 'rgba(69, 194, 24, 1)';
                            backgroundcolor = '#ecf9e8'
                          }
                          else if (index >= 7 && index < 8) {
                            statusColor = 'rgba(243, 99, 79, 1)';
                            backgroundcolor = 'rgba(252, 67, 41, 0.1)';
                          }
                          else if (index >= 8 && index < 9) {
                            statusColor = 'rgba(69, 194, 24, 1)';
                            backgroundcolor = '#ecf9e8'
                          }
                          else {
                            statusColor = 'default';
                          }

                          return (
                            <tr key={index} className='new-mark-relegious-01  table-row-padding'>
                              <td className=""><LazyLoadImage src={item.images} alt={item.name} className='me-2' style={{ width: '30px', height: '30px', borderRadius: '50%' }} /><span className='fw-medium'>{item.name}</span></td>
                              <td className="opacity-75">Invoice</td>
                              <td className="fw-medium">{item.Amount}</td>
                              <td className="opacity-75">{item.time}</td>
                              <td className="" ><button className='py-1 px-2 border-0 complete-cancelled-btn' style={{ color: statusColor, background: backgroundcolor }}>{item.status}</button></td>
                            </tr>
                          );
                        })}
                      </tbody>

                    </table>
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
