import React, { useState } from 'react';
// import './assets/css/var.css';
import { FaArrowAltCircleDown } from "react-icons/fa";

function Business() {


  return (
    <div className='business'>
      <div className='custom d-flex justify-content-center align-items-center'>
        <div className='container py-4 whl-business-form-box'>
          <h4 className='mb-auto text-center business-title text-uppercase py-4'>Onboarding form</h4>

          <div className='row business-form-00'>
            <div className='col-lg-10 mx-auto mt-lg-4'>
              <div className='whole-business-form'>
                <form>

                  <div className="row">
                    <div className="col-lg-12">
                    <h6 className="mb-4 business-input-headings">Name of the Company:</h6>
                      <div>
                        <div className="mb-4 pt-2">
                          <label htmlFor="firstName" className="form-label  business-input-headings">First name :</label>
                          <input type="text" className="form-control business-input-group-box" id="firstName" placeholder="First name" />
                        </div>
                        <div className="mb-4 pt-2">
                          <label htmlFor="abbreviateName" className="form-label  business-input-headings">Abbreviate name :</label>
                          <input type="text" className="form-control business-input-group-box" id="abbreviateName" placeholder="Abbreviate name" />
                        </div>
                        <div className="mb-4 pt-2">
                          <label htmlFor="foreignLanguageName" className="form-label business-input-headings">Foreign languages name (if applicable) :</label>
                          <input type="text" className="form-control business-input-group-box" id="foreignLanguageName" placeholder="Languages name" />
                        </div>
                        <div className="mb-4 pt-2">
                          <label htmlFor="legalForm" className="form-label  business-input-headings">Legal form :</label>
                          <input type="text" className="form-control business-input-group-box" id="legalForm" placeholder="Legal form" />
                        </div>
                      </div>
                    </div>
                  </div>


                  {/* <==============> */}

                  <div className="row">
                    <div className="col-lg-12">
                     
                      <div>
                        <div className="mb-4 pt-2">
                          <label htmlFor="date" className="form-label  business-input-headings">Date :</label>
                          <input type="date" className="form-control business-input-group-box" id="date" placeholder="Date" />
                        </div>
                        <div className="mb-4 pt-2">
                          <label htmlFor="registrationNumber" className="form-label  business-input-headings">Registration number :</label>
                          <input type="text" className="form-control business-input-group-box" id="registrationNumber" placeholder="Registration number" />
                        </div>
                        <div className="mb-4 pt-2">
                          <label htmlFor="registrationAuthority" className="form-label  business-input-headings">Name of the registration authority :</label>
                          <input type="text" className="form-control business-input-group-box" id="registrationAuthority" placeholder="Registration authority" />
                        </div>
                        <div className="mb-4 pt-2">
                          <label htmlFor="placeOfRegistration" className="form-label  business-input-headings">Place of registration :</label>
                          <input type="text" className="form-control business-input-group-box" id="placeOfRegistration" placeholder="Place of registration" />
                        </div>
                        <div className="mb-4 pt-2">
                          <label htmlFor="legalAddress" className="form-label  business-input-headings">Legal address :</label>
                          <input type="text" className="form-control business-input-group-box" id="legalAddress" placeholder="Legal address" />
                        </div>
                        <div className="mb-4 pt-2">
                          <label htmlFor="postalAddress" className="form-label  business-input-headings">Postal address :</label>
                          <input type="text" className="form-control business-input-group-box" id="postalAddress" placeholder="Postal address" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <===================> */}

                  <div className="row mb-4">
                    <div className="col-lg-12">
                      <div className="row">
                        <div className="col-lg-4 col-12 mb-3">
                          <label className="mb-2  business-input-headings">E-mail, URL :</label>
                          <input type="email" className="form-control business-input-group-box" placeholder="Email address" aria-label="Email address" />
                        </div>
                        <div className="col-lg-4 col-12 mb-3">
                          <label className="mb-2  business-input-headings">Test login :</label>
                          <input type="text" className="form-control business-input-group-box" placeholder="Test login" aria-label="Test login" />
                        </div>
                        <div className="col-lg-4 col-12 mb-3">
                          <label className="mb-2  business-input-headings">Test password :</label>
                          <input type="password" className="form-control business-input-group-box" placeholder="Test password" aria-label="Test password" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <======================> */}

                  <div className="row mb-4">
                    <h6 className="mb-3  business-input-headings">License information (if applicable) :</h6>
                    <div className="col-lg-12">
                      <div>
                        <div className="form-check mb-3">
                          <input className="form-check-input" type="checkbox" value="activity" id="activityCheck" />
                          <label className="form-check-label" htmlFor="activityCheck">
                            Type of activity
                          </label>
                        </div>
                        <div className="form-check mb-3">
                          <input className="form-check-input" type="checkbox" value="licenseNo" id="licenseNoCheck" />
                          <label className="form-check-label" htmlFor="licenseNoCheck">
                            License No
                          </label>
                        </div>
                        <div className="form-check mb-3">
                          <input className="form-check-input" type="checkbox" value="dateOfIssue" id="dateOfIssueCheck" />
                          <label className="form-check-label" htmlFor="dateOfIssueCheck">
                            Date of issue
                          </label>
                        </div>
                        <div className="form-check mb-3">
                          <input className="form-check-input" type="checkbox" value="issuingAuthority" id="issuingAuthorityCheck" />
                          <label className="form-check-label" htmlFor="issuingAuthorityCheck">
                            Issuing authority
                          </label>
                        </div>
                        <div className="form-check mb-3">
                          <input className="form-check-input" type="checkbox" value="validity" id="validityCheck" />
                          <label className="form-check-label" htmlFor="validityCheck">
                            Validity (date of issue and date of expiration)
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <===================> */}

                  <div className="row mb-4">
                    <div className="row">
                      <div className="col-lg-6 col-12 mb-3">
                        <label className="mb-2  business-input-headings">Country of Tax Residency :</label>
                        <input type="text" className="form-control business-input-group-box" placeholder="Tax Residency" />
                      </div>
                      <div className="col-lg-6 col-12 mb-3">
                        <label className="mb-2  business-input-headings">TAX number :</label>
                        <input type="text" className="form-control business-input-group-box" placeholder="TAX number" />
                      </div>
                    </div>
                  </div>

                  {/* <=========================> */}

                  <div className="row mb-4">
                    <div className="form-check mb-3">
                      <input className="form-check-input" type="checkbox" value="" id="registeredShareCapitalCheck" />
                      <label className="form-check-label" htmlFor="registeredShareCapitalCheck">
                        Amount of the registered share capital
                      </label>
                    </div>
                    <div className="form-check mb-3">
                      <input className="form-check-input" type="checkbox" value="" id="paidShareCapitalCheck" />
                      <label className="form-check-label" htmlFor="paidShareCapitalCheck">
                        Amount of the paid share capital
                      </label>
                    </div>
                    <div className="mt-4">
                      <label htmlFor="personnelNumber" className="form-label  business-input-headings">Actual number of personnel :</label>
                      <input type="text" className="form-control business-input-group-box" id="personnelNumber" placeholder="Number of personnel" />
                    </div>
                  </div>

                  {/* <========================> */}

                  <div className="row mt-4">
                    <div className="col-lg-12">
                      <div>
                        <h6 className="business-input-headings">
                          Are there any insolvency (bankruptcy) legal proceedings against the Company? Are there any legally effective court decisions on insolvency (bankruptcy) in respect of the Company?
                        </h6>
                      </div>
                      <div className="d-flex mt-3">
                        <div className="form-check me-3">
                          <input className="form-check-input" type="radio" name="insolvency" id="insolvencyYes" />
                          <label className="form-check-label" htmlFor="insolvencyYes">
                            Yes
                          </label>
                        </div>
                        <div className="form-check">
                          <input className="form-check-input" type="radio" name="insolvency" id="insolvencyNo" />
                          <label className="form-check-label" htmlFor="insolvencyNo">
                            No
                          </label>
                        </div>
                      </div>

                      <div className="mt-4">
                        <label htmlFor="specifyDetails" className="form-label  business-input-headings">If Yes, please specify :</label>
                        <input type="text" className="form-control business-input-group-box mb-4" id="specifyDetails" placeholder="" />
                      </div>

                    </div>
                  </div>

                  {/* <==============================> */}

                  <div className="row my-4">
                    <div className="col-lg-12">
                      <div>
                        <h6 className="business-input-headings">
                          Are there any facts of your financial obligations default due to lack of funds in bank accounts?
                        </h6>
                      </div>
                      <div className="d-flex my-3">
                        <div className="form-check me-3">
                          <input className="form-check-input" type="radio" name="financialObligations" id="financialObligationsYes" />
                          <label className="form-check-label" htmlFor="financialObligationsYes">
                            Yes
                          </label>
                        </div>
                        <div className="form-check">
                          <input className="form-check-input" type="radio" name="financialObligations" id="financialObligationsNo" />
                          <label className="form-check-label" htmlFor="financialObligationsNo">
                            No
                          </label>
                        </div>
                      </div>

                       <div className="mt-4">
                        <label htmlFor="specifyDetails" className="form-label  business-input-headings">If Yes, please specify :</label>
                        <input type="text" className="form-control business-input-group-box mb-4" id="specifyDetails" placeholder="" />
                      </div>

                    </div>
                  </div>

                  {/* <=====================> */}

                  <div className=''>
                    <div className="row mt-4 mb-4">
                      <div className="col-lg-12">
                        <h6 className="my-3 business-input-headings">
                          Administrative bodies of the Company (list of the Board of Directors (if applicable), CEO or representative)
                        </h6>

                        <p><span>1. </span>Is the Director acting as a nominee?</p>
                        <div className="d-flex mt-2 mb-4">
                          <div className="form-check me-3">
                            <input className="form-check-input" type="radio" name="directorNominee1" id="directorNomineeYes1" />
                            <label className="form-check-label" htmlFor="directorNomineeYes1">
                              Yes
                            </label>
                          </div>
                          <div className="form-check">
                            <input className="form-check-input" type="radio" name="directorNominee1" id="directorNomineeNo1" />
                            <label className="form-check-label" htmlFor="directorNomineeNo1">
                              No
                            </label>
                          </div>
                        </div>

                        <p><span>2. </span>Is the Director acting as a nominee?</p>
                        <div className="d-flex mt-2 mb-4">
                          <div className="form-check me-3">
                            <input className="form-check-input" type="radio" name="directorNominee2" id="directorNomineeYes2" />
                            <label className="form-check-label" htmlFor="directorNomineeYes2">
                              Yes
                            </label>
                          </div>
                          <div className="form-check">
                            <input className="form-check-input" type="radio" name="directorNominee2" id="directorNomineeNo2" />
                            <label className="form-check-label" htmlFor="directorNomineeNo2">
                              No
                            </label>
                          </div>
                        </div>

                        <p><span>3. </span>Is the Director acting as a nominee?</p>
                        <div className="d-flex mt-2 mb-4">
                          <div className="form-check me-3">
                            <input className="form-check-input" type="radio" name="directorNominee3" id="directorNomineeYes3" />
                            <label className="form-check-label" htmlFor="directorNomineeYes3">
                              Yes
                            </label>
                          </div>
                          <div className="form-check">
                            <input className="form-check-input" type="radio" name="directorNominee3" id="directorNomineeNo3" />
                            <label className="form-check-label" htmlFor="directorNomineeNo3">
                              No
                            </label>
                          </div>
                        </div>

                        <p><span>4. </span>Is the Director acting as a nominee?</p>
                        <div className="d-flex mt-2 mb-4">
                          <div className="form-check me-3">
                            <input className="form-check-input" type="radio" name="directorNominee4" id="directorNomineeYes4" />
                            <label className="form-check-label" htmlFor="directorNomineeYes4">
                              Yes
                            </label>
                          </div>
                          <div className="form-check">
                            <input className="form-check-input" type="radio" name="directorNominee4" id="directorNomineeNo4" />
                            <label className="form-check-label" htmlFor="directorNomineeNo4">
                              No
                            </label>
                          </div>
                        </div>

                        <p><span>5. </span>Is the Director acting as a nominee?</p>
                        <div className="d-flex mt-2 mb-4">
                          <div className="form-check me-3">
                            <input className="form-check-input" type="radio" name="directorNominee5" id="directorNomineeYes5" />
                            <label className="form-check-label" htmlFor="directorNomineeYes5">
                              Yes
                            </label>
                          </div>
                          <div className="form-check">
                            <input className="form-check-input" type="radio" name="directorNominee5" id="directorNomineeNo5" />
                            <label className="form-check-label" htmlFor="directorNomineeNo5">
                              No
                            </label>
                          </div>
                        </div>

                        <h6 className="my-3 business-input-headings">Name of the CFO (or equivalent)</h6>
                        <input type="text" className="form-control business-input-group-box mb-4" placeholder="Name of the CFO" />

                        <h6 className=" my-3 business-input-headings">
                          Information about the person(s) who is/are the Company’s ultimate beneficial owner(s), with an indication of the share of equity
                          (full details of the beneficial owner specified in the application in the form prescribed in Appendix 3)
                        </h6>
                        <textarea className="form-control business-input-group-box mb-4" rows="4" placeholder="Details of the beneficial owner(s)"></textarea>
                      </div>
                    </div>

                  </div>

                  {/* <======================> */}

                  <div className="row mt-4 mb-4">
                    <div className="col-lg-12">
                      <h6 className="mb-3 business-input-headings">
                        Details of Shareholders (participants) holding 25% or more of the authorized capital with an indication of percentage of shares held
                      </h6>

                      <p className="mb-3">
                        In case where the shareholder is a nominee/nominee company please provide all corporate documents up to the physical persons (including trust deeds/trust declarations)
                      </p>

                      <div className="mb-4">
                        <p className="mb-2"><span className="">1. </span>Percentage of shares held</p>
                        <p className="mb-2">Is the Shareholder acting as a nominee?</p>
                        <div className="d-flex mt-2 mb-3">
                          <div className="form-check me-3">
                            <input className="form-check-input" type="radio" name="shareholderNominee1" id="shareholderNomineeYes1" />
                            <label className="form-check-label" htmlFor="shareholderNomineeYes1">
                              Yes
                            </label>
                          </div>
                          <div className="form-check">
                            <input className="form-check-input" type="radio" name="shareholderNominee1" id="shareholderNomineeNo1" />
                            <label className="form-check-label" htmlFor="shareholderNomineeNo1">
                              No
                            </label>
                          </div>
                        </div>
                      </div>

                      <div className="mb-4">
                        <p className="mb-2"><span className="">2. </span>Percentage of shares held</p>
                        <p className="mb-2">Is the Shareholder acting as a nominee?</p>
                        <div className="d-flex mt-2 mb-3">
                          <div className="form-check me-3">
                            <input className="form-check-input" type="radio" name="shareholderNominee2" id="shareholderNomineeYes2" />
                            <label className="form-check-label" htmlFor="shareholderNomineeYes2">
                              Yes
                            </label>
                          </div>
                          <div className="form-check">
                            <input className="form-check-input" type="radio" name="shareholderNominee2" id="shareholderNomineeNo2" />
                            <label className="form-check-label" htmlFor="shareholderNomineeNo2">
                              No
                            </label>
                          </div>
                        </div>
                      </div>

                      <div className="mb-4">
                        <p className="mb-2"><span className="">3. </span>Percentage of shares held</p>
                        <p className="mb-2">Is the Shareholder acting as a nominee?</p>
                        <div className="d-flex mt-2 mb-3">
                          <div className="form-check me-3">
                            <input className="form-check-input" type="radio" name="shareholderNominee3" id="shareholderNomineeYes3" />
                            <label className="form-check-label" htmlFor="shareholderNomineeYes3">
                              Yes
                            </label>
                          </div>
                          <div className="form-check">
                            <input className="form-check-input" type="radio" name="shareholderNominee3" id="shareholderNomineeNo3" />
                            <label className="form-check-label" htmlFor="shareholderNomineeNo3">
                              No
                            </label>
                          </div>
                        </div>
                      </div>

                      <div className="mb-4">
                        <p className="mb-2"><span className="">4. </span>Percentage of shares held</p>
                        <p className="mb-2">Is the Shareholder acting as a nominee?</p>
                        <div className="d-flex mt-2 mb-3">
                          <div className="form-check me-3">
                            <input className="form-check-input" type="radio" name="shareholderNominee4" id="shareholderNomineeYes4" />
                            <label className="form-check-label" htmlFor="shareholderNomineeYes4">
                              Yes
                            </label>
                          </div>
                          <div className="form-check">
                            <input className="form-check-input" type="radio" name="shareholderNominee4" id="shareholderNomineeNo4" />
                            <label className="form-check-label" htmlFor="shareholderNomineeNo4">
                              No
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <========================> */}

                  <div className='row'>
                    <div className='col-lg-12'>
                      <div>
                        <p className='mb-3'>Types of activity (goods, services)</p>
                        <p className='mb-4'>Region (countries) of the business activity?</p>

                        <h6 className='business-input-headings mb-3'>
                          Does your Company have an obligation for the preparation of financial statements to comply with applicable legislation framework?
                        </h6>
                        <div className='d-flex mb-4'>
                          <div className="form-check me-3">
                            <input className="form-check-input" type="radio" name="financialStatementObligation" id="financialStatementYes" />
                            <label className="form-check-label" htmlFor="financialStatementYes">
                              Yes
                            </label>
                          </div>
                          <div className="form-check me-3">
                            <input className="form-check-input" type="radio" name="financialStatementObligation" id="financialStatementNo" />
                            <label className="form-check-label" htmlFor="financialStatementNo">
                              No
                            </label>
                          </div>
                        </div>

                        <div className="my-4">
                          <label htmlFor="reasonForNo" className="form-label  business-input-headings">If No, please specify the reason:</label>
                          <input type="text" className="form-control" id="reasonForNo" placeholder="" />
                        </div>

                        <div className="my-4">
                          <label htmlFor="businessDuration" className="form-label  business-input-headings">How long has the Company been carrying on business activity in this area?</label>
                          <input type="text" className="form-control" id="businessDuration" placeholder="" />
                        </div>

                        <div className="my-4">
                          <label htmlFor="planningTurnover" className="form-label  business-input-headings">Please specify the planning turnover of the Company (monthly/yearly), average amount of transactions:</label>
                          <input type="text" className="form-control" id="planningTurnover" placeholder="" />
                        </div>

                        <div className="my-4">
                          <label htmlFor="companyWebsite" className="form-label  business-input-headings">Please specify the website of the Company or other sources of information about the Company:</label>
                          <input type="text" className="form-control" id="companyWebsite" placeholder="" />
                        </div>

                        <div className="my-4">
                          <label htmlFor="companyHistory" className="form-label  business-input-headings">History, reputation, segment of the market, and competitors of the Company:</label>
                          <input type="text" className="form-control" id="companyHistory" placeholder="" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <=======================> */}

                  <div className='row'>
                    <div className='col-lg-12'>
                      <div>
                        <h6 className='text-center my-4 business-input-headings'>General AML Policies, Practices and Procedures</h6>
                      </div>
                      <div>
                        <div className="d-flex my-2">
                          <span style={{ minWidth: '50px' }}>1.(a)</span>
                          <span class=""><label for="formGroupExampleInput" class="form-label ">Is your institution subject to the supervision of any regulatory authority?</label><input type="text" class="form-control col-sm-12" id="formGroupExampleInput" placeholder="" /></span>

                        </div>

                        <div className="d-flex my-2">
                          <span style={{ minWidth: '50px' }}>1.(b)</span>
                          <span class=""><label for="formGroupExampleInput" class="form-label ">If yes, please provide the name of the supervisory/regulatory authority, including the one responsible for supervising and controlling money laundering prevention:</label><input type="text" class="form-control" id="formGroupExampleInput" placeholder="" /></span>
                          {/* <span></span> */}
                        </div>

                        <div className="d-flex my-2">
                          <span style={{ minWidth: '50px' }}>1.(c)</span>
                          <span class=""><label for="formGroupExampleInput" class="form-label ">Please provide your registration / operating license number</label><input type="number" class="form-control" id="formGroupExampleInput" placeholder="" /></span>
                          <span></span>
                        </div>

                        <div className="d-flex my-2">
                          <span style={{ minWidth: '50px' }}>2.</span>
                          <span class=""><label for="formGroupExampleInput" class="form-label ">Does your country adhere to the 40+9 anti-money laundering and counter-terrorism financing recommendations developed by the Financial Action Task Force (FATF)?</label><input type="text" class="form-control" id="formGroupExampleInput" placeholder="" /></span>

                        </div>

                        <div className="d-flex my-2">
                          <span style={{ minWidth: '50px' }}>3.(a)</span>
                          <span class=""><label for="formGroupExampleInput" class="form-label ">Does your institution have a designated Compliance Officer responsible for the overall AML/CTF program? Please provide AML/CTF program.</label><input type="text" class="form-control" id="formGroupExampleInput" placeholder="" /></span>

                        </div>
                        <div className="d-flex my-2">
                          <span style={{ minWidth: '50px' }}>3.(b)</span>
                          <div>

                            <div class="row mb-3">
                              <label for="inputEmail3" class="col-sm-6 col-form-label">If “Yes,” please provide:</label>
                              <div class="col-sm-6">
                                <input type="email" class="form-control" id="inputEmail3" />
                              </div>
                            </div>
                            <div class="row mb-3">
                              <label for="inputEmail3" class="col-sm-6 col-form-label">Complete Name:</label>
                              <div class="col-sm-6">
                                <input type="email" class="form-control" id="inputEmail3" />
                              </div>
                            </div>
                            <div class="row mb-3">
                              <label for="inputEmail3" class="col-sm-6 col-form-label">Position Title:</label>
                              <div class="col-sm-6">
                                <input type="email" class="form-control" id="inputEmail3" />
                              </div>
                            </div>
                            <div class="row mb-3">
                              <label for="inputEmail3" class="col-sm-6 col-form-label">Mailing Address:</label>
                              <div class="col-sm-6">
                                <input type="email" class="form-control" id="inputEmail3" />
                              </div>
                            </div>
                            <div class="row mb-3">
                              <label for="inputEmail3" class="col-sm-6 col-form-label">Telephone Number:</label>
                              <div class="col-sm-6">
                                <input type="number" class="form-control" id="inputEmail3" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="d-flex my-2">
                          <span style={{ minWidth: '50px' }}>3.(c)</span>
                          <div>
                            <span class="my-4"><label for="formGroupExampleInput" class="form-label  business-input-headings">Does your institution have a designated employee responsible for disputes( chargebacks) and penalties?</label>
                            <input type="text" class="form-control" id="formGroupExampleInput" placeholder="" />
                            </span>

                          </div>
                        </div>
                        <div className="d-flex my-2">
                          <span style={{ minWidth: '50px' }}>3.(d)</span>
                          <div>

                            <div class="row mb-3">
                              <label for="inputEmail3" class="col-sm-6 col-form-label">If “Yes,” please provide:</label>
                              <div class="col-sm-6">
                                <input type="email" class="form-control" id="inputEmail3" />
                              </div>
                            </div>
                            <div class="row mb-3">
                              <label for="inputEmail3" class="col-sm-6 col-form-label">Complete Name:</label>
                              <div class="col-sm-6">
                                <input type="email" class="form-control" id="inputEmail3" />
                              </div>
                            </div>
                            <div class="row mb-3">
                              <label for="inputEmail3" class="col-sm-6 col-form-label">Position Title:</label>
                              <div class="col-sm-6">
                                <input type="email" class="form-control" id="inputEmail3" />
                              </div>
                            </div>
                            <div class="row mb-3">
                              <label for="inputEmail3" class="col-sm-6 col-form-label">Mailing Address:</label>
                              <div class="col-sm-6">
                                <input type="email" class="form-control" id="inputEmail3" />
                              </div>
                            </div>
                            <div class="row mb-3">
                              <label for="inputEmail3" class="col-sm-6 col-form-label">Telephone Number:</label>
                              <div class="col-sm-6">
                                <input type="number" class="form-control" id="inputEmail3" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="d-flex my-2">
                          <span style={{ minWidth: '50px' }}>4 .</span>
                          <div>
                            <p>Does your institution have a written legal and regulatory compliance program that includes a designated Compliance Officer that is responsible for coordinating and overseeing the AML program on a day to day basis?</p>
                          </div>
                        </div>
                        <div className="d-flex my-2">
                          <span style={{ minWidth: '50px' }}>5.(a)</span>
                          <div>
                            <p>Does your institution’s AML program require approval of the Board of Directors?</p>
                          </div>
                        </div>

                        <div className="d-flex my-2">
                          <span style={{ minWidth: '50px' }}>5.(b)</span>
                          <div>
                            <p>Please specify the most recent date the AML program was last updated:</p>
                          </div>
                        </div>

                        <div className="d-flex my-2">
                          <span style={{ minWidth: '50px' }}>6.</span>
                          <div>
                            <p>Are your institution’s AML policies and procedures being applied to all your branches/subsidiaries both in the home country and in locations outside that jurisdiction?
                            </p>
                          </div>
                        </div>

                        <div className="d-flex my-2">
                          <span style={{ minWidth: '50px' }}>7.</span>
                          <div>
                            <p>Does your institution have written policies documenting the processes that you have in place to prevent and detect any suspicious transactions/terrorist financing activities?
                            </p>
                          </div>
                        </div>
                        <div className="d-flex my-2">
                          <span style={{ minWidth: '50px' }}>8.</span>
                          <div>
                            <p>Does your institution have policies and procedures to prohibit any accounts/relationships with shell banks/organizations?
                            </p>
                          </div>
                        </div>
                        <div className="d-flex my-2">
                          <span style={{ minWidth: '50px' }}>9.(a)</span>
                          <div>
                            <p>Was your institution subject to any investigation related to ML/CTF?.
                            </p>
                          </div>
                        </div>
                        <div className="d-flex my-2">
                          <span style={{ minWidth: '50px' }}>9.(b)</span>
                          <div>
                            <p>If ‘Yes’ please specify when:
                            </p>
                          </div>
                        </div>
                        <div className="d-flex my-2">
                          <span style={{ minWidth: '50px' }}>10.(a)</span>
                          <div>
                            <p>Has your institution received any regulatory enforcement action currently or within the past three years?
                            </p>
                          </div>
                        </div>
                        <div className="d-flex my-2">
                          <span style={{ minWidth: '50px' }}>10.(b)</span>
                          <div>
                            <p>If ‘Yes’, has the regulatory enforcement action resulted in fines or penalties being assessed?
                            </p>
                          </div>
                        </div>
                        <div className="d-flex my-2">
                          <span style={{ minWidth: '50px' }}>11.(a)</span>
                          <div>
                            <p>Was your institution ever got fined for ML/CTF crimes?
                            </p>
                          </div>
                        </div>
                        <div className="d-flex my-2">
                          <span style={{ minWidth: '50px' }}>11.(b)</span>
                          <div>
                            <p>If ‘Yes’ please specify when and provide additional details regarding the fine:
                            </p>
                          </div>
                        </div>
                        <div className="d-flex my-2">
                          <span style={{ minWidth: '50px' }}>12.</span>
                          <div>
                            <p>Does your institution have procedures in place to monitor accounts and transactions in order to prevent and detect suspicious activity?
                            </p>
                          </div>
                        </div>
                        <div className="d-flex my-2">
                          <span style={{ minWidth: '50px' }}>13.</span>
                          <div>
                            <p>Which categories of customers or industries according to AML/CTF program/corporate policies are restricted or prohibited by your institution? Please, specify the industries.
                            </p>
                          </div>
                        </div>
                        <div className="d-flex my-2">
                          <span style={{ minWidth: '50px' }}>14.(a)</span>
                          <div>
                            <p>Does your institution restrict or prohibit opening/maintaining accounts from any jurisdiction?
                            </p>
                          </div>
                        </div>
                        <div className="d-flex my-2">
                          <span style={{ minWidth: '50px' }}>14.(b)</span>
                          <div>
                            <p>If ‘Yes’ please specify the restricted/prohibited countries.
                            </p>
                          </div>
                        </div>
                        <div>
                          <h6 class="text-center my-4 business-input-headings">PROTECTION OF PERSONAL DATA</h6>
                          <p>The personal data requested above may be recorded in one or several databases in accordance with applicable legislation. REM INTERNATIONAL PAYMENTS INC. may outsource the processing and storage of this data. You expressly authorize REM INTERNATIONAL PAYMENTS INC. to collect and process  this personal data. You may make a written request to consult the data concerning yourself and to rectify any inaccuracies in this data. REM INTERNATIONAL PAYMENTS INC. may record or process your personal data for the purpose of managing its contractual relationships with you, including transfer of personal data to our partners in order to provide services to you.</p>
                        </div>
                        <div>
                          <h6 class="text-center my-4 business-input-headings">FOREIGN ACCOUNT TAX COMPLIANCE ACT (FATCA)</h6>
                          <p>We would like to draw your attention to the USA's Foreign Account Tax Compliance Act (a.k.a FATCA) and its possible implications*. Please indicate if you or any of your beneficial owners are a U.S citizen or resident or are otherwise to be considered as a 'US Person' as per FATCA:</p>
                          <p><span className='fw-bold'>N0  </span> I/We hereby declare that we are familiar with the FATCA guidelines and possible implications on the parties and that I am/we and any of our beneficial owners are NOT a U.S citizen or resident or are otherwise to be considered as a 'US Person' as per FATCA</p>
                          <p><span className='fw-bold'>YES  </span> I/We hereby declare that we are familiar with the FATCA guidelines and possible implications on the parties and that I am/we or any of our beneficial owners ARE a U.S citizen or resident or are otherwise to be considered as a 'US Person' as per FATCA and will provide us as soon as possible with the relevant documents, information, W-9 forms and other materials as requested by us.</p>
                          <p>I/We agree to indemnify REM INTERNATIONAL PAYMENTS INC. in respect of any false or misleading information regarding my/our “U.S. person” status for U.S. federal income tax purposes. I/We agree to notify REM INTERNATIONAL PAYMENTS INC. 30 days of any change in the aforementioned statement.</p>
                          <p>For more information see also: http://www.irs.gov/Businesses/Corporations/Foreign-Account-Tax-Compliance-Act-FATCA.</p>
                        </div>
                        <div>
                          <h6 class="text-center my-4 business-input-headings">REQUESTED DOCUMENTATION</h6>
                          <p>The following documents (certified copies) shall be attached to the Questionnaire:</p>

                          <div className="d-flex my-2">
                            <span style={{ minWidth: '50px' }} className=''>1.</span>
                            <div>
                              <p className='mb-auto'>Memorandum and Articles of Association;
                              </p>
                            </div>
                          </div>
                          <div className="d-flex my-2">
                            <span style={{ minWidth: '50px' }} className=''>2.</span>
                            <div>
                              <p className='mb-auto'>Certificate of Incorporation / Registration;
                              </p>
                            </div>
                          </div>
                          <div className="d-flex my-2">
                            <span style={{ minWidth: '50px' }} className=''>3.</span>
                            <div>
                              <p className='mb-auto'>Certificate of Directors/;
                              </p>
                            </div>
                          </div>
                          <div className="d-flex my-2">
                            <span style={{ minWidth: '50px' }} className=''>4.</span>
                            <div>
                              <p className='mb-auto'>Certificate of good standing (in the event that the company is older than one year old);
                              </p>
                            </div>
                          </div>
                          <div className="d-flex my-2">
                            <span style={{ minWidth: '50px' }} className=''>5.</span>
                            <div>
                              <p className='mb-auto'>Certificate of Incumbency;
                              </p>
                            </div>
                          </div>
                          <div className="d-flex my-2">
                            <span style={{ minWidth: '50px' }} className=''>6.</span>
                            <div>
                              <p className='mb-auto'>Certificate of Shareholders, Register of shareholders or other equivalent document;
                              </p>
                            </div>
                          </div>
                          <div className="d-flex my-2">
                            <span style={{ minWidth: '50px' }} className=''>7.</span>
                            <div>
                              <p className='mb-auto'>Legal ownership structure certified by the UBO or the person who effectively controls the company
                              </p>
                            </div>
                          </div>

                          <div className="d-flex my-2">
                            <span style={{ minWidth: '50px' }} className=''>8.</span>
                            <div>
                              <p className='mb-auto'>Operating license and\or authorization;
                              </p>
                            </div>
                          </div>
                          <div className="d-flex my-2">
                            <span style={{ minWidth: '50px' }} className=''>9.</span>
                            <div>
                              <p className='mb-auto'> Declaration of Trust (if applicable)
                              </p>
                            </div>
                          </div>

                          <div className="d-flex my-2">
                            <span style={{ minWidth: '50px' }} className=''>10.</span>
                            <div>
                              <p className='mb-auto'> Trust Deeds/ Trust Settlement Agreement (if applicable)
                              </p>
                            </div>
                          </div>

                          <div className="d-flex my-2">
                            <span style={{ minWidth: '50px' }} className=''>11.</span>
                            <div>
                              <p className='mb-auto'> Onboarding Form followed by you duly completed
                              </p>
                            </div>
                          </div>

                          <div className="d-flex my-2">
                            <span style={{ minWidth: '50px' }} className=''>12.</span>
                            <div>
                              <p className='mb-auto'> Annual financial (accounting) statements;
                              </p>
                            </div>
                          </div>

                          <div className="d-flex my-2">
                            <span style={{ minWidth: '50px' }} className=''>13.</span>
                            <div>
                              <p className='mb-auto'> Audited financial (accounting) statements for the last accounting period;
                              </p>
                            </div>
                          </div>

                          <div className="d-flex my-2">
                            <span style={{ minWidth: '50px' }} className=''>14.</span>
                            <div>
                              <p className='mb-auto'> In the absence of the documents referred to in paragraphs 12-13, an official letter, containing the reasons for the absence of these documents, shall be submitted;
                              </p>
                            </div>
                          </div>

                          <div className="d-flex my-2">
                            <span style={{ minWidth: '50px' }} className=''>15.</span>
                            <div>
                              <p className='mb-auto'> Identity Card or Passport of representative/s (director/s) and Utility Bill of representative/s (director/s);
                              </p>
                            </div>
                          </div>

                          <div className="d-flex my-2">
                            <span style={{ minWidth: '50px' }} className=''>16.</span>
                            <div>
                              <p className='mb-auto'> Details of the Company’s UBO’s including certified copy of passport, and proof of permanent address.
                              </p>
                            </div>
                          </div>
                          <div className="d-flex my-2">
                            <span style={{ minWidth: '50px' }} className=''>17.</span>
                            <div>
                              <p className='mb-auto'> Account opening confirmation
                              </p>
                            </div>
                          </div>
                          <div className="d-flex my-2">
                            <span style={{ minWidth: '50px' }} className=''>18.</span>
                            <div>
                              <p className='mb-auto'> AML/CTF program (if applicable)
                              </p>
                            </div>
                          </div>
                          <p>All documents shall be less than 6 months old from the date this questionnaire is signed,  presented in hard copies duly certified before any operational activities.</p>


                        </div>

                        <div>
                          <h6 class=" text-center my-4 business-input-headings">DECLARATIONS AND SIGNATURE</h6>
                          <ul>
                            <li className='my-2'>we are acting on our own account and not on behalf of any other person;</li>
                            <li className='my-2'>any funds that are received by us in the future will not be used for the financing of terrorism or with any fraudulent activities; and</li>
                            <li className='my-2'>we have not in the past committed any irregularities or fraud in breach of anti-money laundering and financing of terrorism applicable legislation.</li>
                          </ul>
                          <p>In addition, we hereby declare that the details and declarations provided in this Onboarding Form and any documents provided together with this form are, to the best of our knowledge and belief, true, accurate, correct, complete and not misleading and we undertake to immediately inform you about any changes. If any such details, declarations or documents cease to be true, accurate, correct, complete or not misleading, we are aware that we may be held liable for this.</p>
                          <p>I have answered all questions and understand that my application is subject to verification and approval by REM INTERNATIONAL PAYMENTS INC., reserves the right to decline the application, if it is found to be incomplete or ineligible, and further requests the right to request additional information/documentation as part of the Know Your Customer principles and best practices, or even deny processing to any merchant at its own discretion.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <=========================> */}

                  <div className='row'>
                    <p className='my-4'>Date :</p>
                    <div className='col-lg-6 col-12 mt-4'>
                      <div>
                        <p>stamp</p>
                      </div>
                    </div>
                    <div className='col-lg-6 col-12 mt-4'>
                      <div>
                        <p className='text-end'> (Name, director/representative signature)</p>
                      </div>
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
{/* <div class="my-4"><label for="formGroupExampleInput" class="form-label
 fw-bold">History, reputation, segment of the market and competitors 
of the Company</label><input type="text" class="form-control" id="formGroupExampleInput"
 placeholder=""></div> */ }