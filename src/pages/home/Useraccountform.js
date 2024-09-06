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
                                            <label htmlFor="data" className="form-label">Data</label>
                                            <input type="text" className="form-control business-input-group-box" id="data" placeholder="Data" />
                                        </div>
                                        <div className="mb-4 pt-2">
                                            <label htmlFor="register" className="form-label">Registration number</label>
                                            <input type="text" className="form-control business-input-group-box" id="register" placeholder="Registration number" />
                                        </div>
                                        <div className="mb-4 pt-2">
                                            <label htmlFor="authority" className="form-label">Name of the registration authority</label>
                                            <input type="text" className="form-control business-input-group-box" id="authority" placeholder="Name of the registration authority" />
                                        </div>
                                        <div className="mb-4 pt-2">
                                            <label htmlFor="Place" className="form-label">Place of registration</label>
                                            <input type="text" className="form-control business-input-group-box" id="Place" placeholder="Place of registration" />
                                        </div>
                                    </div>
                                </div>

                                <div className='row'>
                                    <div className="col-lg-12">
                                        <div className="mb-4 pt-2">
                                            <label htmlFor="legal" className="form-label">Legal address</label>
                                            <input type="text" className="form-control business-input-group-box" id="legal" placeholder="Legal address" />
                                        </div>
                                        <div className="mb-4 pt-2">
                                            <label htmlFor="postal" className="form-label">Postal address</label>
                                            <input type="text" className="form-control business-input-group-box" id="postal" placeholder="Postal address" />
                                        </div>
                                        <div className="mb-4 pt-2">
                                            <label htmlFor="email" className="form-label">E-mail, URL</label>
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
                                {/* === */}

                                {/* === */}
                                <h4 className='mb-auto text-center business-title text-uppercase py-4'>Questionnaire for Shareholders and Administrative bodies</h4>
                                <h4 className='mb-auto text-center business-title text-uppercase pb-4'>(individuals)</h4>

                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="mb-4 pt-2">
                                            <label htmlFor="surname" className="form-label">Name, Surname</label>
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
                                            <label htmlFor="document" className="form-label">a. Name of the document</label>
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
                                            <label htmlFor="title" className="form-label">Place of work, title</label>
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
                                            <label htmlFor="wealth" className="form-label">Source of wealth</label>
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
                                        <label htmlFor="contact" className="form-label">Contact phone number or faximile</label>
                                        <input type="text" className="form-control business-input-group-box" id="contact" placeholder="phone number" />
                                    </div>
                                    <div className="mb-4 pt-2">
                                        <label htmlFor="emailid" className="form-label">Email</label>
                                        <input type="text" className="form-control business-input-group-box" id="emailid" placeholder="Email" />
                                    </div>
                                    <div className="mb-4 pt-2">
                                        <label htmlFor="dateone" className="form-label">Date</label>
                                        <input type="date" className="form-control business-input-group-box" id="dateone" placeholder="Date" />
                                    </div>
                                    <div className='mb-4 pt-2'>
                                        <label htmlFor="sign" className="form-label">Signature</label>
                                        <input type="file" className="form-control business-input-group-box" id="sign" accept="image/*" />
                                    </div>

                                </div>
                                {/* === */}
                                {/* === */}
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
                                        <label htmlFor="contact1" className="form-label">Contact phone number or faximile</label>
                                        <input type="text" className="form-control business-input-group-box" id="contact1" placeholder="phone number" />
                                    </div>
                                    <h4 className='business-subtitle'>ID or Passport information</h4>
                                    <div className="row align-items-center">
                                        <div className="col-lg-6 col-12 mb-3 pt-2">
                                            <label htmlFor="document1" className="form-label">a. Name of the document</label>
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
                                        <label htmlFor="business" className="form-label">Type of business activity</label>
                                        <input type="text" className="form-control business-input-group-box" id="business" placeholder="Type of business activity" />
                                    </div>

                                </div>
                                {/* === */}


                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Useraccountform