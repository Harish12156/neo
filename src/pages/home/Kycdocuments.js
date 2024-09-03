import React, { useEffect } from 'react'
import Form from 'react-bootstrap/Form';

function Kycdocuments() {

    return (
        <div className='Kycdocuments'>
            <div className='bef-login-home-sec pb-5'>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-lg-6'>
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

                                        <div className='d-flex align-items-center gap-3'>
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

                                        <div className=''>
                                            <div className='d-flex align-items-center mb-3'>
                                                <div className='text-one'>Terms and Conditions</div>
                                                <div className='ms-auto'>the</div>
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
    )
}

export default Kycdocuments