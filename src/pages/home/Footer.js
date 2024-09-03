import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6';

function Footer() {
  return (
    <>
   
    <section class="bef-login-home-sec-2">
    <div class="container">
      <div class="row g-4">
        <div class="col-lg-6 ">
          <h2 class="mb-4 bef-l-text-2">Create your free account today!</h2>
        </div>
        <div class="col-lg-6 text-center">
          <button className='bef-b-login-1 w-auto py-3 rounded-pill'>Try for free <FaArrowRightLong className='ms-3' /></button>
        </div>
      </div>
    </div>
  </section>

    <div className='bef-login-home-sec-foot'>
      <div class="container">
        <div class="d-flex flex-lg-row flex-column gap-3">
          <div className='d-flex d-row gap-3'>
            <a href=''>Home</a>
            <a href=''>Contact</a>
            <a href=''>Privacy Policy</a>
            <a href=''>SignIn</a>
            <a href=''>Signup</a>
          </div>
          <div class="ms-lg-auto">
            <a href=''>Copyrights © 2024 Rempic</a>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Footer;
