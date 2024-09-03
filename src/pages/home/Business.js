import React, { useState } from 'react';
// import './assets/css/var.css';
import { FaArrowAltCircleDown } from "react-icons/fa";

function Business() {


  return (
    <div className='business'>
      <div className='custom d-flex justify-content-center align-items-center'>
        <div className='container py-4 whl-business-form-box'>
          <h4 className='mb-auto text-center business-title'>Onboarding form</h4>

          <div className='row business-form-00'>
            <div className='col-lg-10 mx-auto mt-lg-4'>
              <div>
                <form>

                  <div className='row'>
                    <div className='col-lg-12'>
                      <div>
                        <div class="mb-3">
                          <label for="formGroupExampleInput" class="form-label fw-bold">First name :</label>
                          <input type="text" class="form-control" id="formGroupExampleInput" placeholder="First name" />
                        </div>
                        <div class="mb-3">
                          <label for="formGroupExampleInput" class="form-label fw-bold">Abbreviate name :</label>
                          <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Abbreviate name" />
                        </div>
                        <div class="mb-3">
                          <label for="formGroupExampleInput" class="form-label fw-bold">Foreign languages name (if applicable) :</label>
                          <input type="text" class="form-control" id="formGroupExampleInput" placeholder="languages name" />
                        </div>
                        <div class="mb-3">
                          <label for="formGroupExampleInput" class="form-label fw-bold">Legal form :</label>
                          <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Legal form" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='row'>
                    <div className='col-lg-12'>
                      <h6 className='mb-4'>Name of the Company:</h6>
                      <div>

                        <div class="mb-3">
                          <label for="formGroupExampleInput" class="form-label fw-bold">Date :</label>
                          <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Date" />
                        </div>
                        <div class="mb-3">
                          <label for="formGroupExampleInput" class="form-label fw-bold">Registration number :</label>
                          <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Registration number" />
                        </div>
                        <div class="mb-3">
                          <label for="formGroupExampleInput" class="form-label fw-bold">Name of the registration authority :</label>
                          <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Registration authority" />
                        </div>
                        <div class="mb-3">
                          <label for="formGroupExampleInput" class="form-label fw-bold">Place of registration :</label>
                          <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Place of registration" />
                        </div>
                        <div class="mb-3">
                          <label for="formGroupExampleInput" class="form-label fw-bold">Legal address :</label>
                          <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Legal address" />
                        </div>
                        <div class="mb-3">
                          <label for="formGroupExampleInput" class="form-label fw-bold">Postal address :</label>
                          <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Postal address" />
                        </div>

                      </div>
                    </div>
                  </div>

                  <div className='row mb-4'>
                    <div className='col-lg-12'>
                      <div>
                        <div class="row">
                          <div class="col-lg-4 col-12">
                            <label className='mb-2 fw-bold'>E-mail,URL :</label>
                            <input type="text" class="form-control" placeholder="First name" aria-label="First name" />
                          </div>
                          <div class="col-lg-4 col-12">
                            <label className='mb-2 fw-bold'>Test login :</label>
                            <input type="text" class="form-control" placeholder="Last name" aria-label="Last name" />
                          </div>
                          <div class="col-lg-4 col-12">
                            <label className='mb-2 fw-bold'>Test password :</label>
                            <input type="text" class="form-control" placeholder="Last name" aria-label="Last name" />
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='row mb-4'>
                    <h6 className='mb-3 fw-bold'>License information (if applicable)</h6>
                    <div className='col-lg-12'>
                      <div>

                        <div class="form-check">
                          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                          <label class="form-check-label mb-2" for="flexCheckDefault">
                            Type of activity
                          </label>
                        </div>
                        <div class="form-check">
                          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                          <label class="form-check-label mb-2" for="flexCheckDefault">
                            License No
                          </label>
                        </div>
                        <div class="form-check">
                          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                          <label class="form-check-label mb-2" for="flexCheckDefault">
                            Date of issue
                          </label>
                        </div>
                        <div class="form-check">
                          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                          <label class="form-check-label mb-2" for="flexCheckDefault">
                            Issuing authority
                          </label>
                        </div>
                        <div class="form-check">
                          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                          <label class="form-check-label mb-2" for="flexCheckDefault">
                            Validity (date of issue and date of expiration)
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='row mb-4'>
                    <div class="row">
                      <div class="col-lg-6 col-12">
                        <label className='mb-2 fw-bold'>Country of Tax Residency :</label>
                        <input type="text" class="form-control" placeholder="Tax Residency" />
                      </div>
                      <div class="col-lg-6 col-12">
                        <label className='mb-2 fw-bold'>TAX number :</label>
                        <input type="text" class="form-control" placeholder="TAX number" />
                      </div>
                    </div>
                  </div>

                  <div className='row mb-4'>
                    <div class="form-check mb-2">
                      <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                      <label class="form-check-label" for="flexCheckDefault">
                        Amount of the registered share capital
                      </label>
                    </div>
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                      <label class="form-check-label" for="flexCheckDefault">
                        Amount of the paid share capital
                      </label>
                    </div>
                    <div class="mt-4">
                      <label for="formGroupExampleInput" class="form-label fw-bold">Actual number of personnel :</label>
                      <input type="text" class="form-control" id="formGroupExampleInput" placeholder="First name" />
                    </div>

                  </div>

                  <div className='row mt-4'>
                    <div className='col-lg-12'>
                      <div>
                        <h6 className='fw-bold'>Are there any insolvency (bankruptcy) legal proceedings  against the Company? Are there any legally effective court decision on insolvency (bankruptcy) in respect of the Company?</h6>
                      </div>
                      <div className='d-flex mt-3'>
                        <div class="form-check me-3">
                          <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                          <label class="form-check-label" for="flexRadioDefault1">
                            Yes
                          </label>
                        </div>
                        <div class="form-check">
                          <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                          <label class="form-check-label" for="flexRadioDefault1">
                            No
                          </label>
                        </div>
                      </div>
                      <p className='mt-2'>If Yes, please specify :</p>
                    </div>
                  </div>

                  <div className='row mt-4'>
                    <div className='col-lg-12'>
                      <div>
                        <h6 className='fw-bold'>Are there any fact of your financial obligations default due to lack of funds in bank accounts?</h6>
                      </div>
                      <div className='d-flex mt-3'>
                        <div class="form-check me-3">
                          <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                          <label class="form-check-label" for="flexRadioDefault1">
                            Yes
                          </label>
                        </div>
                        <div class="form-check">
                          <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                          <label class="form-check-label" for="flexRadioDefault1">
                            No
                          </label>
                        </div>
                      </div>
                      <p className='mt-2'>If Yes, please specify :</p>
                    </div>
                  </div>

                  <div className=''>
                    <div className='row'>
                      <div className='col-lg-12'>
                        <h6 className='fw-bold'>Administrative bodies of the Company (list of the Board of Directors (if applicable), CEO or representative)</h6>
                        <p><span>1. </span>Is the Director acting as a nominee?</p>
                        <div className='d-flex mt-1'>
                          <div class="form-check me-3">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            <label class="form-check-label" for="flexRadioDefault1">
                              Yes
                            </label>
                          </div>
                          <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            <label class="form-check-label" for="flexRadioDefault1">
                              No
                            </label>
                          </div>
                        </div>
                        <p><span>2. </span>Is the Director acting as a nominee?</p>
                        <div className='d-flex mt-1'>
                          <div class="form-check me-3">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            <label class="form-check-label" for="flexRadioDefault1">
                              Yes
                            </label>
                          </div>
                          <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            <label class="form-check-label" for="flexRadioDefault1">
                              No
                            </label>
                          </div>
                        </div>
                        <p><span>3. </span>Is the Director acting as a nominee?</p>
                        <div className='d-flex mt-1'>
                          <div class="form-check me-3">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            <label class="form-check-label" for="flexRadioDefault1">
                              Yes
                            </label>
                          </div>
                          <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            <label class="form-check-label" for="flexRadioDefault1">
                              No
                            </label>
                          </div>
                        </div>
                        <p><span>4. </span>Is the Director acting as a nominee?</p>
                        <div className='d-flex mt-1'>
                          <div class="form-check me-3">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            <label class="form-check-label" for="flexRadioDefault1">
                              Yes
                            </label>
                          </div>
                          <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            <label class="form-check-label" for="flexRadioDefault1">
                              No
                            </label>
                          </div>
                        </div>
                        <p><span>5. </span>Is the Director acting as a nominee?</p>
                        <div className='d-flex mt-1'>
                          <div class="form-check me-3">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            <label class="form-check-label" for="flexRadioDefault1">
                              Yes
                            </label>
                          </div>
                          <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            <label class="form-check-label" for="flexRadioDefault1">
                              No
                            </label>
                          </div>
                        </div>
                        <h6 className='fw-bold my-3'>Name of the CFO (or equivalent)</h6>
                        <h6 className='fw-bold my-3'>Information about the person (s), who is the Company’s ultimate beneficial owner (s), with an indication of the share of equity (full details of the beneficial owner specified in the application in the form prescribed in Appendix 3)</h6>
                      </div>
                    </div>
                  </div>

                  <div className='row'>
                    <div className='col-lg-12'>
                      <h6 className='fw-bold'>Details of Shareholders (participants) holding 25% or more of the authorized capital with an indication of percentage of shares held</h6>

                      <p>In case where the shareholder is a nominee/nominee company please provide all corporate document up to the physical persons (including trust deeds/trust declarations)</p>
                      <div>
                        <p className='mb-auto'><span className='fw-bold'>1. </span>Percentage of shares held</p>
                        <p>Is the Shareholder acting as a nominee?</p>
                        <div className='d-flex mt-1'>
                          <div class="form-check me-3">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            <label class="form-check-label" for="flexRadioDefault1">
                              Yes
                            </label>
                          </div>
                          <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            <label class="form-check-label" for="flexRadioDefault1">
                              No
                            </label>
                          </div>
                        </div>
                      </div>
                      <div>
                        <p className='mb-auto'><span className='fw-bold'>2. </span>Percentage of shares held</p>
                        <p>Is the Shareholder acting as a nominee?</p>
                        <div className='d-flex mt-1'>
                          <div class="form-check me-3">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            <label class="form-check-label" for="flexRadioDefault1">
                              Yes
                            </label>
                          </div>
                          <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            <label class="form-check-label" for="flexRadioDefault1">
                              No
                            </label>
                          </div>
                        </div>
                      </div>
                      <div>
                        <p className='mb-auto'><span className='fw-bold'>3. </span>Percentage of shares held</p>
                        <p>Is the Shareholder acting as a nominee?</p>
                        <div className='d-flex mt-1'>
                          <div class="form-check me-3">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            <label class="form-check-label" for="flexRadioDefault1">
                              Yes
                            </label>
                          </div>
                          <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            <label class="form-check-label" for="flexRadioDefault1">
                              No
                            </label>
                          </div>
                        </div>
                      </div>
                      <div>
                        <p className='mb-auto'><span className='fw-bold'>4. </span>Percentage of shares held</p>
                        <p>Is the Shareholder acting as a nominee?</p>
                        <div className='d-flex mt-1'>
                          <div class="form-check me-3">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            <label class="form-check-label" for="flexRadioDefault1">
                              Yes
                            </label>
                          </div>
                          <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            <label class="form-check-label" for="flexRadioDefault1">
                              No
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='row'>
                    <div className='col-lg-12'>
                      <div>
                        <p>Types of activity (goods, services)</p>
                        <p className=''>Region (countries) of the business activity?</p>
                        <h6 className='fw-bold'>Does your Company have an obligation for the preparation of financial statement  to comply with applicable legislation framework?</h6>
                        <div className='d-flex'>
                          <div class="form-check me-3">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            <label class="form-check-label" for="flexRadioDefault1">
                              Yes
                            </label>
                          </div>
                          <div class="form-check me-3">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            <label class="form-check-label" for="flexRadioDefault1">
                              No
                            </label>
                          </div>
                        </div>
                        <p>If No, please specify the reason:</p>
                      </div>

                      <h6 className='fw-bold'>How long the Company carries on business activity in this area?</h6>
                      <h6 className='fw-bold'>Please specify the planning turnover of the Company (monthly/yearly), average amount of transactions</h6>
                      <h6 className='fw-bold'>Please specify the WEB site of the Company or other sources of information about the Company
                      </h6>
                      <h6 className='fw-bold'>History, reputation, segment of the market and competitors of the Company</h6>
                    </div>
                  </div>


                </form>
              </div>
            </div>
          </div>



        </div>
      </div>
    </div>
  );
}

