import React from 'react';
import Btc from '../../../assets/images/dashboard/assets/btc.png';
import Eth from '../../../assets/images/dashboard/assets/eth.png';
import Sol from '../../../assets/images/dashboard/assets/sol.png';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import { LuMoveDownRight, LuMoveUpRight } from 'react-icons/lu';

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

function Myassets() {


    return (
            <div className="card dash-card-1 mt-4">
                <div className="card-body">
                    <h5 className="dash-head-1 mb-4">My Assets</h5>
                    <div className='row row-cols-1 row-cols-md-2 row-cols-lg-2 row-cols-xl-3 g-4'>
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
    );
}

export default Myassets;
