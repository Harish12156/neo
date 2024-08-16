import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import USD from "../../../assets/images/account/coin/USD.png";
import Baht from "../../../assets/images/account/coin/Baht.png";
import Ruble from "../../../assets/images/account/coin/Ruble.png";
import Peso from "../../../assets/images/account/coin/Peso.png";

import graph from "../../../assets/images/account/graph/graphs.png";
import graph1 from "../../../assets/images/account/graph/graphs-1.png";
import graph2 from "../../../assets/images/account/graph/graphs-2.png";


const data = [
    {
        id: 1,
        currency: 'USD Dollar',
        pair: 'USDT',
        change: '+14.02%',
        price: '39,786 USD',
        img: USD,
        graph: graph,
    },
    {
        id: 2,
        currency: 'Thai Baht',
        pair: 'THB',
        change: '+4.02%',
        price: '21,786 USD',
        img: Baht,
        graph: graph1,
    },
    {
        id: 3,
        currency: 'Russian Ruble',
        pair: 'RUB',
        change: '-4.02%',
        price: '9,786 USD',
        img: Ruble,
        graph: graph,
    },
    {
        id: 4,
        currency: 'Philippine Peso',
        pair: 'PHP',
        change: '+0.02%',
        price: '4,786 USD',
        img: Peso,
        graph: graph2,
    },
    {
        id: 5,
        currency: 'Thai Baht',
        pair: 'THB',
        change: '+4.02%',
        price: '21,786 USD',
        img: Baht,
        graph: graph1,
    },
    {
        id: 6,
        currency: 'Russian Ruble',
        pair: 'RUB',
        change: '-4.02%',
        price: '9,786 USD',
        img: Ruble,
        graph: graph,
    },
];

function FiatCurrency() {
    return (
        <div className="card dash-card-1 mt-4">
            <div className="card-body cryto-section">
                <h2 className='dash-head-1 mb-4'>Live Market</h2>
                <div className='table-size'>
                    <table className='livemarket-table my-3 table'>
                        <tbody>
                            {data.map((item) => (
                                <tr key={item.id}>
                                    <td>
                                        <div className='d-flex align-items-center gap-3'>
                                            <div><LazyLoadImage alt={item.currency} src={item.img} className='acc-img-c-1' /></div>
                                            <div>
                                                <h6 className='text-one'>{item.currency}</h6>
                                                <div className='text-two'>{item.pair}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className='text-three mb-2'>Change</div>
                                        <div className={item.change.startsWith('+') ? 'text-four fc-g' : 'text-four fc-r'}>{item.change}</div>
                                    </td>
                                    <td>
                                        <div className='text-three mb-2'>Price</div>
                                        <div className='text-five'>{item.price}</div>
                                    </td>
                                    <td>
                                        <div><LazyLoadImage alt="Graph" src={item.graph} className='graph-size' /></div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default FiatCurrency;
