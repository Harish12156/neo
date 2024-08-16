import React from 'react';
import { CiReceipt } from 'react-icons/ci';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Success from '../../../assets/images/dashboard/success.gif';
import Aud from '../../../assets/images/account/send/aud.png';

function Summary({ showReceiveAmount, setShowReceiveAmount }) {


    return (
        <>

            <h5 className="dash-head-1 mb-4">Summary</h5>

            <p>Exchange Rate2</p>
            <p>1.00 USD = 16.9674 MXN</p>
            <div class="goal-divider-1"></div>

            <div className='d-flex flex-row justify-content-between mb-2 mt-4'>
                <span className='dash-sum-txt-1'>Transfer amount</span>
                <span className='dash-sum-txt-2'>600.00 USD</span>
            </div>
            <div className='d-flex flex-row justify-content-between mb-2'>
                <span className='dash-sum-txt-1'>Transfer fee2 </span>
                <span className='dash-sum-txt-2'>+ 0.00 USD</span>
            </div>
            <div className='d-flex flex-row justify-content-between mb-2'>
                <span className='dash-sum-txt-1'>Transfer total</span>
                <span className='dash-sum-txt-2'>600.00 USD</span>
            </div>
            {!showReceiveAmount && (
                <>
                    <div className='d-flex flex-row justify-content-between mb-2'>
                        <span className='dash-sum-txt-1'>Transfer receiver</span>
                        <span className='dash-sum-txt-2'>10,181.00MXN</span>
                    </div>
                    <div className='d-flex flex-row justify-content-between'>
                        <span className='dash-sum-txt-1'>Service time: 1, 8 </span>
                        <span className='dash-sum-txt-2'>Real Time</span>
                    </div>
                </>
            )}
            {showReceiveAmount && (
                <>
                    <div class="goal-divider-1"></div>
                    <div className='text-center mb-2'>
                        <p className='dash-sum-txt-1 mb-0'>Total to receiver</p>
                        <p className='dash-sum-txt-2 fc-y mb-0'>600.00 USD</p>
                    </div>
                    <div class="goal-divider-1"></div>
                    <div className='text-center mb-2'>
                        <p className='dash-sum-txt-1 mb-0'>Service time: 1, 8</p>
                        <p className='dash-sum-txt-2 fc-y mb-0'>Real Time</p>
                    </div>
                    <div class="goal-divider-1"></div>
                    <button className='d-send-btn-1 mt-2' data-bs-toggle="modal" data-bs-target="#transfermoney">Send Money now</button>
                </>
            )}



            <div class="send-money-mod modal fade" id="transfermoney" tabindex="-1" aria-labelledby="transfermoneyLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-body text-center py-4 modal-body-circle">
                            <LazyLoadImage alt="Prof" src={Success} width={85} />
                            <h3 style={{ color: "var(--color-1)" }}>Send Money success</h3>
                            <p className='text-muted mb-4'>Send Money has been successfully done</p>
                            <h5 style={{ color: "var(--color-1)" }}>Amount</h5>

                            <h3 style={{ marginBottom: "100px" }}><LazyLoadImage src={Aud} alt='Aud' className='acc-s-img-1' /> 123.00</h3>
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

export default Summary;
