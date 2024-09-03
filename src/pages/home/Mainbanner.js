import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Banner from "../../assets/images/home/banner.png";

function Mainbanner() {
  return (
    <div className='bef-login-home-sec'>
      <section class="bef-login-home-sec-1">
        <div class="bef-login-home-sec-1-1">
          <div class="container">
            <div class="row g-4 flex-lg-row-reverse">
              <div class="col-lg-6 col-8">
                <LazyLoadImage src={Banner} alt="Acc" className='img-fluid' />
              </div>
              <div class="col-lg-6">
                <h2 class="mb-4 bef-l-text-1">Lorem ipsum</h2>
                <h2 class="mb-4 bef-l-text-2">Lorem ipsum dolor sit amet</h2>
                <div className='mb-5'>
                  <button className='bef-l-btn-1'>Try for free <FaArrowRightLong className='ms-3' /></button>
                </div>
                <p>Already have an account ?</p>
                <div>
                  <button className='bef-l-btn-1'>Login <FaArrowRightLong className='ms-3' /></button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>


    </div>
  )
}

export default Mainbanner
