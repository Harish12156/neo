import React, { useState } from 'react';
import Btc from '../../assets/images/dashboard/assets/btc.png';
import Eth from '../../assets/images/dashboard/assets/eth.png';
import Sol from '../../assets/images/dashboard/assets/sol.png';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import { LuMoveDownRight, LuMoveUpRight } from 'react-icons/lu';
import ReactApexChart from 'react-apexcharts';

const assets = [
    {
        name: 'Bitcoin',
        imgSrc: Btc,
        amount: '0.6542 BTC',
        value: '$48,021.04',
        percentageChange: '+2.05%',
        icon: <LuMoveUpRight />,
        colorClass: 'fc-g'
    },
    {
        name: 'Ethereum',
        imgSrc: Eth,
        amount: '0.6542 ETH',
        value: '$48,021.04',
        percentageChange: '+0.05%',
        icon: <LuMoveDownRight />,
        colorClass: 'fc-r'
    },
    {
        name: 'Solana',
        imgSrc: Sol,
        amount: '0.6542 SOL',
        value: '$48,021.04',
        percentageChange: '+2.05%',
        icon: <LuMoveUpRight />,
        colorClass: 'fc-g'
    }
];

function Dashboardmain() {
    const [chartOptions, setChartOptions] = useState({
        series: [{
            name: 'Income',
            data: [31000, 40000, 28000, 51000, 42000, 109000, 100000] // Your data here
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
                colors: ['#8950DA']
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
                            color: '#8950DA',
                            opacity: 0.7
                        },
                        {
                            offset: 100,
                            color: '#8950DA',
                            opacity: 0.2
                        }
                    ]
                }
            },
            xaxis: {
                type: 'category',
                categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                labels: {
                    style: {
                        colors: '#BCBCBC'
                    }
                }
            },
            yaxis: {
                min: 0,
                max: 120000,
                tickAmount: 6,
                labels: {
                    formatter: function (val) {
                        return (val / 1000) + 'k';
                    },
                    style: {
                        colors: '#BCBCBC'
                    }
                }
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
        <div>
            <div className="card dash-card-1 mt-4">
                <div className="card-body">
                    <h5 className="dash-head-1 mb-4">My Assets</h5>
                    <div className='row row-cols-1 row-cols-md-3'>
                        {assets.map((asset, index) => (
                            <div className='col' key={index}>
                                <div className="card dash-card-2">
                                    <div className="card-body">
                                        <div className='d-flex gap-2 align-items-center'>
                                            <LazyLoadImage alt={asset.name} src={asset.imgSrc} className='dash-asset-img-2' />
                                            <p className='mb-0 dash-assets-txt-1'>{asset.name}</p>
                                            <div className={`ms-auto dash-assets-txt-1 ${asset.colorClass}`}>
                                                <span>{asset.percentageChange} {asset.icon}</span>
                                            </div>
                                        </div>
                                        <div className='mt-3 d-flex'>
                                            <h6 className='mb-0'>{asset.amount}</h6>
                                            <span className='dash-assets-txt-2 ms-auto'>{asset.value}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="card dash-card-1 mt-4">
                <div className="card-body">
                    <div className='d-flex flex-row'>
                        <h5 className="dash-head-1 mb-4">Balance Statistic</h5>
                        <div className='ms-auto'>
                            <select className="form-select-monthly form-select" aria-label="Default select example">
                                <option selected>Monthly</option>
                                <option value="1">Yearly</option>
                            </select>
                        </div>
                    </div>
                    <div className='dash-ball-chart'>
                        <ReactApexChart options={chartOptions.options} series={chartOptions.series} type="area" height={250} />

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboardmain;
