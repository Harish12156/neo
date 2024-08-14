import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { CiCalendar } from 'react-icons/ci';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Icon1 from '../../../assets/images/dashboard/data/icon/1.png';
import Icon2 from '../../../assets/images/dashboard/data/icon/2.png';
import Icon3 from '../../../assets/images/dashboard/data/icon/3.png';
import Icon4 from '../../../assets/images/dashboard/data/icon/4.png';
import { IoMdArrowRoundUp } from 'react-icons/io';

import { RiShoppingCart2Line, RiMovie2Line, RiCarLine, RiHotelLine, RiGiftLine } from "react-icons/ri";

function Dataright() {

    const progressBarData = [
        { percentage: 60, label: "Income", amount: "$ 22,600.00", pathColor: "#CDEAA9" },
        { percentage: 80, label: "Outcome", amount: "$ 22,600.00", pathColor: "#F18F8F" },
        { percentage: 60, label: "Savings", amount: "$ 22,600.00", pathColor: "#5ABF73" },
    ];
    const transactionData = [
        { icon: <RiShoppingCart2Line />, backgroundColor: "#F18F8F", title: "Food Shopping", date: "July 16", amount: "-$400.00", color: "#8950DA" },
        { icon: <RiMovie2Line />, backgroundColor: "#CDEAA9", title: "Movies", date: "July 17", amount: "-$50.00", color: "#8A50DA" },
        { icon: <RiCarLine />, backgroundColor: "#5ABF73", title: "Car Rental", date: "July 18", amount: "-$200.00", color: "#3B50DA" },
        { icon: <RiHotelLine />, backgroundColor: "#F1BF73", title: "Hotel Booking", date: "July 19", amount: "-$600.00", color: "#F050DA" },
        { icon: <RiGiftLine />, backgroundColor: "#AFAF73", title: "Gift Purchase", date: "July 20", amount: "-$120.00", color: "#9050DA" },
    ];
    const [chartOptions, setChartOptions] = useState({
        series: [{
            name: 'Income',
            data: [20000, 23000, 18000, 14000, 14200, 10000, 20000] // Your data here
        }],
        options: {
            chart: {
                height: 250,
                type: 'area',
                toolbar: {
                    show: false
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'smooth',
                colors: ['#8950DA'],
                width: 3,
                hover: {
                    color: '#FF5733'
                }
            },
            markers: {
                colors: ['var(--color-1)'],
                strokeColors: ['#00000080'],
                strokeWidth: 2,
                hover: {
                    size: 7,
                    strokeWidth: 3,
                    fillColor: '#FF5733',
                    strokeColor: '#FF5733'
                }
            },
            fill: {
                type: 'gradient',
                gradient: {
                    shadeIntensity: 1,
                    opacityFrom: 0.7,
                    opacityTo: 0.2,
                    stops: [0, 90, 100],
                    colorStops: [
                        {
                            offset: 0,
                            color: '#FFF',
                            opacity: 0.7
                        },
                        {
                            offset: 100,
                            color: '#FFF',
                            opacity: 0.2
                        }
                    ]
                }
            },
            xaxis: {
                type: 'category',
                categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                labels: {
                    style: {
                        colors: '#8A8A8A'
                    }
                },
                axisBorder: {
                    show: false, // Disable x-axis border
                },
                axisTicks: {
                    show: false, // Disable x-axis ticks if needed
                },
                tooltip: {
                    enabled: false
                },
                crosshairs: {
                    show: true,
                    width: 40,
                    color: '#8950DA33',
                    fill: {
                        type: 'solid',
                        color: '#8950DA33',
                        gradient: {
                            colorFrom: '#8950DA33',
                            colorTo: '#8950DA33',
                            stops: [0, 100],
                            opacityFrom: 0.4,
                            opacityTo: 0.5,
                        },
                    },
                }
            },
            yaxis: {
                min: 0,
                max: 30000,
                tickAmount: 3,
                labels: {
                    formatter: function (val) {
                        return (val / 1000) + 'k';
                    },
                    style: {
                        colors: '#8A8A8A'
                    }
                },

            },
            tooltip: {
                x: {
                    format: 'dd/MM/yy HH:mm'
                },
                marker: {
                    show: true,
                    fillColors: ['#8950DA']
                },
                style: {
                    background: '#D8C7F1'
                }
            },

        }
    });

    return (
        <div className="dash-trans-sec card dash-card-1 h-100">
            <div className="card-body">
                <div className='d-flex align-items-center justify-content-between mb-0'>
                    <h5 className='dash-head-1'>Data</h5>
                    <h4 className='fc-y'><CiCalendar /></h4>
                </div>
                <h6 className='fc-y'>Current Month</h6>
                <div className='data-month-tabs'>
                    <ul class="nav nav-pills nav-justified gap-2 flex-nowrap" id="pills-tab" role="tablist">
                        <li class="nav-item" role="presentation">
                            <span>2023</span>
                            <button class="nav-link active" id="pills-Jan-tab" data-bs-toggle="pill" data-bs-target="#pills-Jan" type="button" role="tab" aria-controls="pills-Jan" aria-selected="true">Jan</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <span>2023</span>
                            <button class="nav-link" id="pills-Feb-tab" data-bs-toggle="pill" data-bs-target="#pills-Feb" type="button" role="tab" aria-controls="pills-Feb" aria-selected="false">Feb</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <span>2023</span>
                            <button class="nav-link" id="pills-Mar-tab" data-bs-toggle="pill" data-bs-target="#pills-Mar" type="button" role="tab" aria-controls="pills-Mar" aria-selected="false">Mar</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <span>2023</span>
                            <button class="nav-link" id="pills-Apr-tab" data-bs-toggle="pill" data-bs-target="#pills-Apr" type="button" role="tab" aria-controls="pills-Apr" aria-selected="false">Apr</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <span>2023</span>
                            <button class="nav-link" id="pills-May-tab" data-bs-toggle="pill" data-bs-target="#pills-May" type="button" role="tab" aria-controls="pills-May" aria-selected="false">May</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <span>2023</span>
                            <button class="nav-link" id="pills-Jun-tab" data-bs-toggle="pill" data-bs-target="#pills-Jun" type="button" role="tab" aria-controls="pills-Jun" aria-selected="false">Jun</button>
                        </li>
                    </ul>
                </div>

                <ReactApexChart className="dash-data-chart" options={chartOptions.options} series={chartOptions.series} type="area" height={250} />

                <div className='dash-data-card-1-1'>
                    <div className='row'>
                        {progressBarData.map((data, index) => (
                            <div className='col-4' key={index}>
                                <div className='col-7 mx-auto'>
                                    <CircularProgressbar
                                        value={data.percentage}
                                        text={`${data.percentage}%`}
                                        background
                                        backgroundPadding={-0.4}
                                        strokeWidth={18}
                                        styles={buildStyles({
                                            strokeLinecap: "butt",
                                            backgroundColor: "#000",
                                            textColor: "#fff",
                                            pathColor: data.pathColor,
                                            trailColor: "#D8D8D8"
                                        })}
                                    />
                                </div>
                                <div className='dash-data-card-1-2'>
                                    <span className='data-card-txt-2'>{data.label}</span>
                                    <p className='mb-0 data-card-txt-1'>{data.amount}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className='dash-data-card-3 mt-3 pe-3'>
                    <div className='d-flex flex-row justify-content-between align-items-center mb-3'>
                        <div>
                            <p className='mb-1 fc-y data-card-txt-4'> Monthly Budget</p>
                            <h5 className='data-card-txt-3'><span className='fc-y'>$14500/</span><span className='text-muted'>$253,00</span></h5>
                        </div>
                        <div className='d-flex'>
                            <LazyLoadImage alt="Icon1" src={Icon1} className="data-card-img-1" />
                            <LazyLoadImage alt="Icon2" src={Icon2} className="data-card-img-1" />
                            <LazyLoadImage alt="Icon3" src={Icon3} className="data-card-img-1" />
                            <LazyLoadImage alt="Icon4" src={Icon4} className="data-card-img-1" />
                        </div>
                    </div>

                    <p className='mb-0 data-card-txt-5'><IoMdArrowRoundUp className='data-card-icon-1' />Daily budget was ($26.45 - 45.33), Saved $340</p>
                </div>

                <p className='mb-2 fc-y data-card-txt-4 mt-3'> All Transactions</p>
                {transactionData.map((transaction, index) => (
                    <div className='dash-data-card-4 d-flex gap-2 align-items-center mb-3' key={index}>
                        <div className='goals-img-3 px-2' style={{ backgroundColor: transaction.backgroundColor }}>
                            {transaction.icon}
                        </div>
                        <div>
                            <p className='mb-0 data-card-txt-6'>{transaction.title}</p>
                            <p className='mb-0 data-card-txt-6 opacity-50'>{transaction.date}</p>
                        </div>
                        <span className='data-card-txt-7 ms-auto' style={{ color: transaction.color }}>{transaction.amount}</span>
                    </div>
                ))}

            </div>
        </div>
    );
}

export default Dataright;
