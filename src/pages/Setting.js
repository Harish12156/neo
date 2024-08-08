import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Rempichart from "../../src/assets/images/setting/rempic-img-02.png";
import Referralimg from "../../src/assets/images/setting/rempic-img-03.png"
import Rempicoffice from "../../src/assets/images/setting/rempic-office-img-01.png"



function Settings() {
  return (
    <div className=''>
      <div className='container-fluid  epic-ctn-01 p-5'>
        <div className='row epic-ctn-02'>
          <div className='col-md-8 epic-ctn-03'>
            <div className='row'>
              <div className='col-lg-12'>
                <div className='epic-ctn-04'>
                  <div className='epic-ctn-05'>
                    <div className='row d-flex justify-content-between   epic-ctn-06 py-4 px-2'>
                      {/* <div className='col-lg-6 epic-ctn-07 px-0'>
                <div className='epic-ctn-08'>
                <LazyLoadImage  src={Rempichart} className='img-fluid epic-ctn-09' />
                </div>
              </div> */}
                      <div className='col-lg-6 epic-ctn-07 px-0'>

                        <div className='d-flex align-items-center justify-content-between bg-primary h-100'>
                          <span>ROUNDS UP MONEY</span>
                          <span>
                            <select class="form-select rempic-selector-01 epic-monthly-001" aria-label="Default select example">
                              <option selected className=''>Monthly</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </select>
                          </span>
                        </div>
                        <div>
                          <span><img src="" /></span>
                          <span>the</span>
                        </div>
                      </div>
                      <div className='col-lg-6 epic-ctn-10 px-0 '>
                        <div className='epic-ctn-11'>
                          <div class="card epic-ctn-12">

                            <div class="card-body epic-ctn-13 py-0">
                              <div className='d-flex align-items-center justify-content-between py-3 epic-ctn-14'>
                                <span className='epic-ctn-15'>Add to my Spendings</span>
                                <span className='epic-ctn-16'>
                                  <div class="form-check form-switch epic-ctn-17">
                                    <input class="form-check-input epic-ctn-18" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked />
                                    <label class="form-check-label epic-ctn-19" for="flexSwitchCheckChecked"></label>
                                  </div>
                                </span>
                              </div>
                              <div className='d-flex epic-ctn-20 align-items-center justify-content-between py-3'>
                                <span className='epic-ctn-21'>Add to my Goal</span>
                                <span><div class="form-check form-switch epic-ctn-22">
                                  <input class="form-check-input epic-ctn-23" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked />
                                  <label class="form-check-label epic-ctn-24" for="flexSwitchCheckChecked"></label>
                                </div></span>
                              </div>
                              <a href="#" class="btn btn-transparent epic-ctn-25 w-100 mt-5 py-2">Cash Out</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <div className='row bg-primary mt-4 py-3'>
              <p className='help-support-01 py-2 mb-auto fw-bold'>Help & Support</p>
              <div className='col-lg-6'>
                <div className=' rempic-img-background py-2'>
                  <p className='text-center card-rempic-office-ctn'>Rempic Offices</p>

                  <div>
                    <ul class="nav nav-pills mb-3 d-flex px-0" id="pills-tab" role="tablist">
                      <li class="nav-item" role="presentation">
                        <button class="nav-link active bg-transparent" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">
                          <div><LazyLoadImage alt="Logo" src={Rempicoffice} className='img-fluid rempic-office-img-01' /></div>
                        </button>
                      </li>
                      <li class="nav-item" role="presentation">
                        <button class="nav-link bg-transparent" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">
                          <div><LazyLoadImage alt="Logo" src={Rempicoffice} className='img-fluid rempic-office-img-01' /></div>
                        </button>
                      </li>
                      {/* <li class="nav-item" role="presentation">
    <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Contact</button>
  </li> */}
                    </ul>
                    {/* <div class="" >
  <div >content 1</div>
  <div >content 2</div>
  <div >content 3</div>
</div> */}
                  </div>

                </div>

              </div>
              <div className='col-lg-6'>
                <div className='bg-danger tab-content' id="pills-tabContent">
                  <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                    <p className='rempic-united-states-01'>United State Office</p>
                    <div>
                      <img src="" />
                      <div>
                        <p className='mb-auto'>Mail</p>
                        <p className='mb-auto'>7586 Birchall Ave</p>
                      </div>
                    </div>
                    <div>
                      <img src="" />
                      <div>
                        <p className='mb-auto'>Email</p>
                        <p className='mb-auto'>Fraud:Fraus@rempic.com</p>
                        <p className='mb-auto'>Customer Care@rempic.com</p>
                      </div>
                    </div>
                    <div>
                      <img src="" />
                      <div>
                        <p className='mb-auto'>Tel</p>
                        <p className='mb-auto'>Fraud:Fraus@rempic.com</p>
                        <p className='mb-auto'>Customer Care@rempic.com</p>
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                    <p >lorem2</p>
                  </div>
                  {/* <p class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">lorem3</p> */}
                </div>
              </div>
            </div>



          </div>
          <div className='col-md-4 epic-ctn-26'>
            <div className='bg-success epic-ctn-27 text-center py-5'>
              <p className='bg-success epic-ctn-28 pt-2 pb-2'>Referral</p>
              <h1 className='epic-ctn-29'>59</h1>
              <p className='epic-ctn-30 py-3'>120 Contacts,$2 per activation</p>
              <div className='my-3'>
                <img src={Referralimg} className='epic-ctn-31' />
              </div>
              <p className='epic-ctn-30 pt-2'>Share your unique referral code which is your Rempic ID, or share
                links with as many people as you’d like and start earning your lifetime
                commissions from their transactions.</p>
              <div className='epic-ctn-31 p-2'>
                <button className='epic-ctn-32 mb-2 py-3'>Invite a Friend</button><br />
                <button className='epic-ctn-33 mb-2 py-3'>Copy my Referal Link</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Settings;