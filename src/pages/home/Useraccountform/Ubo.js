import React from 'react'
import SignatureCanvas from 'react-signature-canvas';

function ubo({ formData, handleChange, handlePrevious, handleSubmit, sigPad, clearSignature }) {
    return (
        <div className='ubo'>
            <h4 className='text-center business-title text-uppercase py-4'>Ultimate beneficial owner (UBO) Information</h4>
            <p className='text-center mb-0 text-one'>(Beneficial owner means any natural person who ultimately owns or controls the legal entity through direct or indirect ownership or control over 25 % plus 1 (one) share or more of the shares or voting rights in that legal entity or any natural person who otherwise exercises control over the management of the legal entity)</p>
            <p className='text-center text-one'>(Name of the Company for which the listed below individual is the UBO)</p>

            <div className="row">
                <div className="col-lg-12">
                    <div className="mb-4 pt-2">
                        <label htmlFor="nameone" className="form-label">Name :</label>
                        <input type="text" className="form-control business-input-group-box" id="nameone" placeholder="Name" />
                    </div>
                    <div className="mb-4 pt-2">
                        <label htmlFor="lastname" className="form-label">Last name :</label>
                        <input type="text" className="form-control business-input-group-box" id="lastname" placeholder="Last name" />
                    </div>
                    <div className="mb-4 pt-2">
                        <label htmlFor="Patronymic" className="form-label">Patronymic (if applicable) :</label>
                        <input type="text" className="form-control business-input-group-box" id="Patronymic" placeholder="Patronymic" />
                    </div>
                    <div className="mb-4 pt-2">
                        <label htmlFor="dob" className="form-label">Date of birth :</label>
                        <input type="date" className="form-control business-input-group-box" id="dob" placeholder="Date of birth" />
                    </div>
                    <div className="mb-4 pt-2">
                        <label htmlFor="Placeofbirth" className="form-label">Place of birth :</label>
                        <input type="text" className="form-control business-input-group-box" id="Placeofbirth" placeholder="Place of birth" />
                    </div>
                    <div className="mb-4 pt-2">
                        <label htmlFor="Citizen" className="form-label">Citizenship :</label>
                        <input type="text" className="form-control business-input-group-box" id="Citizen" placeholder="Citizenship" />
                    </div>
                    <div className="mb-4 pt-2">
                        <label htmlFor="sharecapitaltwo" className="form-label">Share in the share capital of the Company :</label>
                        <input type="text" className="form-control business-input-group-box" id="sharecapitaltwo" placeholder="share capital of the Company" />
                    </div>
                    <div className="mb-4 pt-2">
                        <label htmlFor="Domicile2" className="form-label">Domicile :</label>
                        <input type="text" className="form-control business-input-group-box" id="Domicile2" placeholder="Domicile" />
                    </div>
                    <div className="mb-4 pt-2">
                        <label htmlFor="Actualaddress1" className="form-label">Actual address :</label>
                        <input type="text" className="form-control business-input-group-box" id="Actualaddress1" placeholder="Actual address" />
                    </div>
                    <div className="mb-4 pt-2">
                        <label htmlFor="Sourceofwealth" className="form-label">Source of wealth :</label>
                        <input type="text" className="form-control business-input-group-box" id="Sourceofwealth" placeholder="Source of wealth" />
                    </div>
                </div>
            </div>

            <div className='row'>
                <div className='row'>
                    <div className="col-lg-6 col-12 mb-3">
                        <label className="mb-2  form-label">Country of Tax Residency :</label>
                        <input type="text" className="form-control business-input-group-box" placeholder="Tax Residency" />
                    </div>
                    <div className="col-lg-6 col-12 mb-3">
                        <label className="mb-2  form-label">Tax identification number (if applicable) :</label>
                        <input type="text" className="form-control business-input-group-box" placeholder="TAX number" />
                    </div>
                </div>
            </div>

            <div className="row mb-5">
                <div className="col-lg-12">
                    <label htmlFor="sharehold" className="form-label">Are you  a public official/ Politically Exposed Person?</label>
                    <div className="d-flex align-items-center gap-lg-3 flex-wrap">
                        <div className="form-check me-3">
                            <input className="form-check-input" type="radio" name="financialObligations" id="personYes1" />
                            <label className="form-check-label" htmlFor="personYes1">
                                Yes
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="financialObligations" id="personNo1" />
                            <label className="form-check-label" htmlFor="personNo1">
                                No
                            </label>
                        </div>
                        <div class="d-flex align-items-center flex-wrap">
                            <div><label for="inputEmail31" class="form-label me-2 mb-0">If “Yes,” please provide:</label></div>
                            <div><input type="email" class="form-control business-input-group-box" id="inputEmail31" /></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row mb-4">
                <div className="col-lg-12">
                    <label htmlFor="sharehold" className="form-label">Is any of your close family members/associates public official/ Politically Exposed Person?</label>
                    <div className="d-flex align-items-center gap-lg-3 flex-wrap mb-2">
                        <div className="form-check me-3">
                            <input className="form-check-input" type="radio" name="financialObligations" id="yes2" />
                            <label className="form-check-label" htmlFor="yes2">
                                Yes
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="financialObligations" id="no2" />
                            <label className="form-check-label" htmlFor="no2">
                                No
                            </label>
                        </div>
                        <div class="d-flex align-items-center flex-wrap">
                            <div><label for="inputEmail5" class="form-label me-2 mb-0">If “Yes,” please provide:</label></div>
                            <div><input type="text" class="form-control business-input-group-box" id="inputEmail5" /></div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className="col-lg-4 col-12 mb-3">
                            <label className="mb-2  form-label">Position held :</label>
                            <input type="text" className="form-control business-input-group-box" placeholder="Position" />
                        </div>
                        <div className="col-lg-4 col-12 mb-3">
                            <label className="mb-2  form-label">Period :</label>
                            <input type="text" className="form-control business-input-group-box" placeholder="Period" />
                        </div>
                        <div className="col-lg-4 col-12 mb-3">
                            <label className="mb-2  form-label">Relationship with you :</label>
                            <input type="text" className="form-control business-input-group-box" placeholder="Relationship" />
                        </div>
                    </div>
                </div>
            </div>

            <div className='row'>
                <div className="mb-4 pt-2">
                    <label htmlFor="contact1" className="form-label">Contact phone number or faximile :</label>
                    <input type="text" className="form-control business-input-group-box" id="contact1" placeholder="phone number" />
                </div>
                <h4 className='business-subtitle'>ID or Passport information</h4>
                <div className="row align-items-center">
                    <div className="col-lg-6 col-12 mb-3 pt-2">
                        <label htmlFor="document1" className="form-label">a. Name of the document  :</label>
                        <input type="text" className="form-control business-input-group-box" id="document1" placeholder="Name of the document" />
                    </div>
                    <div className="col-lg-6 col-12 mb-3 pt-2">
                        <label htmlFor="Number1" className="form-label">b. Number :</label>
                        <input type="text" className="form-control business-input-group-box" id="Number1" placeholder="Number" />
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col-lg-6 col-12 mb-3 pt-2">
                        <label htmlFor="Issuingbody1" className="form-label">c. Issuing body :</label>
                        <input type="text" className="form-control business-input-group-box" id="Issuingbody1" placeholder="Issuing body" />
                    </div>
                    <div className="col-lg-6 col-12 mb-3 pt-2">
                        <label htmlFor="Validity1" className="form-label">d.Validity (date of issue and date of expiration) :</label>
                        <input type="text" className="form-control business-input-group-box" id="Validity1" placeholder="Validity" />
                    </div>
                </div>
                <div className="mb-4 pt-2">
                    <label htmlFor="business" className="form-label">Type of business activity :</label>
                    <input type="text" className="form-control business-input-group-box" id="business" placeholder="Type of business activity" />
                </div>

                <div className='mb-4 pt-2'>
                    <label htmlFor="sign" className="form-label">Signature :</label>
                    <SignatureCanvas
                        ref={sigPad}
                        penColor='black'
                        canvasProps={{ className: 'signature-canvas' }}
                    />
                    <button type="button" className="btn btn-danger mt-2" onClick={clearSignature}>
                        Clear Signature
                    </button>
                </div>


            </div>

            <div className='text-end pb-5 pt-3'>
                <button type="button" className="btn btn-secondary me-2" onClick={handlePrevious}>
                    Previous
                </button>
                <button type="submit" className="btn btn-success">
                    Submit
                </button>
            </div>
        </div>
    )
}

export default ubo;