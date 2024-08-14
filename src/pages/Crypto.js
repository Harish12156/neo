import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
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
import ethereum from "../assets/images/Crypto/ethereum.png";
import graph from "../assets/images/Crypto/graphs.png";
import graphone from "../assets/images/Crypto/graphs (1).png";
import bitcoinone from "../assets/images/Crypto/bitcoin.png";
import litecoin from "../assets/images/Crypto/litecoin.png";
import graphtwo from "../assets/images/Crypto/graphs(2).png";
import transethereum from "../assets/images/Crypto/Group 332.png";
import transbitcoin from "../assets/images/Crypto/Group 333.png";

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
                <div className='d-flex align-items-center gap-3 flex-wrap flex-lg-row'>
                  <div className=''>
                    <button className='link-btn'>
                      <LazyLoadImage alt='convert' src={convert} className='link-img me-1'></LazyLoadImage>
                      Convert<MdKeyboardArrowRight className='arrow-right' />
                    </button>
                  </div>
                  <div className=''>
                    <button className='link-btn'>
                      <LazyLoadImage alt='transfer' src={transfer} className='link-img me-1'></LazyLoadImage>
                      Transfer<MdKeyboardArrowRight className='arrow-right' />
                    </button>
                  </div>
                  <div className=''>
                    <button className='link-btn'>
                      <LazyLoadImage alt='bridge' src={bridge} className='link-img me-1'></LazyLoadImage>
                      Bridge<MdKeyboardArrowRight className='arrow-right' />
                    </button>
                  </div>
                  <div className=''>
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
          <div className='row py-3'>
            <div className='col-lg-8'>
              <div className='live-market card border-0 p-3 rounded-3'>
                <h2 className='live-heading'>Live Market</h2>
                <div className='table-size'>
                  <table className='livemarket-table my-3'>
                    <tbody>
                      <tr className=''>
                        <Link to='/cryptoinner'>
                          <td className=''>
                            <div className='d-flex align-items-center gap-3'>
                              <div className=''><LazyLoadImage alt="Ethereum" src={ethereum} className='' /></div>
                              <div><h6 className='text-one'>Ethereum</h6><div className='text-two'>ETH / USDT</div></div>
                            </div>
                          </td>
                          <td className=''><div className='text-three mb-2'>change</div><div className='text-four fc-g'>+14.02%</div></td>
                          <td className=''><div className='text-three mb-2'>Price</div><div className='text-five'>21,786 USD</div></td>
                          <td className=''><div><LazyLoadImage alt="Graph" src={graph} className='graph-size' /></div></td>
                        </Link>
                      </tr>
                      <tr className=''>
                        <Link to='/cryptoinner'>
                          <td className=''>
                            <div className='d-flex align-items-center gap-3'>
                              <div className=''><LazyLoadImage alt="bitcoin" src={bitcoinone} className='' /></div>
                              <div><h6 className='text-one'>Bitcoin</h6><div className='text-two'>ETH / USDT</div></div>
                            </div>
                          </td>
                          <td className=''><div className='text-three mb-2'>change</div><div className='text-four fc-g'>+4.02%</div></td>
                          <td className=''><div className='text-three mb-2'>Price</div><div className='text-five'>21,786 USD</div></td>
                          <td className=''><div><LazyLoadImage alt="Graph" src={graphone} className='graph-size' /></div></td>
                        </Link>
                      </tr>
                      <tr className=''>
                        <Link to='/cryptoinner'>
                          <td className=''>
                            <div className='d-flex align-items-center gap-3'>
                              <div className=''><LazyLoadImage alt="litecoin" src={litecoin} className='' /></div>
                              <div><h6 className='text-one'>Litecoin</h6><div className='text-two'>ETH / USDT</div></div>
                            </div>
                          </td>
                          <td className=''><div className='text-three mb-2'>change</div><div className='text-four fc-r'>-4.02%</div></td>
                          <td className=''><div className='text-three mb-2'>Price</div><div className='text-five'>19,786 USD</div></td>
                          <td className=''><div><LazyLoadImage alt="Graph" src={graph} className='graph-size' /></div></td>
                        </Link>
                      </tr>
                      <tr className=''>
                        <Link to='/cryptoinner'>
                          <td className=''>
                            <div className='d-flex align-items-center gap-3'>
                              <div className=''><LazyLoadImage alt="litecoin" src={litecoin} className='' /></div>
                              <div><h6 className='text-one'>Cardano</h6><div className='text-two'>ADA / USDT</div></div>
                            </div>
                          </td>
                          <td className=''><div className='text-three mb-2'>change</div><div className='text-four fc-g'>+0.02%</div></td>
                          <td className=''><div className='text-three mb-2'>Price</div><div className='text-five'>14,786 USD</div></td>
                          <td className=''><div><LazyLoadImage alt="Graph" src={graphtwo} className='graph-size' /></div></td>
                        </Link>
                      </tr>
                    </tbody>
                  </table>
                </div>

              </div>
            </div>
            <div className='col-lg-4 transaction'>
              <div className='card border-0 rounded-3 p-2'>
                <h5 className=''>Transactions</h5>
                <div className='d-flex align-items-center gap-2 py-3'>
                  <div><LazyLoadImage alt="ethereum" src={transethereum} className='' /></div>
                  <div><div className='text-one mb-1'>Ethereum</div><div className='text-two'>Received</div></div>
                  <div className='ms-auto text-end'><div className='text-one mb-1'>$24,102</div><div className='text-two'>Today, 19:30</div></div>
                </div>
                <div className='d-flex align-items-center gap-2 py-3'>
                  <div><LazyLoadImage alt="bitcoin" src={transbitcoin} className='' /></div>
                  <div><div className='text-one mb-1'>Bitcoin</div><div className='text-two'>Buy</div></div>
                  <div className='ms-auto text-end'><div className='text-one mb-1'>$4,157</div><div className='text-two'>Today, 14:32</div></div>
                </div>
                <div className='d-flex align-items-center gap-2 py-3'>
                  <div><LazyLoadImage alt="bitcoin" src={transbitcoin} className='' /></div>
                  <div><div className='text-one mb-1'>Bitcoin</div><div className='text-two'>Buy</div></div>
                  <div className='ms-auto text-end'><div className='text-one mb-1'>$64,157</div><div className='text-two'>Today, 13:50</div></div>
                </div>
                <div className='d-flex align-items-center gap-2 py-3'>
                  <div><LazyLoadImage alt="bitcoin" src={transbitcoin} className='' /></div>
                  <div><div className='text-one mb-1'>Litecoin</div><div className='text-two'>Buy</div></div>
                  <div className='ms-auto text-end'><div className='text-one mb-1'>$14,265</div><div className='text-two'>Today, 09:38</div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Crypto
