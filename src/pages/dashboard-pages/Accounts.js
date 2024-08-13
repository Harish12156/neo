import React from 'react';
import Prof from '../../assets/images/dashboard/send/prof.png';
import Success from '../../assets/images/dashboard/success.gif';
import Acc from '../../assets/images/dashboard/account/1.png';


import { LazyLoadImage } from 'react-lazy-load-image-component';
import { FaChevronDown } from 'react-icons/fa';

import { CiReceipt } from "react-icons/ci";
import BankList from './inner/BankList';

function Accounts() {


    return (
        <>
            <div className="card dash-card-1 mt-4">
                <div className="card-body">
                    <div className='row g-4'>
                        <div className='col-xl-6 border-r-1'>
                            <h5 className="dash-head-1 mb-4">Send Amount</h5>


                            <div className='d-send-card-1'>
                                <p className='text-muted mb-2'>Enter the amount</p>
                                <div className='d-send-input-1'>
                                    <input type="text" value="$ 100.00" />
                                </div>
                            </div>

                            <button className="d-flex flex-row bg-transparent border-0 my-3 gap-2 align-items-center w-100" type="button" data-bs-toggle="collapse" data-bs-target="#sendamountto" aria-expanded="false" aria-controls="sendamountto">
                                <LazyLoadImage alt="Acc" src={Acc} width={50} />
                                <div className='text-start'>
                                    <h6 className='mb-0 '>Brooklyn Simmons</h6>
                                    <p class="dash-c-txt-2">+1 9988776655</p>
                                </div>
                                <FaChevronDown className='ms-auto text-muted' />
                            </button>

                            <div className="collapse show" id="sendamountto">
                                <div className='d-send-card-1'>
                                    <div className='d-flex pb-3' style={{ borderBottom: "1px solid #000" }}>
                                        <p className='d-send-txt-1'>Fee :</p>
                                        <p className='d-send-txt-1 ms-auto'>1.00 USD</p>
                                    </div>
                                    <div className='d-flex pt-3'>
                                        <p className='d-send-txt-1'>Amount You Send :</p>
                                        <p className='d-send-txt-1 ms-auto'>100.00 USD</p>
                                    </div>
                                </div>
                            </div>

                            <button className='d-send-btn-1 mt-4' data-bs-toggle="modal" data-bs-target="#transfermoney">Send</button>
                        </div>
                        <div className='col-xl-6'>
                            <BankList />
                        </div>
                    </div>
                </div>
            </div>


            <div class="send-money-mod modal fade" id="transfermoney" tabindex="-1" aria-labelledby="transfermoneyLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-body text-center py-4 modal-body-circle">
                            <LazyLoadImage alt="Prof" src={Success} width={85} />
                            <h3 style={{ color: "var(--color-1)" }}>Bank Transfer success</h3>
                            <p className='text-muted mb-4'>Bank Transfer has been successfully done</p>
                            <h5 style={{ color: "var(--color-1)" }}>Amount</h5>
                            <h3 style={{ marginBottom: "100px" }}>$ 123.00</h3>
                            <a><h5 style={{ color: "var(--color-1)" }} className='mb-5'><CiReceipt /> View Receipt</h5></a>
                            <div className='mb-5'>
                                <button className='d-send-btn-1'>Done</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Accounts;