export default Business;
{/* <h6 className='mb-4'>License information (if applicable) :</h6>

<div class="checkbox-container mb-2">
  <input type="checkbox" id="activity-checkbox" className='me-3' />
  <label for="activity-checkbox">Type of activity</label>
</div>
<div class="checkbox-container mb-2">
  <input type="checkbox" id="activity-checkbox" className='me-3' />
  <label for="activity-checkbox">License No</label>
</div>
<div class="checkbox-container mb-2">
  <input type="checkbox" id="activity-checkbox" className='me-3' />
  <label for="activity-checkbox">Date of issue</label>
</div>
<div class="checkbox-container mb-2">
  <input type="checkbox" id="activity-checkbox" className='me-3' />
  <label for="activity-checkbox">Issuing authority</label>
</div>
<div class="checkbox-container mb-2">
  <input type="checkbox" id="activity-checkbox" className='me-3' />
  <label for="activity-checkbox">Validity (date of issue and date of expiration)</label>
</div> */}

// <div className='d-flex  flex-wrap justify-content-between'>
//                     <div className='mb-4'>
//                       <label className='mb-2'>E-mail,URL :</label><br />
//                       <input className='business-input-box' placeholder='E-mail' />
//                     </div>
//                     <div className='mb-4'>
//                       <label className='mb-2'>Test login :</label><br />
//                       <input className='business-input-box' placeholder='login' />
//                     </div>
//                     <div className='mb-4'>
//                       <label className='mb-2'>Test password :</label><br />
//                       <input className='business-input-box' placeholder='password' />
//                     </div>
//                   </div>