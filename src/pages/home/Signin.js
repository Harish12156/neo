import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'

function Signin() {
    const [oldPassword, setOldPassword] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [showOldPassword, setShowOldPassword] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const toggleOldPasswordVisibility = () => {
        setShowOldPassword(!showOldPassword);
    };

    return (
        <div className='bef-login-home-sec'>
            <section className='bef-signin-h-sec'>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-lg-6'>
                            <div className='card dash-card-1'>
                                <div className='card-body'>
                                    <h5 class="dash-head-1 mb-4">Sign in</h5>
                                    <p class="mb-0 dash-trans-txt-2 mb-3">Get an account and control your finances better with full control of your budgets and savings.</p>

                                    <div className='profile-section-one '>
                                        <div class="mb-3">
                                            <label for="First" class="form-label">Email</label>
                                            <input type="email" class="form-control" id="First" placeholder="john@email.com" />
                                        </div>
                                        <div className="mb-3 position-relative">
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

                                        <div class="mt-4 mb-3">
                                            <button class="d-send-btn-1 rounded-pill">SignIn</button>
                                            </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Signin
