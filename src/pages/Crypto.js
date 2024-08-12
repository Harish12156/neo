import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import greenbar from "../assets/images/Crypto/greenbars.png";
import income from "../assets/images/Crypto/income.png";
import redbar from "../assets/images/Crypto/redbar.png";
import outcome from "../assets/images/Crypto/outcome.png";
import convert from "../assets/images/Crypto/convert.png";
import { MdKeyboardArrowRight } from "react-icons/md";
import transfer from "../assets/images/Crypto/transfer.png";
import bridge from "../assets/images/Crypto/bridge.png";
import stake from "../assets/images/Crypto/stake.png";
import Myassets from './dashboard-pages/inner/Myassets';
import withdraw from "../assets/images/Crypto/Withdraw.png";
import bitcoin from "../assets/images/Crypto/Bitcoin.png";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdSwapVert } from "react-icons/md";
import bitcointwo from "../assets/images/Crypto/Bitcoin-two.png";


function Crypto() {
  return (
    <div className='cryto-section'>
      <div className='cryto-section-one'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-lg-8'>
              <div className='total-balance-sec card border-0 p-4 rounded-3'>
                <h2 className='total-heading'>Total Balance</h2>
                <div className='row align-items-center justify-content-center gap-3 gap-md-0 py-2'>

                  <div className='col-12 col-md-4'>
                    <p className='bal-text mb-2'>Available Balance</p>
                    <div className='avail-bal'>$450,541.99</div>
                    <p className='bal-text mb-2'>25.847560607 BTC</p>
                  </div>

                  <div className='col-12 col-md-4'>
                    <LazyLoadImage alt="Bar" src={greenbar} className='bar-pic mb-3' />
                    <div className='d-flex gap-3'>
                      <div className=''><LazyLoadImage alt="income" src={income} className='value-pic' /></div>
                      <div className=''>
                        <div className='bal-text-two'>$21,351.00</div>
                        <div className='bal-text mb-2'>Income</div>
                      </div>
                    </div>
                  </div>

                  <div className='col-12 col-md-4'>
                    <LazyLoadImage alt="Bar" src={redbar} className='bar-pic mb-3' />
                    <div className='d-flex gap-3'>
                      <div className=''><LazyLoadImage alt="outcome" src={outcome} className='value-pic' /></div>
                      <div className=''>
                        <div className='bal-text-two'>$2,351.00</div>
                        <div className='bal-text mb-2'>Outcome</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='pt-3'>
                <div className='row align-items-center flex-wrap'>
                  <div className='col-6 col-md-3'>
                    <button className='link-btn'>
                      <LazyLoadImage alt='convert' src={convert} className='link-img me-1'></LazyLoadImage>
                      Convert<MdKeyboardArrowRight className='arrow-right' />
                    </button>
                  </div>
                  <div className='col-6 col-md-3'>
                    <button className='link-btn'>
                      <LazyLoadImage alt='transfer' src={transfer} className='link-img me-1'></LazyLoadImage>
                      Transfer<MdKeyboardArrowRight className='arrow-right' />
                    </button>
                  </div>
                  <div className='col-6 col-md-3'>
                    <button className='link-btn'>
                      <LazyLoadImage alt='bridge' src={bridge} className='link-img me-1'></LazyLoadImage>
                      Bridge<MdKeyboardArrowRight className='arrow-right' />
                    </button>
                  </div>
                  <div className='col-6 col-md-3'>
                    <button className='link-btn'>
                      <LazyLoadImage alt='stake' src={stake} className='link-img me-1'></LazyLoadImage>
                      Stake<MdKeyboardArrowRight className='arrow-right' />
                    </button>
                  </div>
                </div>
              </div>
              <div className=''>
                <Myassets />
              </div>
            </div>
            <div className='col-lg-4 exchange'>
              <h5 className=''><LazyLoadImage alt='withdraw' src={withdraw} className='me-2'></LazyLoadImage>Exchange</h5>
              <div className='card border-0 rounded-3 p-2'>
                <div className='d-flex align-items-center'>

                  <div class="">
                    <label for="from" class="form-label">FROM</label>
                    <input type="text" class="form-control" id="from" placeholder="i give" />
                  </div>

                  <div className='from-btn mt-4'>
                    {/* <!-- Button trigger modal --> */}
                    <div class="d-flex align-items-center gap-2" data-bs-toggle="modal" data-bs-target="#myUniqueModalID">
                      <div><LazyLoadImage alt='bitcoin' src={bitcoin} className='' /></div>
                      <div>UAH</div>
                      <div><MdKeyboardArrowDown className='' /></div>
                    </div>

                    {/* <!-- Modal --> */}
                    <div class="modal fade" id="myUniqueModalID" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="myUniqueModalLabel" aria-hidden="true">
                      <div class="modal-dialog">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h1 class="modal-title fs-5" id="myUniqueModalLabel">Modal title</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
                          <div class="modal-body">
                            ...
                          </div>
                          <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Understood</button>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

                <div className='m-auto pt-2'>
                  <MdSwapVert className='swap-icon' />
                </div>

                <div className='d-flex align-items-center'>

                  <div class="">
                    <label for="to" class="form-label">TO</label>
                    <input type="text" class="form-control" id="to" placeholder="i receive" />
                  </div>

                  <div className='from-btn mt-4'>
                    {/* <!-- Button trigger modal --> */}
                    <div class="d-flex align-items-center gap-2" data-bs-toggle="modal" data-bs-target="#myUniqueModalID-two">
                      <div><LazyLoadImage alt='bitcoin' src={bitcointwo} className='' /></div>
                      <div>ADA</div>
                      <div><MdKeyboardArrowDown className='' /></div>
                    </div>

                    {/* <!-- Modal --> */}
                    <div class="modal fade" id="myUniqueModalID-two" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="myUniqueModal-twoLabel" aria-hidden="true">
                      <div class="modal-dialog">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h1 class="modal-title fs-5" id="myUniqueModal-twoLabel">Modaltitle</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
                          <div class="modal-body">
                            ...
                          </div>
                          <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Understood</button>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

                <div className='my-3 fees-sec'>
                  <div className='d-flex align-items-center justify-content-between py-2'>
                    <div className='fees-text'>Fee:</div><div className='fees-text'>12</div>
                  </div>
                  <div className='d-flex align-items-center justify-content-between py-2'>
                    <div className='fees-text'>Amount Received</div><div className='fees-text'>12</div>
                  </div>
                </div>

                <div className='mt-4 mb-3'>
                  <button className='done-css'>Done</button>
                </div>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col'></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Crypto
