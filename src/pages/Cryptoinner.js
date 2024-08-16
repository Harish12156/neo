import binance from "../assets/images/Crypto/binance.png";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { IoIosCopy } from "react-icons/io";
import usdc from "../assets/images/Crypto/CoinUSDC.png";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdSwapVert } from "react-icons/md";
import eth from "../assets/images/Crypto/eth.png";


import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { FaCalendarAlt } from 'react-icons/fa';
import { addDays, subDays, addMonths } from 'date-fns';


import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

import Success from '../assets/images/dashboard/success.gif';
import { CiReceipt } from "react-icons/ci";


function Cryptoinner() {

    const [date, setDate] = useState(new Date());
    const [isCalendarOpen, setIsCalendarOpen] = useState(false);
    const [view, setView] = useState('month'); // 'month', 'year', etc.
    const [range, setRange] = useState([new Date()]);

    const toggleCalendar = () => {
        setIsCalendarOpen(!isCalendarOpen);
    };

    const setDateRange = (type) => {
        let newRange;
        const now = new Date();

        switch (type) {
            case '1D':
                newRange = [now];
                break;
            case '1H':
                newRange = [subDays(now, 1), now];
                break;
            case '3D':
                newRange = [subDays(now, 3), now];
                break;
            case '1W':
                newRange = [subDays(now, 7), now];
                break;
            case '1M':
                newRange = [subDays(now, 30), now];
                break;
            default:
                newRange = [now];
        }

        setRange(newRange);
        setDate(now);
    };





    const [chartOptions, setChartOptions] = useState({
        chart: {
            type: 'candlestick',
            height: 350
        },
        title: {
            text: '',
            align: 'left'
        },
        xaxis: {
            type: 'datetime',
            labels: {
                format: 'dd MMM', // Format for displaying days
            },
            tickAmount: 10 // Adjust this based on your data density
        },
        yaxis: {

            //   min: 100, // Minimum value for y-axis
            //   max: 1000, // Maximum value for y-axis
            //   labels: {
            //     formatter: (value) => `$${value}` // Format y-axis labels as dollar values
            //   }
        }
    });

    const [chartSeries, setChartSeries] = useState([{
        data: [
            { x: new Date(1538778600000), y: [6629.81, 6650.5, 6623.04, 6633.33] },
            { x: new Date(1538780400000), y: [6632.01, 6643.59, 6620, 6630.11] },
            { x: new Date(1538782200000), y: [6630.71, 6648.95, 6623.34, 6635.65] },
            { x: new Date(1538784000000), y: [6635.65, 6651, 6629.67, 6638.24] },
            { x: new Date(1538785800000), y: [6638.24, 6640, 6620, 6624.47] },
            { x: new Date(1538787600000), y: [6624.53, 6636.03, 6621.68, 6624.31] },
            { x: new Date(1538789400000), y: [6624.61, 6632.2, 6617, 6626.02] },
            { x: new Date(1538791200000), y: [6627, 6627.62, 6584.22, 6603.02] },
            { x: new Date(1538793000000), y: [6605, 6608.03, 6598.95, 6604.01] },
            { x: new Date(1538794800000), y: [6604.5, 6614.4, 6602.26, 6608.02] },
            { x: new Date(1538796600000), y: [6608.02, 6610.68, 6601.99, 6608.91] },
            { x: new Date(1538798400000), y: [6608.91, 6618.99, 6608.01, 6612] },
            { x: new Date(1538800200000), y: [6612, 6615.13, 6605.09, 6612] },
            { x: new Date(1538802000000), y: [6612, 6624.12, 6608.43, 6622.95] },
            { x: new Date(1538803800000), y: [6623.91, 6623.91, 6615, 6615.67] },
            { x: new Date(1538805600000), y: [6618.69, 6618.74, 6610, 6610.4] },
            { x: new Date(1538807400000), y: [6611, 6622.78, 6610.4, 6614.9] },
            { x: new Date(1538809200000), y: [6614.9, 6626.2, 6613.33, 6623.45] },
            { x: new Date(1538811000000), y: [6623.48, 6627, 6618.38, 6620.35] },
            { x: new Date(1538812800000), y: [6619.43, 6620.35, 6610.05, 6615.53] },
            { x: new Date(1538814600000), y: [6615.53, 6617.93, 6610, 6615.19] },
            { x: new Date(1538816400000), y: [6615.19, 6621.6, 6608.2, 6620] },
            { x: new Date(1538818200000), y: [6619.54, 6625.17, 6614.15, 6620] },
            { x: new Date(1538820000000), y: [6620.33, 6634.15, 6617.24, 6624.61] },
            { x: new Date(1538821800000), y: [6625.95, 6626, 6611.66, 6617.58] },
            { x: new Date(1538823600000), y: [6619, 6625.97, 6595.27, 6598.86] },
            { x: new Date(1538825400000), y: [6598.86, 6598.88, 6570, 6587.16] },
            { x: new Date(1538827200000), y: [6588.86, 6600, 6580, 6593.4] },
            { x: new Date(1538829000000), y: [6593.99, 6598.89, 6585, 6587.81] },
            { x: new Date(1538830800000), y: [6587.81, 6592.73, 6567.14, 6578] },
            { x: new Date(1538832600000), y: [6578.35, 6581.72, 6567.39, 6579] },
            { x: new Date(1538834400000), y: [6579.38, 6580.92, 6566.77, 6575.96] },
            { x: new Date(1538836200000), y: [6575.96, 6589, 6571.77, 6588.92] },
            { x: new Date(1538838000000), y: [6588.92, 6594, 6577.55, 6589.22] },
            { x: new Date(1538839800000), y: [6589.3, 6598.89, 6589.1, 6596.08] },
            { x: new Date(1538841600000), y: [6597.5, 6600, 6588.39, 6596.25] },
            { x: new Date(1538843400000), y: [6598.03, 6600, 6588.73, 6595.97] }
        ]
    }]);





    const data = [
        {
            id: 1,
            time: "2022-07-22 11:20:00",
            symbol: "Perpetual",
            side: "Sell",
            price: "258.22",
            quantity: "256.32USDT",
            fee: "0.011155455 USDT",
            realizedprofit: "14.22566665548 USDT",
        },
        {
            id: 2,
            time: "2022-07-22 11:20:00",
            symbol: "Perpetual",
            side: "Sell",
            price: "258.22",
            quantity: "256.32USDT",
            fee: "0.011155455 USDT",
            realizedprofit: "14.22566665548 USDT",
        },
        {
            id: 3,
            time: "2022-07-22 11:20:00",
            symbol: "Perpetual",
            side: "Sell",
            price: "258.22",
            quantity: "256.32USDT",
            fee: "0.011155455 USDT",
            realizedprofit: "14.22566665548 USDT",
        },
        {
            id: 4,
            time: "2022-07-22 11:20:00",
            symbol: "Perpetual",
            side: "Sell",
            price: "258.22",
            quantity: "256.32USDT",
            fee: "0.011155455 USDT",
            realizedprofit: "14.22566665548 USDT",
        }


    ];







    return (
        <div className='cryptoinner-section'>
            <div className='cryptoinner-section-one'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-lg-8'>
                            <div className='graph-section p-2 rounded-3'>
                                <div className='d-flex align-items-center justify-content-around py-2 flex-lg-row flex-wrap gap-3'>
                                    <div className='d-flex align-items-center gap-1'>
                                        <LazyLoadImage alt="binance" src={binance} className='' />
                                        <div><div className="text-one">BTC/USDT</div><div className="text-two">Binance</div></div>
                                    </div>
                                    <div><div className="text-three fc-b">129.51 +0,8%</div><div className="text-four">24h changes</div></div>
                                    <div><div className="text-three">37,440.01</div><div className="text-four">24h high</div></div>
                                    <div><div className="text-three">37,440.01</div><div className="text-four">24h low</div></div>
                                    <div><div className="text-three">37,440.01</div><div className="text-four">24h volume(BTC)</div></div>

                                </div>
                                <div className="d-flex align-items-lg-center justify-content-between py-3 flex-md-row flex-column">
                                    <div className="d-flex align-items-lg-center flex-md-row flex-column">
                                        <span className="text-one">Token: 0xfb7...c75a<IoIosCopy className="ms-1" /></span>
                                        <span className="text-one ms-md-3">Pair: 0xa29...7d6d<IoIosCopy className="ms-1" /></span>
                                    </div>

                                    <div className="calendar-container">
                                        <span className="view-buttons">
                                            <button onClick={() => setDateRange('1D')}>1D</button>
                                            <button onClick={() => setDateRange('1H')}>1H</button>
                                            <button onClick={() => setDateRange('3D')}>3D</button>
                                            <button onClick={() => setDateRange('1W')}>1W</button>
                                            <button onClick={() => setDateRange('1M')}>1M</button>
                                        </span>
                                        <button onClick={toggleCalendar} className="calendar-icon-button">
                                            <FaCalendarAlt size={11} />
                                        </button>
                                        {isCalendarOpen && (
                                            <Calendar
                                                onChange={setDate}
                                                value={date}
                                                tileDisabled={({ date }) => date < range[0] || date > range[1]}
                                            />
                                        )}
                                    </div>

                                </div>
                                <div id="chart">
                                    <ReactApexChart options={chartOptions} series={chartSeries} type="candlestick" height={350} />
                                </div>
                                <div id="html-dist"></div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="swap-section p-2 rounded-3">
                                <ul class="nav nav-pills mb-3 nav-justified" id="pills-tab" role="tablist">
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link active" id="pills-buy-tab" data-bs-toggle="pill" data-bs-target="#pills-buy" type="button" role="tab" aria-controls="pills-buy" aria-selected="true">Buy</button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link" id="pills-sell-tab" data-bs-toggle="pill" data-bs-target="#pills-sell" type="button" role="tab" aria-controls="pills-sell" aria-selected="false">Sell</button>
                                    </li>
                                </ul>
                                <div class="tab-content" id="pills-tabContent">
                                    <div class="tab-pane fade show active" id="pills-buy" role="tabpanel" aria-labelledby="pills-buy-tab" tabindex="0">
                                        <div className="d-flex align-items-center py-2 border-bottom-css">
                                            <div className='d-flex align-items-center gap-1'>
                                                <LazyLoadImage alt="binance" src={binance} className='' />
                                                <div><div className="text-one">BTC/USDT</div><div className="text-two">Binance</div></div>
                                            </div>
                                            <div className="ms-auto text-end"><div><div className="text-one fw-bold">0xa010...35B9e1</div><div className="text-two">Metamask wallet</div></div></div>
                                        </div>

                                        <div className="py-4">
                                            <div className='d-flex align-items-center position-relative'>
                                                <div className="flex-grow-1">
                                                    <input type="text" className="form-control custom-placeholder-input" id="from" placeholder="" />
                                                    <div className="custom-placeholder">
                                                        100 <br /> balance ~ 0.00
                                                    </div>
                                                </div>

                                                <div className='from-btn'>
                                                    {/* Button trigger modal */}
                                                    <div className="d-flex align-items-center gap-1 position-absolute end-0" data-bs-toggle="modal" data-bs-target="#myswapFromID">
                                                        <div><LazyLoadImage alt='bitcoin' src={usdc} className='from-img' /></div>
                                                        <div className="text-one">UAH</div>
                                                        <div><MdKeyboardArrowDown className='me-1' /></div>
                                                    </div>

                                                    {/* Modal */}
                                                    <div className="modal fade" id="myswapFromID" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="myswapFromLabel" aria-hidden="true">
                                                        <div className="modal-dialog">
                                                            <div className="modal-content">
                                                                <div className="modal-header">
                                                                    <h1 className="modal-title fs-5" id="myFromLabel">Modal title</h1>
                                                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                                </div>
                                                                <div className="modal-body">
                                                                    ...
                                                                </div>
                                                                <div className="modal-footer">
                                                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                                    <button type="button" className="btn btn-primary">Understood</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="m-auto text-center"><MdSwapVert className='swap-icon' /></div>
                                            <div className='d-flex align-items-center position-relative'>
                                                <div className="flex-grow-1">
                                                    <input type="text" className="form-control custom-placeholder-input" id="from" placeholder="" />
                                                    <div className="custom-placeholder">
                                                        0.052145 <br /> balance ~ 2450.211
                                                    </div>
                                                </div>

                                                <div className='from-btn'>
                                                    {/* Button trigger modal */}
                                                    <div className="d-flex align-items-center gap-1 position-absolute end-0" data-bs-toggle="modal" data-bs-target="#myswaptoID">
                                                        <div><LazyLoadImage alt='eth' src={eth} className='from-img' /></div>
                                                        <div className="text-one">UAH</div>
                                                        <div><MdKeyboardArrowDown className='me-1' /></div>
                                                    </div>

                                                    {/* Modal */}
                                                    <div className="modal fade" id="myswaptoID" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="myswaptoLabel" aria-hidden="true">
                                                        <div className="modal-dialog">
                                                            <div className="modal-content">
                                                                <div className="modal-header">
                                                                    <h1 className="modal-title fs-5" id="myFromLabel">Modal-title</h1>
                                                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                                </div>
                                                                <div className="modal-body">
                                                                    ...
                                                                </div>
                                                                <div className="modal-footer">
                                                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                                    <button type="button" className="btn btn-primary">Understood</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="py-3">
                                            <div className="d-flex align-items-center py-1">
                                                <div className="text-three">Price per USDC</div>
                                                <div className="ms-auto text-end text-three fw-semibold">0.035422 ETH</div>
                                            </div>
                                            <div className="d-flex align-items-center py-1">
                                                <div className="text-three">Price impact</div>
                                                <div className="ms-auto text-end text-three fw-semibold fc-g">0.24 %</div>
                                            </div>
                                        </div>

                                        <div className="py-4">
                                            <button class="done-css" data-bs-toggle="modal" data-bs-target="#buymodal">Buy</button>
                                            {/* <!-- Button trigger modal --> */}

                                            {/* <!-- Modal --> */}
                                            <div class="modal fade buy-modal" id="buymodal" data-bs-keyboard="false" tabindex="-1" aria-labelledby="buymodalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-dialog-centered">
                                                    <div class="modal-content">
                                                        <div class="modal-body text-center py-4 modal-body-circle">
                                                            <LazyLoadImage alt="Prof" src={Success} width={85} />
                                                            <h1 style={{ color: "var(--color-1)" }}>0,0023 BTC</h1>
                                                            <h5 style={{ color: "var(--color-1)" }}></h5>
                                                            <h3 style={{ marginBottom: "100px" }}>$ 50.00</h3>
                                                            {/* <a><h5 style={{ color: "var(--color-1)" }} className='mb-5'><CiReceipt /> View Receipt</h5></a> */}
                                                            <p className='text-muted mb-4'>You have successfully purchased crypto asset, all of your assets will be shown on Wallet menu under your My Assets</p>
                                                            <div className='mb-5'>
                                                                <button className='d-send-btn-1'>Done</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="pills-sell" role="tabpanel" aria-labelledby="pills-sell-tab" tabindex="0">
                                        <div className="d-flex align-items-center py-2 border-bottom-css">
                                            <div className='d-flex align-items-center gap-1'>
                                                <LazyLoadImage alt="binance" src={binance} className='' />
                                                <div><div className="text-one">BTC/USDT</div><div className="text-two">Binance</div></div>
                                            </div>
                                            <div className="ms-auto text-end"><div><div className="text-one fw-bold">0xa010...35B9e1</div><div className="text-two">Metamask wallet</div></div></div>
                                        </div>

                                        <div className="py-4">
                                            <div className='d-flex align-items-center position-relative'>
                                                <div className="flex-grow-1">
                                                    <input type="text" className="form-control custom-placeholder-input" id="from" placeholder="" />
                                                    <div className="custom-placeholder">
                                                        100 <br /> balance ~ 0.00
                                                    </div>
                                                </div>

                                                <div className='from-btn'>
                                                    {/* Button trigger modal */}
                                                    <div className="d-flex align-items-center gap-1 position-absolute end-0" data-bs-toggle="modal" data-bs-target="#myswapFromID">
                                                        <div><LazyLoadImage alt='bitcoin' src={usdc} className='from-img' /></div>
                                                        <div className="text-one">UAH</div>
                                                        <div><MdKeyboardArrowDown className='me-1' /></div>
                                                    </div>

                                                    {/* Modal */}
                                                    <div className="modal fade" id="myswapFromID" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="myswapFromLabel" aria-hidden="true">
                                                        <div className="modal-dialog">
                                                            <div className="modal-content">
                                                                <div className="modal-header">
                                                                    <h1 className="modal-title fs-5" id="myFromLabel">Modal title</h1>
                                                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                                </div>
                                                                <div className="modal-body">
                                                                    ...
                                                                </div>
                                                                <div className="modal-footer">
                                                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                                    <button type="button" className="btn btn-primary">Understood</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="m-auto text-center"><MdSwapVert className='swap-icon' /></div>
                                            <div className='d-flex align-items-center position-relative'>
                                                <div className="flex-grow-1">
                                                    <input type="text" className="form-control custom-placeholder-input" id="from" placeholder="" />
                                                    <div className="custom-placeholder">
                                                        0.052145 <br /> balance ~ 2450.211
                                                    </div>
                                                </div>

                                                <div className='from-btn'>
                                                    {/* Button trigger modal */}
                                                    <div className="d-flex align-items-center gap-1 position-absolute end-0" data-bs-toggle="modal" data-bs-target="#myswaptoID">
                                                        <div><LazyLoadImage alt='eth' src={eth} className='from-img' /></div>
                                                        <div className="text-one">UAH</div>
                                                        <div><MdKeyboardArrowDown className='me-1' /></div>
                                                    </div>

                                                    {/* Modal */}
                                                    <div className="modal fade" id="myswaptoID" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="myswaptoLabel" aria-hidden="true">
                                                        <div className="modal-dialog">
                                                            <div className="modal-content">
                                                                <div className="modal-header">
                                                                    <h1 className="modal-title fs-5" id="myFromLabel">Modal-title</h1>
                                                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                                </div>
                                                                <div className="modal-body">
                                                                    ...
                                                                </div>
                                                                <div className="modal-footer">
                                                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                                    <button type="button" className="btn btn-primary">Understood</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="py-3">
                                            <div className="d-flex align-items-center py-1">
                                                <div className="text-three">Price per USDC</div>
                                                <div className="ms-auto text-end text-three fw-semibold">0.035422 ETH</div>
                                            </div>
                                            <div className="d-flex align-items-center py-1">
                                                <div className="text-three">Price impact</div>
                                                <div className="ms-auto text-end text-three fw-semibold fc-g">0.24 %</div>
                                            </div>
                                        </div>

                                        <div className="py-4">
                                            <button class="done-css" data-bs-toggle="modal" data-bs-target="#sellmodal">Sell</button>
                                            {/* <!-- Modal --> */}
                                            <div class="modal fade buy-modal" id="sellmodal" data-bs-keyboard="false" tabindex="-1" aria-labelledby="sellmodalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-dialog-centered">
                                                    <div class="modal-content">
                                                        <div class="modal-body text-center py-4 modal-body-circle">
                                                            <LazyLoadImage alt="Prof" src={Success} width={85} />
                                                            <h1 style={{ color: "var(--color-1)" }}>0,0023 BTC</h1>
                                                            <h5 style={{ color: "var(--color-1)" }}></h5>
                                                            <h3 style={{ marginBottom: "100px" }}>$ 50.00</h3>
                                                            {/* <a><h5 style={{ color: "var(--color-1)" }} className='mb-5'><CiReceipt /> View Receipt</h5></a> */}
                                                            <p className='text-muted mb-4'>You have successfully purchased crypto asset, all of your assets will be shown on Wallet menu under your My Assets</p>
                                                            <div className='mb-5'>
                                                                <button className='d-send-btn-1'>Done</button>
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
                    </div>
                    <div className="row pt-3 pb-5 trade-section">
                        <div className="col-lg-10 col-12">
                            <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                <li class="nav-item border-end border-secondary-subtle" role="presentation">
                                    <button class="nav-link active" id="pills-tradehistory-tab" data-bs-toggle="pill" data-bs-target="#pills-tradehistory" type="button" role="tab" aria-controls="pills-tradehistory" aria-selected="true">Trade History</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="pills-mytrade-tab" data-bs-toggle="pill" data-bs-target="#pills-mytrade" type="button" role="tab" aria-controls="pills-mytrade" aria-selected="false">My Trade</button>
                                </li>
                            </ul>
                            <div class="tab-content" id="pills-tabContent">
                                <div class="tab-pane fade show active" id="pills-tradehistory" role="tabpanel" aria-labelledby="pills-tradehistory-tab" tabindex="0">
                                    <div className="cryto-table">
                                        <div className="crypto-table-options">
                                            <div className="option-btn">1 day</div>
                                            <div className="option-btn">1 week</div>
                                            <div className="option-btn">1 month</div>
                                            <div className="option-btn">3 month</div>
                                            <form className="d-flex align-items-center"><input type="text" className="search-input" placeholder="YYYY-MM-DD-YYYY-MM-DD" /><button type="submit" className="search-btn">Search</button></form>
                                        </div>
                                        <table className="cryto-table-section border-0">

                                            <thead>
                                                <tr>
                                                    <th>Time</th>
                                                    <th>Symbol</th>
                                                    <th>Side</th>
                                                    <th>Price</th>
                                                    <th>Quantity</th>
                                                    <th>Fee</th>
                                                    <th>Realized Profit</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {data.map((item) => (
                                                    <tr key={item.id}>
                                                        <td>{item.time}</td>
                                                        <td><span className="fw-semibold me-2">BNBUSD</span>{item.symbol}</td>
                                                        <td className="fc-r fw-bold">{item.side}</td>
                                                        <td>{item.price}</td>
                                                        <td>{item.quantity}</td>
                                                        <td>{item.fee}</td>
                                                        <td>{item.realizedprofit}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="pills-mytrade" role="tabpanel" aria-labelledby="pills-mytrade-tab" tabindex="0">
                                    <div className="cryto-table">
                                        <div className="crypto-table-options">
                                            <div className="option-btn">1 day</div>
                                            <div className="option-btn">1 week</div>
                                            <div className="option-btn">1 month</div>
                                            <div className="option-btn">3 month</div>
                                            <form className="d-flex align-items-center"><input type="text" className="search-input" placeholder="YYYY-MM-DD-YYYY-MM-DD" /><button type="submit" className="search-btn">Search</button></form>
                                        </div>
                                        <table className="cryto-table-section border-0">

                                            <thead>
                                                <tr>
                                                    <th>Time</th>
                                                    <th>Symbol</th>
                                                    <th>Side</th>
                                                    <th>Price</th>
                                                    <th>Quantity</th>
                                                    <th>Fee</th>
                                                    <th>Realized Profit</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {data.map((item) => (
                                                    <tr key={item.id}>
                                                        <td>{item.time}</td>
                                                        <td><span className="fw-semibold me-2">BNBUSD</span>{item.symbol}</td>
                                                        <td className="fc-r fw-bold">{item.side}</td>
                                                        <td>{item.price}</td>
                                                        <td>{item.quantity}</td>
                                                        <td>{item.fee}</td>
                                                        <td>{item.realizedprofit}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
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
export default Cryptoinner