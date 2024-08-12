import React, { useState } from 'react';
import Prof from '../../assets/images/dashboard/send/prof.png';
import Qrcode from '../../assets/images/dashboard/send/qr.png';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import { FaChevronDown } from 'react-icons/fa';

import ContactList from './inner/ContactList';

function Receive() {
    const [showQR, setShowQR] = useState(false);

    const handleRequestMoney = () => {
        setShowQR(true);
    };

    return (
        <>
            <div className="card dash-card-1 mt-4">
                <div className="card-body">
                    <div className='row'>
                        <div className='col-lg-6 border-r-1'>
                            <h5 className="dash-head-1 mb-4">Request Money</h5>
                            <p className='mb-5'>You can request multiple payments from up to 20 people</p>
                            {!showQR && <>
                                <div className='d-send-card-1'>
                                    <p className='text-muted mb-2'>Enter the amount</p>
                                    <div className='d-send-input-1'>
                                        <input type="text" value="$ 100.00" readOnly />
                                    </div>
                                </div>

                                <button className="d-flex flex-row bg-transparent border-0 my-3 gap-2 align-items-center w-100" type="button" data-bs-toggle="collapse" data-bs-target="#sendamountto" aria-expanded="false" aria-controls="sendamountto">
                                    <LazyLoadImage alt="Prof" src={Prof} width={50} />
                                    <h6 className='mb-0'>Brooklyn Simmons</h6>
                                    <FaChevronDown className='ms-auto text-muted' />
                                </button>

                                <div className="collapse" id="sendamountto">
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
                                <button className='d-send-btn-1 mt-4' onClick={handleRequestMoney}>Request Money</button>

                            </>
                            }
                            {showQR && <>
                                <div className='text-center'>
                                    <h5>Request Amount</h5>
                                    <h5 className='r-text-dash-1 text-center mt-3 mb-5'>$ 100,00</h5>
                                </div>
                                <div className="d-flex flex-row mt-3 mb-4 gap-2 align-items-center w-100 justify-content-center" >
                                    <LazyLoadImage alt="Prof" src={Prof} width={50} />
                                    <h6 className='mb-0'>Brooklyn Simmons</h6>
                                </div>
                                <div className='d-flex r-card-dash-1 justify-content-between'>
                                    <div>
                                        <span className='r-text-dash-2'>Link Adress</span>
                                        <p className='mb-0 r-text-dash-3'>bc2wqkj78…458hdwq34</p>
                                    </div>
                                    <button className='r-btn-dash-1'>Copy</button>
                                </div>
                            </>
                            }
                        </div>
                        <div className='col-lg-6'>
                            {!showQR && <ContactList />}
                            {showQR && <LazyLoadImage alt="Qrcode" src={Qrcode} className='img-fluid' />}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Receive;
