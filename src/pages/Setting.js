import React from 'react'
import '../assets/css/var.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Rempichart from "../assets/images/referral-images-02.png";
import Logorempic from "../assets/images/Logo_rempic_swan.png"
import Chart from 'react-apexcharts';
import { CiMail } from 'react-icons/ci';
import { BsTelephoneOutboundFill } from 'react-icons/bs';
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
    colors: ['#9B51E0', '#FFB21D', '#1FCB4F', '#F46D22'],
    dataLabels: {
      enabled: false
    },
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            name: {
              show: true,
              fontSize: '22px',
              fontWeight: 'bold',
              color: '#000',
              offsetY: -10,
            },
            value: {
              show: true,
              fontSize: '16px',
              fontWeight: '700',
              color: 'var(--color-1)',
              offsetY: 0,
              formatter: function (val) {
                return val + "%";
              }
            },
            total: {
              show: true,
              label: 'Total',
              fontSize: '14px',
              color: '#000',
              formatter: function () {
                return "$54,520";
              }
            }
          }
        }
      }
    },
    legend: {
      fontSize: '15px',
      fontWeight:"700",
      markers: {
        width: 12,
        height: 12,
        strokeWidth: 0,
        radius: 0, // This makes the markers square
        shape: "square",
      }
    }
  };

  return (
    <div className=''>
      <div className='container-fluid'>
        <div className='row '>
          <div className='col-lg-8 col-md-12 epic-chart-sec-01 pb-2 col-12'>
            <div class="card dash-card-1">
              <div class="card-body">
                <div className='row mb-3 epic-chart-sec-00'>
                  <p className='  dash-head-1'>Rounds Up</p>
                  <div className='col-lg-6 col-12 position-relative'>
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

                            <ul class="dropdown-menu">
                              <p>first</p>
                            </ul>
                          </div>

                        </span>
                      </p>
                    </div>

                    <div className='epic-chart-rounded-01 position-relative'>
                      <Chart options={options} series={series} className="clr-rounded-sec-01 py-lg-0 py-2" type="donut" width="100%" height="220px" />
                    </div>

                  </div>
                  <div className='col-lg-6 col-12 '>

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
            </div>
            <div class="card dash-card-1 mt-3">
              <div class="card-body">
                <div className='new-epic-whole-top '>
                  <div className='row epic-united-states-whl-001 epic-chart-sec-00'>
                    <div className='col-lg-6'>
                      <p className=' dash-head-1'>Help & supports </p>
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
                              <button class="nav-link " id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">
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
                            <div className='d-flex flex-md-row flex-column new-united-ss py-2 align-items-start'>
                              <div className='epic-tab-mail-num-00'>
                                <p className='mb-auto epic-tab-mail-num epic-tab-mail-num-00'>
                                  <CiMail />
                                </p>
                              </div>

                              <div className=''>
                                <p className='mb-auto epic-tab-mail-01'>Mail</p>
                                <p className='mb-auto epic-tab-mail-01'>78 Birchell Mold</p>
                              </div>
                            </div>
                            <div className='d-flex flex-md-row flex-column new-united-ss py-2 epic-united-sec-01 align-items-start'>
                              <div className='epic-tab-mail-num-00'>
                                <p className='mb-auto epic-tab-mail-num epic-tab-mail-num-00'>
                                  <CiMail />
                                </p>
                              </div>
                              <div>
                                <p className='mb-auto epic-tab-mail-01'>Email</p>
                                <p className='mb-0'><span className='epic-fraud-ctn epic-tab-mail-01'>Fraud:</span> <span className='mb-auto epic-tab-mail-01'>fraud@rempic.com</span></p>
                                <p className='mb-0'><span className='epic-fraud-ctn epic-tab-mail-01'>Customercare:</span> <span className='mb-auto epic-tab-mail-01'>care@gmail.com</span></p>

                              </div>
                            </div>
                            <div className='d-flex flex-md-row flex-column new-united-ss py-2 epic-united-sec-01 align-items-start'>
                              <div className=''>
                                <p className=' epic-tab-mail-num epic-tab-mail-num-00'><BsTelephoneOutboundFill /></p>
                              </div>
                              <div>
                                <p className='mb-auto epic-tab-mail-01'>Tel</p>
                                <p className='mb-0'><span className='epic-fraud-ctn epic-tab-mail-01'>Fraud:</span> <span className='mb-auto epic-tab-mail-01'>fraud@rempic.com</span></p>
                                <p className='mb-0'><span className='epic-fraud-ctn epic-tab-mail-01'>Customercare:</span> <span className='mb-auto epic-tab-mail-01'>customercare@gmail.com</span></p>
                              </div>
                            </div>
                          </div>

                          <div class="tab-pane fade pt-4" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">
                            <p className='united-office fw-bold'>UK Office</p>
                            <div className='d-flex flex-md-row flex-column new-united-ss py-2 align-items-start'>
                              <div className='epic-tab-mail-num-00'>
                                <p className='mb-auto epic-tab-mail-num epic-tab-mail-num-00'>
                                  <CiMail />
                                </p>
                              </div>

                              <div className=''>
                                <p className='mb-auto epic-tab-mail-01'>Mail</p>
                                <p className='mb-auto epic-tab-mail-01'>78 Birchell Mold</p>
                              </div>
                            </div>
                            <div className='d-flex flex-md-row flex-column new-united-ss py-2 epic-united-sec-01 align-items-start'>
                              <div className='epic-tab-mail-num-00'>
                                <p className='mb-auto epic-tab-mail-num epic-tab-mail-num-00'>
                                  <CiMail />
                                </p>
                              </div>
                              <div>
                                <p className='mb-auto epic-tab-mail-01'>Email</p>
                                <p className='mb-0'><span className='epic-fraud-ctn epic-tab-mail-01'>Fraud:</span> <span className='mb-auto epic-tab-mail-01'>fraud@rempic.com</span></p>
                                <p className='mb-0'><span className='epic-fraud-ctn epic-tab-mail-01'>Customercare:</span> <span className='mb-auto epic-tab-mail-01'>care@gmail.com</span></p>

                              </div>
                            </div>
                            <div className='d-flex flex-md-row flex-column new-united-ss py-2 epic-united-sec-01 align-items-start'>
                              <div className=''>
                                <p className=' epic-tab-mail-num epic-tab-mail-num-00'><BsTelephoneOutboundFill /></p>
                              </div>
                              <div>
                                <p className='mb-auto epic-tab-mail-01'>Tel</p>
                                <p className='mb-0'><span className='epic-fraud-ctn epic-tab-mail-01'>Fraud:</span> <span className='mb-auto epic-tab-mail-01'>fraud@rempic.com</span></p>
                                <p className='mb-0'><span className='epic-fraud-ctn epic-tab-mail-01'>Customercare:</span> <span className='mb-auto epic-tab-mail-01'>customercare@gmail.com</span></p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-md-12 col-12'>
            <div class="card dash-card-1">
              <div class="card-body">
                <div className='epic-total-referral-box'>
                  <p className='epic-ref-ctn py-2 text-center mb-auto'>Referral</p>
                  <p className='epic-ref-ctn-num fw-bold text-center mb-auto'>$59</p>
                  <p className='text-center fw-bold mb-auto'>120 Contacts,$2 per activation</p>
                  <p className='text-center mb-auto mt-5'><LazyLoadImage alt="Profile-picture" src={Rempichart} className='pro-pic img-fluid mb-lg-3 mb-3' /></p>
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
      </div>
    </div>
  )
}

export default Settings;
