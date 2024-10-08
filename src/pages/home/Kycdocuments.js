import React, { useEffect } from 'react'
import Form from 'react-bootstrap/Form';
import { CgFileDocument } from "react-icons/cg";


import document from '../../assets/images/home/document.png';
import envelope from "../../assets/images/home/envelope.png";


function Kycdocuments() {

    return (
        <div className='Kycdocuments'>
            <div className='bef-login-home-sec pb-5'>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-lg-7'>
                            <div className='card dash-card-1'>
                                <div className='card-body'>
                                    <h5 className='dash-head-1 mb-2'>KYC Documents</h5>
                                    <p className='dash-trans-txt-3 mb-4'>
                                        Let us know your place of residence and main occupation
                                    </p>
                                    <div className='kycdoc-section'>

                                        <h5 className='dash-head-2 mb-3'>KYC Documents</h5>
                                        <div className="mb-3">
                                            <label htmlFor="citizec" className="form-label">Citizenship</label>
                                            <Form.Select className="custom-select" aria-label="Default select example">
                                                <option value="">Select Option</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </Form.Select>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="country" className="form-label">Country</label>
                                            <Form.Select className="custom-select" aria-label="Default select example">
                                                <option value="">Select Option</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </Form.Select>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="occupation" className="form-label">Occupation</label>
                                            <input type="text" className="form-control" id="occupation" placeholder="john@gmail.com" />
                                        </div>

                                        <h5 className='dash-head-2 mb-3'>Birth Information</h5>
                                        <div className="mb-3">
                                            <label htmlFor="birthday" className="form-label">Birthday</label>
                                            <input type="text" className="form-control" id="birthday" placeholder="select option" />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="place" className="form-label">Place of Birth</label>
                                            <input type="text" className="form-control" id="place" placeholder="select option" />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="gender" className="form-label">Gender</label>
                                            <Form.Select className="custom-select" aria-label="Default select example">
                                                <option value="">Select Option</option>
                                                <option value="1">Male</option>
                                                <option value="2">Female</option>
                                            </Form.Select>
                                        </div>

                                        <h5 className='dash-head-2 mb-3'>Details</h5>
                                        <div className="mb-3">
                                            <label htmlFor="country" className="form-label">Country</label>
                                            <Form.Select className="custom-select" aria-label="Default select example">
                                                <option value="">Select Option</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </Form.Select>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="liable" className="form-label">Are you liable in US</label>
                                            <Form.Select className="custom-select" aria-label="Default select example">
                                                <option value="">Select Option</option>
                                                <option value="1">No</option>
                                                <option value="2">Yes</option>
                                            </Form.Select>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="taxid" className="form-label">Tax-ID  <span className='option-css'>(Optional)</span></label>
                                            <input type="text" className="form-control" id="taxid" placeholder="Gohgdv1452" />
                                        </div>

                                        <h5 className='dash-head-2 mb-3'>Invitation Code</h5>
                                        <div className="mb-3">
                                            <label htmlFor="code" className="form-label">Code</label>
                                            <input type="text" className="form-control" id="code" placeholder="1245715251" />
                                        </div>

                                        <div className='d-flex align-items-center gap-3'>
                                            <div>
                                                <h5 className='dash-head-2 mb-1'>Legal Documents</h5>
                                                <p className='dash-trans-txt-2'>
                                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                                                </p>
                                            </div>
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="legal" />
                                            </div>
                                        </div>

                                        <div className='mb-3'>
                                            <div className='doc-section'>
                                                <div className='d-flex align-items-center py-3 doc-border'>
                                                    <div className='text-one'>Terms and Conditions</div>
                                                    <div className='ms-auto'>
                                                        <CgFileDocument className='doc-css' />
                                                    </div>
                                                </div>
                                                <div className='d-flex align-items-center py-3 doc-border'>
                                                    <div className='text-one'>Pricelist</div>
                                                    <div className='ms-auto'>
                                                        <CgFileDocument className='doc-css' />
                                                    </div>
                                                </div>
                                                <div className='d-flex align-items-center py-3 doc-border'>
                                                    <div className='text-one'>Terms and condition partner bank</div>
                                                    <div className='ms-auto'>
                                                        <CgFileDocument className='doc-css' />
                                                    </div>
                                                </div>
                                                <div className='d-flex align-items-center py-3 doc-border'>
                                                    <div className='text-one'>Other condition partner Bank</div>
                                                    <div className='ms-auto'>
                                                        <CgFileDocument className='doc-css' />
                                                    </div>
                                                </div>
                                                <div className='d-flex align-items-center py-3'>
                                                    <div className='text-one'>Special condition: cash deposits</div>
                                                    <div className='ms-auto'>
                                                        <CgFileDocument className='doc-css' />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='d-flex align-items-center gap-3 mb-3'>
                                            <div>
                                                <h5 className='dash-head-2 mb-1'>Privacy Policy</h5>
                                                <p className='dash-trans-txt-2'>
                                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                                                </p>
                                            </div>
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="privacy" />
                                            </div>
                                        </div>

                                        <div className='mb-3'>
                                            <div className='doc-section'>
                                                <div className='d-flex align-items-center py-3 doc-border'>
                                                    <div className='text-one'>Data Privacy policy platform</div>
                                                    <div className='ms-auto'>
                                                        <CgFileDocument className='doc-css' />
                                                    </div>
                                                </div>
                                                <div className='d-flex align-items-center py-3 doc-border'>
                                                    <div className='text-one'>Data Protection policy partner bank</div>
                                                    <div className='ms-auto'>
                                                        <CgFileDocument className='doc-css' />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='mb-3 text-center'>
                                            <img src={envelope} className='en-css' alt='mail' />
                                            <div className='my-5'>
                                                <h6 className='fw-semibold'>Open your mail App</h6>
                                                <p>when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but.</p>
                                            </div>
                                        </div>

                                        <div className='mb-3'>
                                            <h6 className='lh-base text-center my-4'>Hereby I am opening a bank account in my own name and I confirm the following</h6>
                                            <ul className='list-unstyled ms-3'>
                                                <li><p className='dash-trans-txt-2'>1.  I am fully legally responsible for all account activity</p></li>
                                                <li><p className='dash-trans-txt-2'>2.  I use account exclusively for privacy purposes</p></li>
                                                <li><p className='dash-trans-txt-2'>3.  I do not act on behalf of, or instructed by a third person</p></li>
                                            </ul>
                                        </div>

                                        <div className='mb-3 doc-section-two'>
                                            <p className='dash-trans-txt-2 mb-0'>Beware of trickstes that try to mislead Persons into
                                                opening bank accounts under false premises (e.g.
                                                app-testing, job offers credit brokering,identificaton
                                                for apartment offers) and misuse your account
                                                for criminal purposes.</p>
                                        </div>

                                        <div className='d-flex align-items-center gap-3 mb-5 justify-content-center'>
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="privacy" />
                                            </div>
                                            <div className='dash-trans-txt-2'>
                                                I confirm the above listed statements
                                            </div>
                                        </div>

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

export default Kycdocuments