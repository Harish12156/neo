import React from 'react'

function Legalentity({ formData, handleChange, handleNext }) {
    return (
        <div className='Legalentity'>
            <h4 className='mb-auto text-center business-title text-uppercase py-4'>Questionnaire for Shareholders and Administrative bodies</h4>
            <h4 className='mb-auto text-center business-title text-uppercase pb-4'>(legal entity)</h4>


            {/* === */}
            <div className="row">
                <div className="col-lg-12">
                    <h4 className='business-subtitle'>Name of the legal entity</h4>
                    <div className="mb-4 pt-2">
                        <label htmlFor="fullName" className="form-label">Full name :</label>
                        <input type="text" className="form-control business-input-group-box" id="fullName" placeholder="Full name" />
                    </div>
                    <div className="mb-4 pt-2">
                        <label htmlFor="abbreviateName" className="form-label">Abbreviate name :</label>
                        <input type="text" className="form-control business-input-group-box" id="abbreviateName" placeholder="Abbreviate name" />
                    </div>
                    <div className="mb-4 pt-2">
                        <label htmlFor="foreignLanguageName" className="form-label">Foreign languages name (if applicable) :</label>
                        <input type="text" className="form-control business-input-group-box" id="foreignLanguageName" placeholder="Languages name" />
                    </div>
                    <div className="mb-4 pt-2">
                        <label htmlFor="legalForm" className="form-label">Legal form :</label>
                        <input type="text" className="form-control business-input-group-box" id="legalForm" placeholder="Legal form" />
                    </div>
                </div>
            </div>

            <div className='row'>
                <div className="col-lg-12">
                    <h4 className='business-subtitle'>State registration information</h4>
                    <div className="mb-4 pt-2">
                        <label htmlFor="data" className="form-label">Data :</label>
                        <input type="text" className="form-control business-input-group-box" id="data" placeholder="Data" />
                    </div>
                    <div className="mb-4 pt-2">
                        <label htmlFor="register" className="form-label">Registration number  :</label>
                        <input type="text" className="form-control business-input-group-box" id="register" placeholder="Registration number" />
                    </div>
                    <div className="mb-4 pt-2">
                        <label htmlFor="authority" className="form-label">Name of the registration authority  :</label>
                        <input type="text" className="form-control business-input-group-box" id="authority" placeholder="Name of the registration authority" />
                    </div>
                    <div className="mb-4 pt-2">
                        <label htmlFor="Place" className="form-label">Place of registration  :</label>
                        <input type="text" className="form-control business-input-group-box" id="Place" placeholder="Place of registration" />
                    </div>
                </div>
            </div>

            <div className='row'>
                <div className="col-lg-12">
                    <div className="mb-4 pt-2">
                        <label htmlFor="legal" className="form-label">Legal address :</label>
                        <input type="text" className="form-control business-input-group-box" id="legal" placeholder="Legal address" />
                    </div>
                    <div className="mb-4 pt-2">
                        <label htmlFor="postal" className="form-label">Postal address :</label>
                        <input type="text" className="form-control business-input-group-box" id="postal" placeholder="Postal address" />
                    </div>
                    <div className="mb-4 pt-2">
                        <label htmlFor="email" className="form-label">E-mail, URL :</label>
                        <input type="text" className="form-control business-input-group-box" id="email" placeholder="E-mail, URL" />
                    </div>
                    <div className="mb-4 pt-2">
                        <label htmlFor="info" className="form-label">Information on the presence (or absence) of Company’s director(s) at the legal address of the Company.</label>
                        <input type="text" className="form-control business-input-group-box" id="info" placeholder="enter" />
                    </div>
                </div>
            </div>

            <div className='row'>
                <div className="col-lg-6 col-12 mb-3">
                    <label className="mb-2  form-label">Country of Tax Residency :</label>
                    <input type="text" className="form-control business-input-group-box" placeholder="Tax Residency" />
                </div>
                <div className="col-lg-6 col-12 mb-3">
                    <label className="mb-2  form-label">TAX number :</label>
                    <input type="text" className="form-control business-input-group-box" placeholder="TAX number" />
                </div>
            </div>

            <div className="row">
                <div className="col-lg-12">
                    <div className="mb-4 pt-2">
                        <label htmlFor="share" className="form-label">Percentage and number of shares in the share capital of the Company</label>
                        <input type="text" className="form-control business-input-group-box" id="share" placeholder="Enter" />
                    </div>

                    <label htmlFor="sharehold" className="form-label">Is the Shareholder acting as a nominee?</label>
                    <div className="d-flex mb-4">
                        <div className="form-check me-3">
                            <input className="form-check-input" type="radio" name="financialObligations" id="shareholdYes" />
                            <label className="form-check-label" htmlFor="shareholdYes">
                                Yes
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="financialObligations" id="shareholdNo" />
                            <label className="form-check-label" htmlFor="shareholdNo">
                                No
                            </label>
                        </div>
                    </div>
                    <div className="mb-4 pt-2">
                        <label htmlFor="date" className="form-label  business-input-headings">Date :</label>
                        <input type="date" className="form-control business-input-group-box" id="date" placeholder="Date" />
                    </div>

                    <div className='row'>
                        <div className='col-lg-6 col-12 mt-4'>
                            <div>stamp:</div>
                        </div>
                        <div className='col-lg-6 col-12 mt-4'>
                            <div>
                                <p className='text-end'> (Name, director/representative signature)</p>
                            </div>
                        </div>
                    </div>


                </div>
            </div>

            <div className='text-end pb-5 pt-3'>
                <button type="button" className="btn btn-primary" onClick={handleNext}>
                    Next
                </button>
            </div>
        </div>
    )
}

export default Legalentity