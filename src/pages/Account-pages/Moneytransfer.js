import React, { useState } from 'react';
import Summary from './inner/Summary';
import Aud from '../../assets/images/account/send/aud.png';
import Bank from '../../assets/images/account/Bank.png';
import Wallet from '../../assets/images/account/wallet.png';
import USD from '../../assets/images/account/currency/USD.png';
import AUD from '../../assets/images/account/currency/AUD.png';
import ARS from '../../assets/images/account/currency/ARS.png';
import EUR from '../../assets/images/account/currency/EUR.png';
import BDR from '../../assets/images/account/currency/BDR.png';
import Done from '../../assets/images/account/Done.png';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import { FaChevronDown } from 'react-icons/fa';
import { MdSwapVert } from 'react-icons/md';
import { IoSearch } from 'react-icons/io5';

function Moneytransfer() {
    const [showReceiveAmount, setShowReceiveAmount] = useState(false);
    const [activeCurrency, setActiveCurrency] = useState(0); // State to track the active currency

    const handleSendMoneyClick = () => {
        setShowReceiveAmount(true);
    };

    const currencies = [
        { img: USD, name: 'US Dollar', code: 'USD' },
        { img: AUD, name: 'Australian Dollar', code: 'AUD' },
        { img: ARS, name: 'Argentine Peso', code: 'ARS' },
        { img: EUR, name: 'Euro', code: 'EUR' },
        { img: BDR, name: 'Canada Dollar', code: 'BDR' }
    ];

    const handleCurrencyClick = (index) => {
        setActiveCurrency(index);
    };

    return (
        <>
            <div className="card dash-card-1 mt-4 acc-send-overrall-sec">
                <div className="card-body">
                    <div className='row g-4'>
                        <div className='col-xl-7 border-r-1'>
                            <h5 className="dash-head-1 mb-4">Send money 24/7 around the world with Rempic App</h5>
                            <div className='acc-send-card-1 d-flex flex-row align-items-center cur-point' data-bs-toggle="modal" data-bs-target="#mt-Choose-Currency">
                                <div>
                                    <p className='acc-s-text-1'>Send To</p>
                                    <LazyLoadImage src={Aud} alt='Aud' className='acc-s-img-1' /> <span className='acc-s-text-2'>AUD</span>
                                </div>
                                <FaChevronDown className='ms-auto' />
                            </div>
                            <div className='acc-send-card-1 d-flex flex-row align-items-center mt-4'>
                                <div>
                                    <p className='acc-s-text-1'>Send Amount</p>
                                    <input className='acc-s-img-1 form-control form-control-a-send' value="1600.200" />
                                </div>
                                {showReceiveAmount && (
                                    <span className='acc-s-text-2 ms-auto fc-y'>USD</span>
                                )}
                            </div>
                            {showReceiveAmount && (
                                <>
                                    <div className='text-center'>
                                        <MdSwapVert className='swap-icon-s' />
                                    </div>
                                    <div className='acc-send-card-1 d-flex flex-row align-items-center'>
                                        <div>
                                            <p className='acc-s-text-1'>Receive Amount</p>
                                            <input className='acc-s-img-1 form-control form-control-a-send' value="2600.200" />
                                        </div>
                                        <span className='acc-s-text-2 ms-auto fc-y'>AUD</span>
                                    </div>

                                    <div className='mt-4 send-tab-sec-o'>
                                        <p className='acc-s-text-3'>How does your receiver want the money?</p>
                                        <ul className="nav nav-pills mb-3 gap-2" id="pills-tab" role="tablist">
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link active" id="pills-Bank-tab" data-bs-toggle="pill" data-bs-target="#pills-Bank" type="button" role="tab" aria-controls="pills-Bank" aria-selected="true">
                                                    <div className='d-flex flex-column align-items-center gap-2'>
                                                        <LazyLoadImage src={Bank} alt='Bank' className='acc-s-img-2' />
                                                        <span>Bank Account</span>
                                                    </div>
                                                </button>
                                            </li>

                                        </ul>
                                        <p className='acc-s-text-3'>How would you like to pay?</p>
                                        <ul className="nav nav-pills mb-3 gap-2" id="pills-tab" role="tablist">
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link active" id="pills-wallet-tab" data-bs-toggle="pill" data-bs-target="#pills-wallet" type="button" role="tab" aria-controls="pills-wallet" aria-selected="false">
                                                    <div className='d-flex flex-column align-items-center gap-2'>
                                                        <LazyLoadImage src={Wallet} alt='Wallet' className='acc-s-img-2' />
                                                        <span>Wallet</span>
                                                    </div>
                                                </button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link" id="pills-Account-tab" data-bs-toggle="pill" data-bs-target="#pills-Account" type="button" role="tab" aria-controls="pills-Account" aria-selected="true">
                                                    <div className='d-flex flex-column align-items-center gap-2'>
                                                        <LazyLoadImage src={Bank} alt='Bank' className='acc-s-img-2' />
                                                        <span>Account</span>
                                                    </div>
                                                </button>
                                            </li>

                                        </ul>

                                    </div>
                                </>
                            )}
                            {!showReceiveAmount && (
                                <button className='d-send-btn-1 mt-5' onClick={handleSendMoneyClick}>Send Money now</button>
                            )}
                        </div>
                        <div className='col-xl-5'>
                            <Summary showReceiveAmount={showReceiveAmount} setShowReceiveAmount={setShowReceiveAmount} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-choose-cur-modal modal fade" id="mt-Choose-Currency" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered-sm">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className='row align-items-center'>
                                <div className='col-7'>
                                    <h5 className="dash-head-1 d-flex">Choose Currency </h5>
                                </div>
                                <div className='col-5'>
                                    <div className="input-group contact-search-f">
                                        <span className="input-group-text"><IoSearch /></span>
                                        <input type="text" className="form-control" placeholder="Search" />
                                    </div>
                                </div>
                            </div>
                            <div className='mt-4'>
                                {currencies.map((currency, index) => (
                                    <div 
                                        key={index} 
                                        className={`d-flex flex-row gap-2 align-items-center mb-3 cur-point ${activeCurrency === index ? 'active' : ''}`}
                                        onClick={() => handleCurrencyClick(index)}
                                    >
                                        <LazyLoadImage src={currency.img} alt={currency.code} className='mt-m-img-1' />
                                        <div>
                                            <p className='mt-m-txt-1'>{currency.name}</p>
                                            <span className='mt-m-txt-2'>{currency.code}</span>
                                        </div>
                                        {activeCurrency === index && (
                                            <LazyLoadImage src={Done} alt='Done' className='mt-m-img-2 ms-auto' />
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Moneytransfer;
