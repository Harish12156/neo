import React from 'react'

function Individual({ formData, handleChange, handleNext, handlePrevious }) {
    return (
        <div className='Individual'>
            <h4 className='mb-auto text-center business-title text-uppercase py-4'>Questionnaire for Shareholders and Administrative bodies</h4>
            <h4 className='mb-auto text-center business-title text-uppercase pb-4'>(individuals)</h4>

            <div className="row">
                <div className="col-lg-12">
                    <div className="mb-4 pt-2">
                        <label htmlFor="surname" className="form-label">Name, Surname :</label>
                        <input type="text" className="form-control business-input-group-box" id="surname" placeholder="Name, Surname" />
                    </div>
                    <div className="mb-4 pt-2">
                        <label htmlFor="Date" className="form-label">Date of birth :</label>
                        <input type="Date" className="form-control business-input-group-box" id="Date" placeholder="Date of birth" />
                    </div>
                    <div className="mb-4 pt-2">
                        <label htmlFor="placeofbirth" className="form-label">Place of birth :</label>
                        <input type="text" className="form-control business-input-group-box" id="placeofbirth" placeholder="Place of birth" />
                    </div>
                    <div className="mb-4 pt-2">
                        <label htmlFor="Citizenship" className="form-label">Citizenship :</label>
                        <input type="text" className="form-control business-input-group-box" id="Citizenship" placeholder="Citizenship" />
                    </div>
                    <div className="mb-4 pt-2">
                        <label htmlFor="Actualaddress" className="form-label">Actual address :</label>
                        <input type="text" className="form-control business-input-group-box" id="Actualaddress" placeholder="Actual address" />
                    </div>
                    <div className="mb-4 pt-2">
                        <label htmlFor="Domicile" className="form-label">Domicile :</label>
                        <input type="text" className="form-control business-input-group-box" id="Domicile" placeholder="Domicile" />
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-12">
                    <h4 className='business-subtitle'>ID or Passport information</h4>
                    <div className="mb-4 pt-2">
                        <label htmlFor="document" className="form-label">a. Name of the document :</label>
                        <input type="text" className="form-control business-input-group-box" id="document" placeholder="Name of the document" />
                    </div>
                    <div className="mb-4 pt-2">
                        <label htmlFor="Number" className="form-label">b. Number :</label>
                        <input type="text" className="form-control business-input-group-box" id="Number" placeholder="Number" />
                    </div>
                    <div className="mb-4 pt-2">
                        <label htmlFor="Issuingbody" className="form-label">c. Issuing body :</label>
                        <input type="text" className="form-control business-input-group-box" id="Issuingbody" placeholder="Issuing body" />
                    </div>
                    <div className="mb-4 pt-2">
                        <label htmlFor="Validity" className="form-label">d.Validity (date of issue and date of expiration) :</label>
                        <input type="text" className="form-control business-input-group-box" id="Validity" placeholder="Validity" />
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-12">
                    <div className="mb-4 pt-2">
                        <label htmlFor="title" className="form-label">Place of work, title :</label>
                        <input type="text" className="form-control business-input-group-box" id="title" placeholder="Place of work, title" />
                    </div>
                    <div className="mb-4 pt-2">
                        <label htmlFor="sharecapital" className="form-label">Share in the share capital of the Company (for shareholders only)</label>
                        <input type="text" className="form-control business-input-group-box" id="sharecapital" placeholder="enter" />
                    </div>

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
                    <div className="mb-4 pt-2">
                        <label htmlFor="wealth" className="form-label">Source of wealth :</label>
                        <input type="text" className="form-control business-input-group-box" id="wealth" placeholder="Source of wealth" />
                    </div>

                </div>
            </div>

            <div className="row mb-5">
                <div className="col-lg-12">
                    <label htmlFor="sharehold" className="form-label">Are you  a public official/ Politically Exposed Person?</label>
                    <div className="d-flex align-items-center gap-lg-3 flex-wrap">
                        <div className="form-check me-3">
                            <input className="form-check-input" type="radio" name="financialObligations" id="personYes" />
                            <label className="form-check-label" htmlFor="personYes">
                                Yes
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="financialObligations" id="personNo" />
                            <label className="form-check-label" htmlFor="personNo">
                                No
                            </label>
                        </div>
                        <div class="d-flex align-items-center flex-wrap">
                            <div><label for="inputEmail3" class="form-label me-2 mb-0">If “Yes,” please provide:</label></div>
                            <div><input type="email" class="form-control business-input-group-box" id="inputEmail3" /></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row mb-4">
                <div className="col-lg-12">
                    <label htmlFor="sharehold" className="form-label">Is any of your close family members/associates public official/ Politically Exposed Person?</label>
                    <div className="d-flex align-items-center gap-lg-3 flex-wrap mb-2">
                        <div className="form-check me-3">
                            <input className="form-check-input" type="radio" name="financialObligations" id="yesone" />
                            <label className="form-check-label" htmlFor="yesone">
                                Yes
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="financialObligations" id="noone" />
                            <label className="form-check-label" htmlFor="noone">
                                No
                            </label>
                        </div>
                        <div class="d-flex align-items-center flex-wrap">
                            <div><label for="inputEmail4" class="form-label me-2 mb-0">If “Yes,” please provide:</label></div>
                            <div><input type="text" class="form-control business-input-group-box" id="inputEmail4" /></div>
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

            <div className='row mb-4'>
                <label htmlFor="sharehold" className="form-label">Is the Shareholder acting as a nominee?</label>
                <div className="d-flex mb-4">
                    <div className="form-check me-3">
                        <input className="form-check-input" type="radio" name="financialObligations" id="shareyes" />
                        <label className="form-check-label" htmlFor="shareyes">
                            Yes
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="financialObligations" id="shareno" />
                        <label className="form-check-label" htmlFor="shareno">
                            No
                        </label>
                    </div>
                </div>
                <div className="mb-4 pt-2">
                    <label htmlFor="contact" className="form-label">Contact phone number or faximile :</label>
                    <input type="text" className="form-control business-input-group-box" id="contact" placeholder="phone number" />
                </div>
                <div className="mb-4 pt-2">
                    <label htmlFor="emailid" className="form-label">Email :</label>
                    <input type="text" className="form-control business-input-group-box" id="emailid" placeholder="Email" />
                </div>
                <div className="mb-4 pt-2">
                    <label htmlFor="dateone" className="form-label">Date :</label>
                    <input type="date" className="form-control business-input-group-box" id="dateone" placeholder="Date" />
                </div>
                <div className='mb-4 pt-2'>
                    <label htmlFor="sign" className="form-label">Signature :</label>
                    <input type="file" className="form-control business-input-group-box" id="sign" accept="image/*" />
                </div>

            </div>

            <div className='text-end pb-5 pt-3'>
                <button type="button" className="btn btn-secondary me-2" onClick={handlePrevious}>
                    Previous
                </button>
                <button type="button" className="btn btn-primary" onClick={handleNext}>
                    Next
                </button>
            </div>
        </div>
    )
}

export default Individual