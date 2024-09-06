import React from 'react'

function Useraccountform() {
    return (
        <div className='Useraccountform'>
            <div className='bef-login-home-sec pb-5'>
                <div className='container justify-content-center form-section'>
                    <div className='row'>
                        <div className='col-lg-10 mx-auto'>
                            <h4 className='mb-auto text-center business-title text-uppercase py-4'>Questionnaire for Shareholders and Administrative bodies</h4>
                            <h4 className='mb-auto text-center business-title text-uppercase pb-4'>(legal entity)</h4>

                            <form>
                                <div className="row">
                                    <div className="col-lg-12">
                                    <h4 className='business-subtitle'>Name of the legal entity</h4>
                                        <div>
                                            <div className="mb-4 pt-2">
                                                <label htmlFor="fullName" className="form-label fw-semibold business-input-headings">Full name :</label>
                                                <input type="text" className="form-control business-input-group-box" id="fullName" placeholder="Full name" />
                                            </div>
                                            <div className="mb-4 pt-2">
                                                <label htmlFor="abbreviateName" className="form-label fw-semibold business-input-headings">Abbreviate name :</label>
                                                <input type="text" className="form-control business-input-group-box" id="abbreviateName" placeholder="Abbreviate name" />
                                            </div>
                                            <div className="mb-4 pt-2">
                                                <label htmlFor="foreignLanguageName" className="form-label fw-semibold business-input-headings">Foreign languages name (if applicable) :</label>
                                                <input type="text" className="form-control business-input-group-box" id="foreignLanguageName" placeholder="Languages name" />
                                            </div>
                                            <div className="mb-4 pt-2">
                                                <label htmlFor="legalForm" className="form-label fw-semibold business-input-headings">Legal form :</label>
                                                <input type="text" className="form-control business-input-group-box" id="legalForm" placeholder="Legal form" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Useraccountform