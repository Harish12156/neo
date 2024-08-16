import React, { useState } from 'react';
import Acc from '../../../assets/images/dashboard/account/1.png';
import Acc2 from '../../../assets/images/dashboard/account/2.png';
import Acc3 from '../../../assets/images/dashboard/account/3.png';
import Acc4 from '../../../assets/images/dashboard/account/4.png';
import Acc5 from '../../../assets/images/dashboard/account/5.png';
import Add from '../../../assets/images/dashboard/account/add.png';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import { IoSearch } from 'react-icons/io5';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { RxCross2 } from "react-icons/rx";

function BankList() {
    const [isChecked, setIsChecked] = useState(true);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    const banks = [
        { name: 'Brooklyn Simmons', accno: 'A/C 0098966556', image: Acc },
        { name: 'Ann Culhane', accno: 'A/C 0098966556', image: Acc2 },
        { name: 'Giana Torff', accno: 'A/C 0098966556', image: Acc3 },
        { name: 'Haylie Schleifer', accno: 'A/C 0098966556', image: Acc4 },
        { name: 'James Franci', accno: 'A/C 0098966556', image: Acc5 }
    ];

    return (
        <>
            <div className='d-flex justify-content-between mb-4'>
                <h5 className="dash-head-1 mb-0">Bank List</h5>
                <button className="dash-head-1 bg-transparent border-0" data-bs-toggle="modal" data-bs-target="#addnewbank">+ Add New</button>
            </div>
            <div className="input-group mb-3 contact-search-f">
                <span className="input-group-text"><IoSearch /></span>
                <input type="text" className="form-control" placeholder="Search Beneficiary" />
            </div>

            <div className='cont-list-height'>
                {banks.map((bank, index) => (
                    <div key={index} className='d-flex flex-row align-items-center mb-2 gap-1'>
                        <LazyLoadImage alt="Prof" src={bank.image} width={55} />
                        <div>
                            <p className='dash-c-txt-1'>{bank.name}</p>
                            <p className='dash-c-txt-2'>{bank.accno}</p>
                        </div>
                        <p className='dash-c-txt-1 ms-auto'><BsThreeDotsVertical /></p>
                    </div>
                ))}
            </div>

            <div className="add-bank-modal modal fade slide-in-from-right" id="addnewbank" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body">
                            <button className="btn-close-red ms-auto" data-bs-dismiss="modal" aria-label="Close"><RxCross2 /></button>
                            <div className="text-center" style={{ marginTop: "-30px" }}>
                                <LazyLoadImage alt="Add" src={Add} width={90} />
                                <h5 style={{ color: "var(--color-1)" }}>Add Bank Account</h5>
                            </div>

                            <form className='mt-4'>
                                <div className="mb-3">
                                    <label className="form-label">Full Name</label>
                                    <input type="text" className="form-control" placeholder='John Doe' />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Bank Name</label>
                                    <input type="text" className="form-control" placeholder="XXXX XXXX XXXX XXXX" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Account Number</label>
                                    <input type="text" className="form-control" placeholder="125478266526" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Re-Account Number</label>
                                    <input type="text" className="form-control" placeholder="125478266526" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Routing Number</label>
                                    <input type="text" className="form-control" placeholder="125478266526" />
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <h6>Save Bank info</h6>
                                    <div className="form-check form-switch">
                                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked={isChecked} onChange={handleCheckboxChange} />
                                    </div>
                                </div>
                                <div class="my-3">
                                    <button class="d-send-btn-1">Done</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BankList;
