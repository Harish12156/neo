import React, { useState, useEffect } from 'react'
import PhoneInput from 'react-phone-input-2';
import tick from "../../assets/images/home/tick.png";
import { Link } from 'react-router-dom';
import videocall from "../../assets/images/home/videocall.png";

function Accountsection() {

  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('us');

  const placeholders = {
    us: '(201) 555-0123',
    gb: '07400 123456',
    fr: '06 12 34 56 78',
    de: '0151 23456789',
    in: '091234 56789',
  };

  return (
    <div className='accountsection'>
      <div className='bef-login-home-sec pb-5'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-6'>
              <div className='card dash-card-1'>
                <div className='card-body'>
                  <h5 className='dash-head-1 mb-5 text-center'>Account</h5>
                  <h5 className='dash-head-1 mb-3'>What is your mobile Number</h5>
                  <div className='profile-section-one'>
                    <div className="mb-3">
                      <label htmlFor="phone" className="form-label">Phone Number</label>
                      <PhoneInput
                        country={country}
                        value={phone}
                        onChange={(value, countryData) => {
                          setPhone(value);
                          setCountry(countryData.countryCode);
                        }}
                        placeholder={placeholders[country] || 'Enter phone number'}
                        inputProps={{
                          name: 'phone',
                          id: 'phone',
                          className: 'form-control',
                        }}
                      />
                    </div>
                    <h5 className='dash-head-1 mb-3'>What is your Current Address</h5>
                    <div className="mb-3">
                      <label htmlFor="country" className="form-label">Country</label>
                      <input type="text" className="form-control" placeholder="1245715251" />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="city" className="form-label">City</label>
                      <input type="text" className="form-control" placeholder="1245715251" />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="zipcode" className="form-label">Zip Code</label>
                      <input type="text" className="form-control" placeholder="1245715251" />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="apartment" className="form-label">Apartment no etc</label>
                      <input type="text" className="form-control" placeholder="1245715251" />
                    </div>
                    <div className="mb-5">
                      <label htmlFor="number" className="form-label">Street and house number</label>
                      <input type="text" className="form-control" placeholder="1245715251" />
                    </div>
                    <div className='mb-3'>
                      <div className='d-flex align-items-center gap-4'>
                        <div><img src={tick} alt='correct' className='' /></div>
                        <div>
                          <h6 className='semibold border-bottom border-light-subtle pb-2'>+91 9876543210</h6>
                          <p className='dash-trans-txt-2  border-bottom border-light-subtle pb-2'>We will send you an Ident code to this mobile number via SMS during the identification.</p>
                        </div>
                      </div>
                    </div>
                    <div className='mb-3'>
                      <div className='d-flex align-items-center gap-4'>
                        <div><img src={tick} alt='correct' className='' /></div>
                        <div>
                          <h6 className='semibold pb-2'>Your readily available identity document</h6>
                          <p className='dash-trans-txt-2  border-bottom border-light-subtle pb-2'>Your identity document will be checked during
                            the identification, so please have it ready and
                            at hand.</p>
                        </div>
                      </div>
                    </div>
                    <div className='mb-3'>
                      <div className='d-flex align-items-center gap-4'>
                        <div><img src={tick} alt='correct' className='' /></div>
                        <div>
                          <h6 className='semibold pb-2'>Consent</h6>
                          <p className='dash-trans-txt-2  border-bottom border-light-subtle pb-2'>I agree to the Dnow terms of Service and
                            have read the Privacy Policy. I give my explicit
                            consent that.</p>
                        </div>
                      </div>
                    </div>
                    <div className='mb-5 ms-5'>
                      <Link to='' className=''><h6 className='semibold pb-2 text-dark'>Terms of Service</h6></Link>
                      <Link to='' className=''><h6 className='semibold pb-2 text-dark'>Privacy Policy</h6></Link>
                    </div>
                    <div className='mb-3'>
                      <h5 className='dash-head-1 mb-3 text-center'>Time to verify your identity with a short video call</h5>
                      <div className='d-flex align-items-center gap-4 justify-content-center p-2 mx-auto video-sec'>
                        <div><img src={videocall} alt='correct' className='video-img' /></div>
                        <div className='dash-trans-txt-2'>You wonder how the video-call works? We’ll show you</div>
                      </div>
                    </div>
                    <p className='dash-trans-txt-2 pb-2'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    <div className='mb-5'>
                      <button class="d-send-btn-1 rounded-pill">Next</button>
                    </div>
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

export default Accountsection