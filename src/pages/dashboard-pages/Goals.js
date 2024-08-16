import React, { useState } from 'react';
import Goalpro from '../../assets/images/dashboard/goals/goal-pro.png';
import Modal1 from '../../assets/images/dashboard/goals/modal-1.png';
import Modal2 from '../../assets/images/dashboard/goals/modal-2.png';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import { LuPencilLine } from 'react-icons/lu';
import { FaBook, FaCalendarAlt, FaCamera, FaHome } from "react-icons/fa";
import { FaCar } from "react-icons/fa6";
import { TbBeach } from "react-icons/tb";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { setHours, setMinutes } from 'date-fns';
import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md';


const goalsData = [
    { icon: FaHome, name: 'Building Agency', daysLeft: '365 Days Left', progress: 25, color: "#FFC243" },
    { icon: FaCar, name: 'New Car', daysLeft: '365 Days Left', progress: 40, color: "#1B4399" },
    { icon: FaBook, name: 'Buy Book', daysLeft: '365 Days Left', progress: 85, color: "#8950DA" },
    { icon: FaCamera, name: 'New Camera', daysLeft: '365 Days Left', progress: 45, color: "#624FD8" },
    { icon: FaBook, name: 'Buy Book', daysLeft: '365 Days Left', progress: 85, color: "#8950DA" },
];

