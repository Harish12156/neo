import React, { useState } from 'react';
import Graph from '../../assets/images/dashboard/data/graph.png';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import { IoArrowDownOutline, IoChevronDownOutline } from 'react-icons/io5';
import { LuPencil, LuPencilLine, LuShoppingCart } from 'react-icons/lu';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { FaGlassMartiniAlt, FaCoffee } from 'react-icons/fa'; // Import additional icons
import { RiShoppingCart2Line } from "react-icons/ri";
import { BiSolidTorch } from "react-icons/bi";

function Data() {
    const [isChecked, setIsChecked] = useState(true);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };
    const percentage = 45;
    const expenses = [
        {
            icon: FaGlassMartiniAlt,
            category: 'Food',
            amountLeft: '$600 left',
            totalAmount: '$750 of $1365',
            color: '#FF5733'
        },
        {
            icon: RiShoppingCart2Line,
            category: 'Shopping',
            amountLeft: '$200 left',
            totalAmount: '$750 of $1365',
            color: 'var(--color-1)'
        },
        {
            icon: FaCoffee,
            category: 'Restaurants & Cafes',
            amountLeft: '$100 left',
            totalAmount: '$750 of $1365',
            color: '#FF9F0A'
        },
        {
            icon: BiSolidTorch,
            category: 'Health',
            amountLeft: '$300 left',
            totalAmount: '$750 of $1365',
            color: '#64D2FF'
        }
    ];
    return (
        <>

            <div className='row g-4 mt-1'>
                <div className='col-xl-6'>
                    <div className="card dash-card-1 h-100">
                        <div className="card-body">
                            <div className='dash-data-card-1'>
                                <div className='row g-4 mt-1'>
                                    <div className='col-md-6 mt-0'>
                                        <p className='mb-1'>Total expenses</p>
                                        <p className='dash-data-txt-1'>$29,100.50</p>
                                        <div className='dash-data-txt-2'>
                                            +0.25%
                                        </div>
                                    </div>
                                    <div className='col-md-6 mt-0 text-md-center'>
                                        <LazyLoadImage src={Graph} style={{ width: "60%" }} alt='Graph' className='img-fluid d-grap-img-1' />
                                    </div>
                                </div>
                            </div>
                            <div className='dash-data-card-2 mt-4'>
                                <div className='d-flex align-items-center gap-3'>
                                    <IoArrowDownOutline className='dash-data-txt-3' />
                                    <span style={{ fontWeight: "500" }}>Income</span>
                                    <h6 className='ms-auto fc-g'>$23,000 <LuPencil /></h6>
                                </div>
                                <div className="progress mt-3" style={{ height: "7px" }} role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                    <div className="progress-bar" style={{ width: `25%`, backgroundColor: "var(--color-1)" }}></div>
                                </div>
                            </div>
                            <div className='dash-data-card-2 mt-4'>
                                <button class="bg-transparent border-0 d-flex w-100" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                                    <p className='fc-y'>August</p>
                                    <p className='ms-auto'>August <IoChevronDownOutline /></p>
                                </button>

                                <div class="collapse show" id="collapseExample">
                                    <div className='row g-4 mt-1 align-items-center'>
                                        <div className='col-md-6 mt-0'>
                                            <div className='row g-2'>
                                            <div className='col-4'>
                                                <CircularProgressbar
                                                    value={percentage}
                                                    text={`${percentage}%`}

                                                    styles={buildStyles({
                                                        strokeLinecap: 'butt',
                                                        textSize: '22px',
                                                        fontWeight: "700",
                                                        pathTransitionDuration: 0.5,
                                                        pathColor: `var( --color-2)`,
                                                        textColor: 'var(--color-1)',
                                                        trailColor: '#d8d8d8',
                                                        backgroundColor: 'var(--color-1)',
                                                    })}
                                                    className="custom-progressbar"

                                                />
                                                </div>
                                                <div className='col-8'>
                                                    <p className='dash-data-txt-4 mb-1'>$1,589</p>
                                                    <button className='dash-data-btn-1'>Left</button>
                                                </div>
                                            
                                            </div>
                                        </div>
                                        <div className='col-md-6 mt-0'>
                                            <div className='d-flex gap-2'>
                                                <div className='data-prog-1' style={{ backgroundColor: "#d8d8d8" }}></div>
                                                <span>%47 Shopping</span>
                                            </div>
                                            <div className='d-flex gap-2 mt-2'>
                                                <div className='data-prog-1' style={{ backgroundColor: "var( --color-2)" }}></div>
                                                <span>%28 Bills</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="goal-divider-1" style={{ borderColor: "#efefef" }}></div>

                                <div className='d-flex flex-md-row flex-column'>
                                    <p className='dash-data-txt-4 mb-0' style={{ fontSize: "18px" }}>Total Budget:</p>
                                    <h6 className='ms-md-auto'>$782 of $2,569 Spend</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-xl-6'>
                    <div className="card dash-card-1 h-100">
                        <div className="card-body">
                            <h5 className="dash-head-1 mb-4">All Expenses</h5>
                            {expenses.map((expense, index) => (
                                <div key={index} className='dash-data-card-3 d-flex gap-2 align-items-center mb-3'>
                                    <div className='goals-img-3 px-2' style={{ backgroundColor: expense.color }}>
                                        <expense.icon />
                                    </div>
                                    <div className='d-flex flex-column w-100'>
                                        <div className='d-flex flex-row'>
                                            <span>{expense.category}</span>
                                            <span className='ms-auto'>{expense.amountLeft}</span>
                                        </div>
                                        <div className="progress my-1" style={{ height: "7px" }} role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                            <div className="progress-bar" style={{ width: `25%`, backgroundColor: expense.color }}></div>
                                        </div>
                                        <span>{expense.totalAmount}</span>
                                    </div>
                                </div>
                            ))}
                            <div className='text-center'>
                                <button class="d-send-btn-1 mt-2 w-auto px-4" data-bs-toggle="modal" data-bs-target="#exampleModal">+ Add New</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


            <div class="data-modal-1 modal fade slide-in-from-down" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content border-0">
                        <div className='dash-goals-card-1 text-center h-100'>
                            <h5 className='mb-3'>New Budget</h5>
                            <div className='d-flex flex-row justify-content-center align-items-end'>
                                <div className='dash-md-i-1'>
                                    <LuShoppingCart />
                                </div>
                                <div className='goals-icon-1'>
                                    <LuPencilLine />
                                </div>
                            </div>
                            <h5 className='my-3 dash-head-1 text-white'>Shopping <LuPencilLine /></h5>
                        </div>
                        <div class="modal-body">
                            <p className='text-center mb-2'>Set amount Budget</p>
                            <h6 className='text-center mb-3 opacity-50'>How much would you like to Spend?</h6>
                            <div className='d-send-input-1'>
                                <input type="text" value="$ 10,000.00" className='text-center' />
                            </div>

                            <div class="goal-divider-1"></div>
                            <div className='d-flex mt-3 add-bank-modal mb-5'>
                                <span className='opacity-75'>Set Auto-Save Wallet</span>
                                <span className='ms-auto me-2'>Active</span>

                                <div className="form-check form-switch ">
                                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked={isChecked} onChange={handleCheckboxChange} />
                                </div>
                            </div>

                            <button class="d-send-btn-1" style={{borderRadius:"50px"}}>Add Budget</button>

                        </div>

                    </div>
                </div>
            </div>

        </>
    );
}

export default Data;
