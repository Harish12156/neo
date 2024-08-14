import React from 'react'
import { MdKeyboardArrowDown, MdSwapVert } from 'react-icons/md'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import withdraw from "../../../assets/images/Crypto/Withdraw.png";
import bitcoin from "../../../assets/images/Crypto/Bitcoin.png";
import bitcointwo from "../../../assets/images/Crypto/Bitcoin-two.png";

function Cryptotofiat() {
    return (
        <div className='exchange mt-4'>
            <h5 className='mb-3'><LazyLoadImage alt='withdraw' src={withdraw} className='me-2'></LazyLoadImage> Crypto To Fait</h5>
            <div className='card dash-card-1'>
                <div className='card-body'>

                
                <div className='d-flex align-items-center'>
                    <div class="">
                        <label for="from" class="form-label">FROM</label>
                        <input type="text" class="form-control" id="from" placeholder="i give" />
                    </div>

                    <div className='from-btn mt-4'>
                        {/* <!-- Button trigger modal --> */}
                        <div class="d-flex align-items-center gap-2">
                            <div><LazyLoadImage alt='bitcoin' src={bitcoin} className='' /></div>
                            <div>USD</div>
                            <div><MdKeyboardArrowDown className='' /></div>
                        </div>
                    </div>
                </div>

                <div className=' pt-2 text-center'>
                    <MdSwapVert className='swap-icon' />
                </div>

                <div className='d-flex align-items-center'>
                    <div class="">
                        <label for="to" class="form-label">TO</label>
                        <input type="text" class="form-control" id="to" placeholder="i receive" />
                    </div>

                    <div className='from-btn mt-4'>
                        <div class="d-flex align-items-center gap-2">
                            <div><LazyLoadImage alt='bitcoin' src={bitcointwo} className='' /></div>
                            <div>ADA</div>
                            <div><MdKeyboardArrowDown className='' /></div>
                        </div>
                    </div>
                </div>

                <div className='my-3 fees-sec'>
                    <div className='d-flex align-items-center justify-content-between py-2' style={{ borderBottom: "1px solid #000" }}>
                        <div className='fees-text'>Fee:</div><div className='fees-text'>12</div>
                    </div>
                    <div className='d-flex align-items-center justify-content-between py-2'>
                        <div className='fees-text'>Amount Received</div><div className='fees-text'>12</div>
                    </div>
                </div>

                <div className='mt-4 mb-3'>
                    <button className='d-send-btn-1'>Done</button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Cryptotofiat