function Goals() {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [isChecked, setIsChecked] = useState(true);
    const [isSwiped, setIsSwiped] = useState(false);
    const [swipeStart, setSwipeStart] = useState(null);
    const [swipeEnd, setSwipeEnd] = useState(null);


    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    const handleMouseDown = (e) => {
        setSwipeStart(e.clientX);
    };

    const handleMouseMove = (e) => {
        if (swipeStart !== null) {
            setSwipeEnd(e.clientX);
        }
    };

    const handleMouseUp = () => {
        if (swipeEnd - swipeStart > 100) {
            setIsSwiped(true);
        }
        setSwipeStart(null);
        setSwipeEnd(null);
    };
    return (
        <>
            <div className="card dash-card-1 mt-4 overflow-hidden">
                <div className='row '>
                    <div className='col-xl-6 px-0 border-r-2 order-1 '>
                        <div className='dash-goals-card-1 text-center h-100'>
                            <h5 className='mb-3 dash-head-1 text-white'>My Goals</h5>
                            <div className='d-flex justify-content-center align-items-center'>
                                <div className='goals-img-1' style={{ backgroundColor: "#FFC243" }}>
                                    <FaHome />
                                </div>
                                <div className='goals-img-1' style={{ backgroundColor: "#1B4399" }}>
                                    <FaCar />
                                </div>
                                <div className='goals-img-1' style={{ backgroundColor: "#C2F3A6" }}>
                                    <TbBeach />
                                </div>
                            </div>
                            <h5 className='my-3 dash-head-1 text-white'>We saved $ 200 today</h5>
                            <p className='goals-txt-1'>Adde $100 to Get New Car,$50 to Building Agency,$50 To Buy Book</p>
                        </div>
                    </div>
                    <div className='col-xl-6 px-0 order-xl-2 order-3'>
                        <div className='dash-goals-card-1 text-center h-100'>
                            <h5 className='mb-3'>My Goals</h5>
                            <div className='d-flex flex-row justify-content-center align-items-end'>
                                <LazyLoadImage alt="Goalpro" src={Goalpro} className='goals-img-2' />
                                <div className='goals-icon-1'>
                                    <LuPencilLine />
                                </div>
                            </div>
                            <h5 className='my-3 dash-head-1 text-white'>Holidays In Maldives <LuPencilLine /></h5>
                        </div>
                    </div>

                    <div className='col-xl-6 px-0 border-r-2 order-xl-3 order-2'>
                        <div className='dash-goals-card-2 h-100'>
                            {goalsData.map((goal, index) => (
                                <div key={index} className='dash-goals-card-3 d-flex flex-row gap-2 mb-3' data-bs-toggle="modal" data-bs-target="#mygoalinner">
                                    <div className='goals-img-3' style={{ backgroundColor: goal.color }}>
                                        <goal.icon />
                                    </div>
                                    <div className='d-flex flex-column justify-content-center'>
                                        <h6 className='goals-txt-2'>{goal.name}</h6>
                                        <p className='goals-txt-3 mb-0'>{goal.daysLeft}</p>
                                    </div>
                                    <div className='d-flex flex-column justify-content-center ms-auto'>
                                        <h6 className='goals-txt-2 mb-2'>$2.345/<span className='opacity-50'>$5000</span></h6>
                                        <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow={goal.progress} aria-valuemin="0" aria-valuemax="100">
                                            <div className="progress-bar" style={{ width: `${goal.progress}%`, backgroundColor: goal.color }}></div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className='col-xl-6 px-0 order-4'>
                        <div className='dash-goals-card-2 h-100 pe-4'>
                            <h6 className='goals-txt-2 text-center'>Set amount Goals</h6>
                            <div className='d-send-input-1'>
                                <input type="text" value="$ 10,000.00" className='text-center' />
                            </div>
                            <div className='goal-divider-1' />
                            <form>
                                <div className="mb-3">
                                    <p className="form-label">Goal Start Date</p>
                                    <div style={{ position: 'relative' }}>
                                        <DatePicker
                                            selected={startDate}
                                            onChange={(date) => setStartDate(date)}
                                            className="custom-datepicker"
                                            dateFormat="MMMM d, yyyy"
                                            includeTimes={[
                                                setHours(setMinutes(new Date(), 0), 17),
                                                setHours(setMinutes(new Date(), 30), 18),
                                                setHours(setMinutes(new Date(), 30), 19),
                                                setHours(setMinutes(new Date(), 30), 17),
                                            ]}
                                        />
                                        <FaCalendarAlt style={{
                                            position: 'absolute',
                                            right: '10px',
                                            top: '50%',
                                            transform: 'translateY(-50%)',
                                            pointerEvents: 'none',
                                            color: '#555',
                                            opacity: '0.6'
                                        }} />
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <p className="form-label">Goal End Date</p>
                                    <div style={{ position: 'relative' }}>
                                        <DatePicker
                                            selected={endDate}
                                            onChange={(date) => setEndDate(date)}
                                            className="custom-datepicker"
                                            dateFormat="MMMM d, yyyy"
                                        />
                                        <FaCalendarAlt style={{
                                            position: 'absolute',
                                            right: '10px',
                                            top: '50%',
                                            transform: 'translateY(-50%)',
                                            pointerEvents: 'none',
                                            color: '#555',
                                            opacity: '0.6'
                                        }} />
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Description</label>
                                    <textarea class="form-control" placeholder='Write' rows="2"></textarea>
                                </div>
                            </form>
                            <button className='d-send-btn-1 mt-2' data-bs-toggle="modal" data-bs-target="#mygoalredeem">Set</button>

                        </div>
                    </div>
                </div>
            </div>


            <div class="goal-modal-1 modal fade slide-in-from-down" id="mygoalinner" tabindex="-1" aria-labelledby="mygoalinnerLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">

                        <div class="modal-body">
                            <div className='text-center'>
                                <LazyLoadImage alt="Modal1" src={Modal1} className='goals-md-img-1' />
                            </div>

                            <p className='text-center mt-3' style={{ color: "var(--color-1)" }}>Ammount Goals</p>
                            <h5 className='r-text-dash-1 text-center'>$ 10,000.00</h5>

                            <div className='d-flex mt-5'>
                                <span className='opacity-75'>Goals Name</span>
                                <span className='ms-auto'>New Apartment</span>
                            </div>
                            <div class="goal-divider-1"></div>

                            <div className='d-flex mt-3'>
                                <span className='opacity-75'>Start Date</span>
                                <span className='ms-auto'>August 12, 2023</span>
                            </div>
                            <div class="goal-divider-1"></div>

                            <div className='d-flex mt-3'>
                                <span className='opacity-75'>End Date</span>
                                <span className='ms-auto'>August 12, 2024</span>
                            </div>
                            <div class="goal-divider-1"></div>
                            <div className='d-flex mt-3 add-bank-modal '>
                                <span className='opacity-75'>Set Auto-Save Wallet</span>
                                <span className='ms-auto me-2'>Active</span>

                                <div className="form-check form-switch ">
                                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked={isChecked} onChange={handleCheckboxChange} />
                                </div>
                            </div>
                            <h5 className='mt-5'>Description</h5>
                            <span>It is a long established fact that a reader will be distracted by the readable content of a page</span>
                            <div className='mt-4'>
                                <button className='d-send-btn-1'>Done</button>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

            <div class="goal-modal-1 goal-modal-2 modal fade slide-in-from-down" id="mygoalredeem" tabindex="-1" aria-labelledby="mygoalredeemLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">

                        <div class="modal-body">
                            <div className='text-center'>
                                <LazyLoadImage alt="Modal2" src={Modal2} className='goals-md-img-1' />
                            </div>

                            <p className='text-center mt-3' style={{ color: "var(--color-1)" }}>Ammount Goals</p>
                            <div className='text-center'><label className='r-text-dash-1'>$2.345/</label><label className='r-text-dash-1-1 opacity-25'>$5000</label></div>

                            <div className='d-flex mt-5'>
                                <span className='opacity-75'>Goals Name</span>
                                <span className='ms-auto'>New Apartment</span>
                            </div>
                            <div class="goal-divider-1"></div>

                            <div className='d-flex mt-3'>
                                <span className='opacity-75'>Start Date</span>
                                <span className='ms-auto'>August 12, 2023</span>
                            </div>
                            <div class="goal-divider-1"></div>

                            <div className='d-flex mt-3'>
                                <span className='opacity-75'>End Date</span>
                                <span className='ms-auto'>August 12, 2024</span>
                            </div>
                            <div class="goal-divider-1"></div>
                            <div className='d-flex mt-3 add-bank-modal '>
                                <span className='opacity-75'>Set Auto-Save Wallet</span>
                                <span className='ms-auto me-2'>Active</span>

                                <div className="form-check form-switch ">
                                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked={isChecked} onChange={handleCheckboxChange} />
                                </div>
                            </div>
                            <h5 className='mt-5'>Description</h5>
                            <span>It is a long established fact that a reader will be distracted by the readable content of a page</span>
                            <div className='mt-4'>
                                <button
                                    className='d-swipe-btn-1'
                                    onMouseDown={handleMouseDown}
                                    onMouseMove={handleMouseMove}
                                    onMouseUp={handleMouseUp}
                                >
                                    <div
                                        className='d-swipe-btn-1-1'
                                        style={{ left: isSwiped ? 'calc(100% - 50px)' : '0' }}
                                    >
                                        <MdOutlineKeyboardDoubleArrowRight />
                                    </div>
                                    <span className='d-swipe-btn-1-2'>
                                        {isSwiped ? 'Redeemed' : 'Slide to redeem'}
                                    </span>
                                </button>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default Goals;
