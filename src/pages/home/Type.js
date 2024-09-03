import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Business from "../../assets/images/home/Business.jpg";
import Individuals from "../../assets/images/home/Individuals.png";
import { Link } from 'react-router-dom';

function Type() {
  return (
    <div className='bef-login-home-sec bef-login-two-tab-sec'>
        <div class="container py-4">
          <h2 class="mb-5 bef-l-text-1 text-center">Lorem ipsum</h2>

          <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 justify-content-center">
            <div class="col">
              <div class="card text-center">
                <div class="card-body">
                  <Link to="" className='bef-b-login-1 w-auto py-2 rounded-pill'>For Business</Link>
                  <LazyLoadImage src={Business} alt='Business' className='img-fluid' />
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card text-center">
                <div class="card-body">
                  <Link to="/signin" className='bef-b-login-1 w-auto py-2 rounded-pill'>For Individuals</Link>
                  <LazyLoadImage src={Individuals} alt='Individuals' className='img-fluid' />
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Type
