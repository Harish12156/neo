import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import PhoneInput from 'react-phone-input-2';
import { Link } from 'react-router-dom';
import Successfully from '../../assets/images/home/Successfully.png';
import Icon1 from '../../assets/images/home/icons/icon1.png';
import Icon2 from '../../assets/images/home/icons/icon2.png';
import Icon3 from '../../assets/images/home/icons/icon3.png';

import { LazyLoadImage } from 'react-lazy-load-image-component';

function Signup() {
    const [oldPassword, setOldPassword] = useState('');
    const [password, setPassword] = useState('');
    const [showOldPassword, setShowOldPassword] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [phone, setPhone] = useState('');
    const [country, setCountry] = useState('us');
    const [isSignedUp, setIsSignedUp] = useState(false); // State to track if the user has signed up

    const toggleOldPasswordVisibility = () => {
        setShowOldPassword(!showOldPassword);
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };


    const placeholders = {
        us: '(201) 555-0123',
        gb: '07400 123456',
        fr: '06 12 34 56 78',
        de: '0151 23456789',
        in: '091234 56789',
    };

    const handleSignup = () => {
        // Here you can handle the signup logic (e.g., form validation, API call)
        // If signup is successful, set the isSignedUp state to true
        setIsSignedUp(true);
    };

    return (
        <div className='bef-login-home-sec'>
            <section className='bef-signin-h-sec pb-5'>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-lg-6'>
                            {!isSignedUp ? ( // Conditionally render the signup form or success message
                                <div className='card dash-card-1'>
                                    <div className='card-body'>
                                        <h5 className="dash-head-1 mb-2">Create an Account</h5>
                                        <p className="mb-0 dash-trans-txt-2 mb-4">Get an account and control your finances better with full control of your budgets and savings.</p>

                                        <div className='profile-section-one'>
                                            <div className="mb-3">
                                                <label htmlFor="First" className="form-label">First Name</label>
                                                <input type="text" className="form-control" placeholder="First Name" />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="Last" className="form-label">Last Name</label>
                                                <input type="text" className="form-control" placeholder="Last Name" />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="phone" className="form-label">Phone Number</label>
                                                <PhoneInput
                                                    country={country}
                                                    value={phone}
                                                    onChange={(value, countryData) => {
                                                        setPhone(value);
                                                        setCountry(countryData.countryCode);
                                                    }}
                                                    placeholder={placeholders[country] || 'Enter phone number'}
                                                    inputProps={{
                                                        name: 'phone',
                                                        id: 'phone',
                                                        className: 'form-control',
                                                    }}
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="email" className="form-label">Email</label>
                                                <input type="email" className="form-control" id="email" placeholder="john@email.com" />
                                            </div>

                                            <div className="position-relative mb-3">
                                                <label htmlFor="formGroupExampleInput" className="form-label">Password</label>
                                                <input
                                                    type={showOldPassword ? 'text' : 'password'}
                                                    className="form-control password-input"
                                                    id="formGroupExampleInput"
                                                    value={oldPassword}
                                                    onChange={(e) => setOldPassword(e.target.value)}
                                                    placeholder="**********"
                                                />
                                                <span
                                                    className="password-toggle-icon"
                                                    onClick={toggleOldPasswordVisibility}
                                                >
                                                    {showOldPassword ? <FaEye /> : <FaEyeSlash />}
                                                </span>
                                            </div>

                                            <div className="position-relative mb-3">
                                                <label htmlFor="formGroupExampleInput2" className="form-label">Re-Enter Password</label>
                                                <input
                                                    type={showPassword ? 'text' : 'password'}
                                                    className="form-control password-input"
                                                    id="formGroupExampleInput2"
                                                    value={password}
                                                    onChange={(e) => setPassword(e.target.value)}
                                                    placeholder="**********"
                                                />
                                                <span
                                                    className="password-toggle-icon"
                                                    onClick={togglePasswordVisibility}
                                                >
                                                    {showPassword ? <FaEye /> : <FaEyeSlash />}
                                                </span>
                                            </div>

                                            <div className="mb-3">
                                                <label htmlFor="referralId" className="form-label">Referral ID</label>
                                                <input type="text" className="form-control" id="referralId" placeholder="referral ID12345" />
                                            </div>

                                            <div className="mb-3 form-check align-items-center gap-2">
                                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                                <label className="form-label mb-0" htmlFor="exampleCheck1">
                                                    <span className='opacity-50'>I have read and agree to</span> the terms of conditions <span className='opacity-50'>&</span> Privacy Policy
                                                </label>
                                            </div>

                                            <div className="mt-4 mb-3">
                                                <button className="d-send-btn-1 rounded-pill" onClick={handleSignup}>
                                                    SignUp
                                                </button>
                                            </div>
                                            <div className="mb-3 d-flex align-items-center gap-2 justify-content-center">
                                                <label className="form-label mb-0">Already have an Account?</label>
                                                <Link to="/signin" className='link-s-l-1'>Sign In</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className='card dash-card-1'>
                                    <div className='card-body'>
                                        <div className='text-center'>
                                            <LazyLoadImage src={Successfully} alt='Successfully' className='img-fluid' />
                                        </div>

                                        <h5 className="dash-head-1 mb-2 text-center">Sign up Successfully</h5>
                                        <p className="mb-0 dash-trans-txt-2 mb-4 text-center">Everything will be fine!</p>
                                        <div className='px-lg-4'>
                                            <h5 className='mb-3'>Unlock your Sustainable Bank Account</h5>
                                            <div className='d-flex flex-row gap-2 mb-2'>
                                                <LazyLoadImage src={Icon1} alt='Icon1' className='img-fluid success-icon-1' />
                                                <span>Save the climate with each Euro</span>
                                            </div>
                                            <div className='d-flex flex-row gap-2 mb-2'>
                                                <LazyLoadImage src={Icon2} alt='Icon2' className='img-fluid success-icon-1' />
                                                <span>Save money in sub-accounts</span>
                                            </div>
                                            <div className='d-flex flex-row gap-2 mb-2'>
                                                <LazyLoadImage src={Icon3} alt='Icon3' className='img-fluid success-icon-1' />
                                                <span>Pay with a beautiful card</span>
                                            </div>
                                            <button className='d-send-btn-gr-1 mt-4'>
                                                <div className='d-send-btn-gr-1-1'>
                                                    Unlock Debit Card
                                                </div>
                                            </button>
                                        </div>

                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Signup;
