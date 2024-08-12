import React, { useState } from 'react';
import { PiDotsThreeOutlineFill } from "react-icons/pi";
import { IoIosArrowDown } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Airbnb from '../../../assets/images/dashboard/transaction/Airbnb.png';
import Person1 from '../../../assets/images/dashboard/transaction/person-1.png';
import Person2 from '../../../assets/images/dashboard/transaction/person-2.png';
import Netflix from '../../../assets/images/dashboard/transaction/Netflix.png';
import Spotify from '../../../assets/images/dashboard/transaction/Spotify.png';
import Trans21 from '../../../assets/images/dashboard/transaction/1.png';
import Trans22 from '../../../assets/images/dashboard/transaction/2.png';
import Trans23 from '../../../assets/images/dashboard/transaction/3.png';
import Trans24 from '../../../assets/images/dashboard/transaction/4.png';

function Transactions() {
    const [transactions] = useState([
        { id: 1, name: 'Airbnb', category: 'Rental', amount: '- 53,937.48 $', time: '9:10 PM', image: Airbnb },
        { id: 2, name: 'Sara & Tyler', category: 'Send to your friends', amount: '- 30,000 $', time: '6:50 PM', image: Person1, image2: Person2 },
        { id: 3, name: 'Netflix', category: 'Streaming Service', amount: '- 2,100 $', time: '2:30 PM', image: Netflix },
        { id: 4, name: 'Spotify', category: 'Music Platform', amount: '- 1,500.99 $', time: '11:00 AM', image: Spotify }
    ]);

    const [transactions2] = useState([
        { id: 1, name: 'Baskin-Robbins', category: 'Restaurants & Cafes', amount: '- 5,130.29 $', time: '8:15 PM', image: Trans21 },
        { id: 2, name: 'Marita Covarrubias', category: 'Transfer', amount: '- 15,000 $', time: '3:30 PM', image: Trans22 },
        { id: 3, name: 'McDonald’s', category: 'Restaurants & Cafes', amount: '- 3,270.80 $', time: '11:20 AM', image: Trans23 },
        { id: 4, name: 'BP', category: 'Gas station', amount: '- 4,120.35 $', time: '10:50 AM', image: Trans24 }
    ]);

    const formatAmount = (amount) => {
        const [sign, number] = amount.split(' ');
        const [whole, decimal] = number.split('.');

        // Apply green color for specific amount
        const isSpecialAmount = amount === '- 15,000 $';

        return (
            <span style={{ color: isSpecialAmount ? '#32D74B' : 'inherit' }}>
                <span>{sign}</span> <span className='fw-bold'>{whole}</span>
                {decimal && <span>.{decimal}</span>} <span>{'$'}</span>
            </span>
        );
    };

    return (
        <div className='dash-trans-sec'>
            <div className="card dash-card-1">
                <div className="card-body">
                    <div className='d-flex align-items-center justify-content-between mb-2'>
                        <h5 className='dash-head-1'>Transaction</h5>
                        <h4><PiDotsThreeOutlineFill /></h4>
                    </div>
                    <div className="d-flex gap-2 align-items-center mb-3">
                        <button type="button" className='dash-trans-arrow-btn' data-bs-toggle="collapse" data-bs-target="#collapsetrans1" aria-expanded="true" aria-controls="collapsetrans1">
                            <IoIosArrowDown />
                        </button>
                        <h6 className='mb-0 ms-3'>07 Apr, 2021</h6>
                        <div className='ms-auto'><button type="button" className='dash-trans-btn-1'><IoSearchOutline /></button></div>
                        <div><button type="button" className='dash-trans-btn-1'><IoSearchOutline /></button></div>
                    </div>
                    <div className="collapse show" id="collapsetrans1">
                        <div className='dash-trans-table'>
                            {transactions.map((transaction) => (
                                <div className='d-flex flex-row gap-3 mb-4' key={transaction.id}>
                                    {transaction.image2 ? (
                                        <div className='d-flex'>
                                            <LazyLoadImage alt={`${transaction.name} logo`} src={transaction.image} className='dash-trans-img-2' />
                                            <LazyLoadImage alt={`${transaction.name} logo`} src={transaction.image2} className='dash-trans-img-2 dash-trans-img-2-2' />
                                        </div>
                                    ) : (
                                        <div>
                                            <LazyLoadImage alt={`${transaction.name} logo`} src={transaction.image} className='dash-trans-img-1' />
                                        </div>
                                    )}
                                    <div>
                                        <h6 className='mb-0 dash-trans-txt-1 fw-bold'>{transaction.name}</h6>
                                        <p className='mb-0 dash-trans-txt-2'>{transaction.category}</p>
                                    </div>
                                    <div className='ms-auto text-end'>
                                        <h6 className='mb-0 dash-trans-txt-1'>{formatAmount(transaction.amount)}</h6>
                                        <p className='mb-0 dash-trans-txt-2'>{transaction.time}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="d-flex gap-2 align-items-center mb-3">
                        <button type="button" className='dash-trans-arrow-btn-2' data-bs-toggle="collapse" data-bs-target="#collapsetrans2" aria-expanded="true" aria-controls="collapsetrans2">
                            06 Apr, 2021
                        </button>
                    </div>
                    <div className="collapse show" id="collapsetrans2">
                        <div className='dash-trans-table'>
                            {transactions2.map((transaction) => (
                                <div className='d-flex flex-row gap-3 mb-4' key={transaction.id}>
                                    <div>
                                        <LazyLoadImage alt={`${transaction.name} logo`} src={transaction.image} className='dash-trans-img-1' />
                                    </div>
                                    <div>
                                        <h6 className='mb-0 dash-trans-txt-1 fw-bold'>{transaction.name}</h6>
                                        <p className='mb-0 dash-trans-txt-2'>{transaction.category}</p>
                                    </div>
                                    <div className='ms-auto text-end'>
                                        <h6 className='mb-0 dash-trans-txt-1'>{formatAmount(transaction.amount)}</h6>
                                        <p className='mb-0 dash-trans-txt-2'>{transaction.time}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Transactions;
