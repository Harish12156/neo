import React from 'react'
import { PiCaretUpFill, PiNumberCircleZeroBold, PiPaperPlaneTilt } from 'react-icons/pi'
import { Link, useLocation } from 'react-router-dom'
import { BsPersonBoundingBox } from "react-icons/bs";
import { BsBank } from "react-icons/bs";
import { IoRocket } from "react-icons/io5";
import { PiChartPieBold } from "react-icons/pi";
import { MdDiamond } from 'react-icons/md';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Swipe1 from '../../../assets/images/dashboard/card/swipe-1.png';
import Swipe2 from '../../../assets/images/dashboard/card/swipe-2.png';
import Swipe3 from '../../../assets/images/dashboard/card/swipe-3.png';
import Favicon from '../../../assets/images/dashboard/card/favicon.png';
import VisaInc from '../../../assets/images/dashboard/card/Visa_Inc._logo.png';
import Master from '../../../assets/images/dashboard/card/master.png';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import { PiCaretDownFill } from "react-icons/pi";



function Actions() {
    const location = useLocation();

    const getActiveClass = (path) => {
        return location.pathname === path ? 'dash-actions-active' : '';
    };
    return (
        <div>
            <div className='row dash-swipe-card-sec'>
                <div className='col-lg-6'>
                    <Swiper
                        spaceBetween={20}
                        modules={[Pagination]}
                        pagination={{ clickable: true }}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className='card h-100 dash-swipe-card-1' style={{ backgroundImage: `url(${Swipe1})` }}>
                                <div className='card-body'>
                                    <div className='d-flex flex-column justify-content-between h-100'>
                                        <div className='d-flex flex-row gap-2 align-items-center'>
                                            <LazyLoadImage alt={`Favicon`} src={Favicon} className='dash-card-img-1' />
                                            <span className='dash-card-txt-1'>Rempic Pay Bank</span>
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
                                            <LazyLoadImage alt={`VisaInc`} src={VisaInc} className='dash-card-img-2 ms-auto' />
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='card h-100 dash-swipe-card-1' style={{ backgroundImage: `url(${Swipe2})` }}>
                                <div className='card-body'>
                                    <div className='d-flex flex-column justify-content-between h-100'>
                                        <h5 className='mb-0'>Current Balance</h5>

                                        <div className='d-flex flex-row align-items-center'>
                                            <span className='dash-card-txt-2'>$3,567.12</span>

                                        </div>
                                        <div className='d-flex flex-row align-items-center'>
                                            <h5 className='mb-0 d-flex gap-2 align-items-center'><PiCaretUpFill style={{ color: "#40D861" }} />14.32%</h5>
                                            <h5 className='mb-0 ms-auto d-flex gap-2'>USD <PiCaretDownFill /></h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
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
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className='col-lg-6'>
                    <div className="card dash-card-1">
                        <div className="card-body">
                            <h5 class="dash-head-1 mb-4">Quick Actions</h5>
                            <div className='row g-3 row-cols-lg-4 row-cols-md-4 row-cols-2'>
                                <div className='col'>
                                    <Link to="/send" className={`dash-actions-btn-1 ${getActiveClass('/send')}`}>
                                        <PiPaperPlaneTilt className='dash-actions-action-1' />
                                        Send
                                    </Link>
                                </div>
                                <div className='col'>
                                    <Link to="/receive" className={`dash-actions-btn-1 ${getActiveClass('/receive')}`}>
                                        <BsPersonBoundingBox className='dash-actions-action-1' />
                                        Receive
                                    </Link>
                                </div>
                                <div className='col'>
                                    <Link to="/account" className={`dash-actions-btn-1 ${getActiveClass('/account')}`}>
                                        <BsBank className='dash-actions-action-1' />
                                        Account
                                    </Link>
                                </div>
                                <div className='col'>
                                    <Link to="/goals" className={`dash-actions-btn-1 ${getActiveClass('/goals')}`}>
                                        <IoRocket className='dash-actions-action-1' />
                                        Goals
                                    </Link>
                                </div>
                            </div>
                            <div className='row g-3 mt-1'>
                                <div className='col'>
                                    <Link to="/data" className={`dash-actions-btn-1 ${getActiveClass('/data')}`}>
                                        <PiChartPieBold className='dash-actions-action-1' />
                                        Data
                                    </Link>
                                </div>
                                <div className='col-lg-9 bg'>
                                    <div className='row desk-h-100 g-3'>
                                        <div className='col-6 desk-h-100'>
                                            <div className='dash-actions-btn-1'>
                                                <div className='d-flex flex-row align-items-center dash-actions-data-1'>
                                                    <PiNumberCircleZeroBold className='dash-actions-action-2' />
                                                    <span className='text-muted'>Spend</span>
                                                </div>
                                                <h6 className='dash-actions-txt-1 mb-0'>$ -4950.00</h6>
                                            </div>
                                        </div>
                                        <div className='col-6 desk-h-100'>
                                            <div className='dash-actions-btn-1'>
                                                <div className='d-flex flex-row align-items-center dash-actions-data-1'>
                                                    <MdDiamond className='dash-actions-action-2' />
                                                    <span className='text-muted'>Saved</span>
                                                </div>
                                                <h6 className='dash-actions-txt-1 mb-0'>$ 30,000.00</h6>
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

export default Actions
