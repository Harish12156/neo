import React from 'react'
import '../assets/css/var.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Rempichart from "../assets/images/referral-images-02.png";
import Logorempic from "../assets/images/Logo_rempic_swan.png"
import Chart from 'react-apexcharts';
// import ApexCharts from 'apexcharts';
// import  { useEffect } from 'react';


function Settings() {
  const series = [25.6, 32, 23.8, 9.9];
  const options = {
    chart: {
      type: 'donut',
    },
    labels: ['Food', 'Shopping', 'Restaurant', 'Investing'],
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        },
        legend: {
          position: 'bottom'
        }
      }
    }],
    colors: ['#008FFB', '#00E396', '#FEB019', '#FF4560'],
    dataLabels: {
      enabled: false
    }
  };

  return (
    <div className=''>
      <div className='container-fluid p-4'>
        <div className='row '>
          <div className='col-md-8 epic-chart-sec-01 pb-2 col-12'>

            <div className='new-epic-whole-top '>
              <div className='row mb-3 epic-chart-sec-00 pb-3'>
                <p className='mb-auto  py-3  dash-head-1'>Rounds Up</p>
                {/* dash-head-1 */}
                <div className='col-lg-6 col-12'>
                  <div className='rnds-up-money-box p-2'>

                    <p className='mb-auto rnds-up-money'>Rounds Up Money
                      <span>
                        <div class="btn-group">
                        <select class="form-select epic-form-select-01" aria-label="Default select example">
  <option selected>Monthly</option>
  <option value="1">Jan</option>
  <option value="2">Feb</option>
  <option value="3">Mar</option>
</select>
                          {/* <button class="btn  btn-sm new-multiply-btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Monthly
                          </button> */}
                          <ul class="dropdown-menu">
                            {/* <p>first</p> */}
                          </ul>
                        </div>

                      </span>
                    </p>
                  </div>
                  {/* <div className='epic-chart-rounded-01 position-relative'>

<Chart options={options} series={series} className="  py-2" type="donut" width="100%" height="200px" />
<p className='epic-total-points-540'>Total<br /><span className='epic-total-number  mt-3 fw-bold'>$54,520</span></p>
</div>  */}
                  <div className='epic-chart-rounded-01 position-relative'>

                    <Chart options={options} series={series} className="clr-rounded-sec-01 py-2" type="donut" width="100%" height="200px" />
                    <p className='epic-total-points-54'>Total<br /><span className='epic-total-number mt-3 fw-bold'>$54,520</span></p>
                  </div>
                  {/* <=============> */}

                  <div>

                  </div>

                </div>
                <div className='col-lg-6 col-12 '>
                  <div className=''>
                   
                    <p className='mb-auto px-2 add-to-spend-01 py-3'>Add to my Spending
                      <span><div class="form-check form-switch">
                        <input class="form-check-input checked" type="checkbox" role="switch" id="flexSwitchCheckDefault" defaultChecked />
                        <label class="form-check-label" for="flexSwitchCheckDefault"></label>
                      </div></span></p>
                    <p className='mb-auto px-2 add-to-spend-01 py-3'>Add to my Spending
                      <span><div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" defaultChecked />
                        <label class="form-check-label" for="flexSwitchCheckDefault"></label>
                      </div></span></p>

                    <button className='w-100  new-epic-cash-btn mt-5'>
                      Cash Out
                    </button>
                  </div>
                </div>
              </div>

              <div className='row epic-united-states-whl-001 py-3 px-2 epic-chart-sec-00'>
                <div className='col-lg-6'>
                  <p className=' dash-head-1'>Help & supports </p>
                  {/* epic-helps-support */}
                  <div className='rempic-box-office'>
                    <p className='text-center py-3'>Rempic office</p>
                    <div>
                      <ul class="nav nav-pills mb-3 d-flex justify-content-around" id="pills-tab" role="tablist">
                        <li class="nav-item epic-representation-box" role="presentation">
                          <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">
                            <div className='epic-nav-link-2'>
                              <LazyLoadImage alt="Profile-picture" src={Logorempic} className='pro-pic new-logo-rempic-01' />
                            </div>
                          </button>
                          <p className='new-epic-usa-off mt-4'>USA Office</p>
                        </li>
                        <li class="nav-item" role="presentation">
                          <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">
                            <div className='epic-nav-link-2'>
                              <LazyLoadImage alt="Profile-picture" src={Logorempic} className='pro-pic new-logo-rempic-01' />
                            </div>
                          </button>
                          <p className='new-epic-uk-off mt-4'>UK Office</p>
                        </li>

                      </ul>

                    </div>
                  </div>

                </div>
                <div className='col-lg-6'>
                  <div className=''>
                    <div class="tab-content" id="pills-tabContent">

                      <div class="tab-pane fade show active pt-4" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">
                        <p className='united-office fw-bold'>United State Office</p>
                        <div className='d-flex new-united-ss py-2'>
                          <div className='epic-tab-mail-num-00'>
                            <p className='mb-auto epic-tab-mail-num epic-tab-mail-num-00'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-briefcase" viewBox="0 0 16 16">
                              <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5m1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0M1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5" />
                            </svg></p>
                          </div>

                          <div className=''>
                            <p className='mb-auto epic-tab-mail-01'>Mail</p>
                            <p className='mb-auto epic-tab-mail-01'>78 Birchell Mold</p>
                          </div>
                        </div>
                        <div className='d-flex new-united-ss py-2 epic-united-sec-01'>
                          <div className='epic-tab-mail-num-00'>
                            <p className='mb-auto epic-tab-mail-num epic-tab-mail-num-00'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-briefcase" viewBox="0 0 16 16">
                              <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5m1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0M1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5" />
                            </svg></p>
                          </div>
                          <div>
                            <p className='mb-auto epic-tab-mail-01'>Email</p>
                            <p className='mb-auto epic-tab-mail-01'><span className='epic-fraud-ctn'>Fraud :</span>fraud@rempic.com</p>
                            <p className='mb-auto epic-tab-mail-01'><span className='epic-fraud-ctn'>Customercare :</span>care@rempic.com</p>
                          </div>
                        </div>
                        <div className='d-flex new-united-ss py-2 epic-united-sec-01'>

                          <div className=''>
                            <p className=' epic-tab-mail-num epic-tab-mail-num-00'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-outbound-fill" viewBox="0 0 16 16">
                              <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877zM11 .5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V1.707l-4.146 4.147a.5.5 0 0 1-.708-.708L14.293 1H11.5a.5.5 0 0 1-.5-.5" />
                            </svg></p>
                          </div>
                          <div>
                            <p className='mb-auto epic-tab-mail-01'>Tel</p>
                            <p className='mb-auto epic-tab-mail-01'><span className='epic-fraud-ctn'>Fraud:</span>fraud@rempic.com</p>
                            <p className='mb-auto epic-tab-mail-01'><span className='epic-fraud-ctn'>Customercare:</span>customercare@gmail.com</p>
                          </div>
                        </div>
                      </div>

                      <div class="tab-pane fade pt-4" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">
                        <p className='united-office fw-bold'>UK Office</p>
                        <div className='d-flex new-united-ss py-2 '>
                          <div className='epic-tab-mail-num-00'>
                            <p className='mb-auto epic-tab-mail-num epic-tab-mail-num-00'>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-briefcase" viewBox="0 0 16 16">
                                <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5m1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0M1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5" />
                              </svg>
                            </p>
                          </div>

                          <div className=''>
                            <p className='mb-auto epic-tab-mail-01'>Mail</p>
                            <p className='mb-auto epic-tab-mail-01'>78 Birchell Mold</p>
                          </div>
                        </div>
                        <div className='d-flex new-united-ss py-2 epic-united-sec-01'>
                          <div className='epic-tab-mail-num-00'>
                            <p className='mb-auto epic-tab-mail-num epic-tab-mail-num-00'>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-briefcase" viewBox="0 0 16 16">
                                <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5m1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0M1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5" />
                              </svg>
                            </p>
                          </div>
                          <div>
                            <p className='mb-auto epic-tab-mail-01'>Email</p>
                            <p className='mb-auto epic-tab-mail-01'><span className='epic-fraud-ctn'>Fraud:</span>fraud@rempic.com</p>
                            <p className='mb-auto epic-tab-mail-01'><span className='epic-fraud-ctn'>Customercare:</span>care@rempic.com</p>
                          </div>
                        </div>
                        <div className='d-flex sss py-2 epic-united-sec-01'>

                          <div className=''>
                            <p className=' epic-tab-mail-num epic-tab-mail-num-00'>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-outbound-fill" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877zM11 .5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V1.707l-4.146 4.147a.5.5 0 0 1-.708-.708L14.293 1H11.5a.5.5 0 0 1-.5-.5" />
                              </svg>
                            </p>
                          </div>
                          <div>
                            <p className='mb-auto epic-tab-mail-01'>Tel</p>
                            <p className='mb-auto epic-tab-mail-01'><span className='epic-fraud-ctn'>Fraud:</span>fraud@rempic.com</p>
                            <p className='mb-auto epic-tab-mail-01'><span className='epic-fraud-ctn'>Customercare:</span>customercare@gmail.com</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <============================> */}
            </div>
          </div>
          <div className='col-md-4 '>
            <div className='epic-total-referral-box py-4 px-2'>
              <p className='epic-ref-ctn py-2 text-center mb-auto'>Referral</p>
              <p className='epic-ref-ctn-num fw-bold text-center mb-auto'>$59</p>
              <p className='text-center fw-bold mb-auto'>120 Contacts,$2 per activation</p>
              <p className='text-center mb-auto mt-5'><LazyLoadImage alt="Profile-picture" src={Rempichart} className='pro-pic mb-lg-3 mb-3' /></p>
              <p className='epic-share-full-ctn mb-4'>Share your unique referral code which is your Rempic ID, or share
                links with as many people as you’d like and start earning your lifetime
                commissions from their transactions.</p>
              <div>
                <button className='w-100  epic-invite-frd-02  mb-3'>Invite a Friend</button><br />
                <button className='w-100  epic-invite-frd-03 '>Copy my referral link</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Settings;
