import Acc from '../../../assets/images/dashboard/account/1.png';
import Acc2 from '../../../assets/images/dashboard/account/2.png';
import Acc3 from '../../../assets/images/dashboard/account/3.png';
import Acc4 from '../../../assets/images/dashboard/account/4.png';
import Acc5 from '../../../assets/images/dashboard/account/5.png';


import { LazyLoadImage } from 'react-lazy-load-image-component';
import { IoSearch } from 'react-icons/io5';
import { BsThreeDotsVertical } from 'react-icons/bs';


function BankList() {

    const banks = [
        { name: 'Brooklyn Simmons', accno: 'A/C 0098966556', image: Acc },
        { name: 'Ann Culhane', accno: 'A/C 0098966556', image: Acc2 },
        { name: 'Giana Torff', accno: 'A/C 0098966556', image: Acc3 },
        { name: 'Haylie Schleifer', accno: 'A/C 0098966556', image: Acc4 },
        { name: 'James Franci', accno: 'A/C 0098966556', image: Acc5 }
    ];
    return (
        <>
            <div className='d-flex justify-content-between'>
                <h5 className="dash-head-1 mb-4">Bank List</h5>
                <h5 className="dash-head-1 mb-4">+ Add New</h5>

            </div>
            <div className="input-group mb-3 contact-search-f">
                <span className="input-group-text"><IoSearch /></span>
                <input type="text" className="form-control" placeholder="Search Beneficiary" />
            </div>

            <div className='cont-list-height'>
                {banks.map((bank, index) => (
                    <div key={index} className='d-flex flex-row align-items-center mb-2 gap-1'>
                        <LazyLoadImage alt="Prof" src={bank.image} width={65} />
                        <div>
                            <p className='dash-c-txt-1'>{bank.name}</p>
                            <p className='dash-c-txt-2'>{bank.accno}</p>
                        </div>
                        <p className='dash-c-txt-1 ms-auto'><BsThreeDotsVertical /></p>
                    </div>
                ))}
            </div>
        </>
    );
}

export default BankList;
