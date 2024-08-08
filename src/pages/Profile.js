import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import profile from '../assets/images/icons/Avatar.jpg';
import { FaRegEdit } from "react-icons/fa";
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';



function Profile() {

    const [oldPassword, setOldPassword] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [showOldPassword, setShowOldPassword] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const toggleOldPasswordVisibility = () => {
        setShowOldPassword(!showOldPassword);
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    return (
        <div className='profile-section'>
            <div className='profile-section-one'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-lg-9 profile-col'>
                            <div className='row py-4'>
                                <div className='col-lg-5 text-center p-2 pro-left'>
                                    <div className='m-2'>
                                        <div className=''><LazyLoadImage alt="Profile-picture" src={profile} className='pro-pic mb-lg-5 mb-3' /></div>
                                        <div className='user-name mb-3'>Maietry Prajapati</div>
                                        <div className='user-id mb-5'>foutlaw@rempic.io</div>
                                        <div className=''>
                                            <button className='edit-profile'><FaRegEdit className='me-2 align-text-top' />Edit Profile</button>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-7 py-2 ps-4'>
                                    <ul class="nav nav-pills mb-3 align-items-center gap-5" id="pills-tab" role="tablist">

                                        <li class="nav-item" role="presentation">
                                            <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Profile</button>
                                        </li>
                                        <li class="nav-item" role="presentation">
                                            <button class="nav-link active" id="pills-security-tab" data-bs-toggle="pill" data-bs-target="#pills-security" type="button" role="tab" aria-controls="pills-security" aria-selected="true">Security</button>
                                        </li>
                                    </ul>
                                    <div class="tab-content" id="pills-tabContent">
                                        <div class="tab-pane fade show active" id="pills-security" role="tabpanel" aria-labelledby="pills-security-tab" tabindex="0">

                                            <div className="password-container mb-3">
                                                <label htmlFor="formGroupExampleInput" className="form-label">Old Password</label>
                                                <input
                                                    type={showOldPassword ? 'text' : 'password'}
                                                    className="form-control password-input"
                                                    id="formGroupExampleInput"
                                                    value={oldPassword}
                                                    onChange={(e) => setOldPassword(e.target.value)}
                                                />
                                                <span
                                                    className="password-toggle-icon"
                                                    onClick={toggleOldPasswordVisibility}
                                                >
                                                    {showOldPassword ? <FaEyeSlash /> : <FaEye />}
                                                </span>
                                            </div>

                                            <div className="password-container mb-3">
                                                <label htmlFor="formGroupExampleInput2" className="form-label">Password</label>
                                                <input
                                                    type={showPassword ? 'text' : 'password'}
                                                    className="form-control password-input"
                                                    id="formGroupExampleInput2"
                                                    value={password}
                                                    onChange={(e) => setPassword(e.target.value)}
                                                />
                                                <span
                                                    className="password-toggle-icon"
                                                    onClick={togglePasswordVisibility}
                                                >
                                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                                </span>
                                            </div>

                                            <div className="password-container mb-3">
                                                <label htmlFor="formGroupExampleInput3" className="form-label">Confirm Password</label>
                                                <input
                                                    type={showConfirmPassword ? 'text' : 'password'}
                                                    className="form-control password-input"
                                                    id="formGroupExampleInput3"
                                                    value={confirmPassword}
                                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                                />
                                                <span
                                                    className="password-toggle-icon"
                                                    onClick={toggleConfirmPasswordVisibility}
                                                >
                                                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                                                </span>
                                            </div>

                                            <div className='mt-4 mb-3'>
                                                <button className='done-css'>Done</button>
                                            </div>
                                        </div>
                                        <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">

                                            <div className='password-container'>
                                                <div class="mb-3">
                                                    <label for="First" class="form-label">First Name</label>
                                                    <input type="text" class="form-control" id="First" placeholder="First Name" />
                                                </div>
                                                <div class="mb-3">
                                                    <label for="Last" class="form-label">Last Name</label>
                                                    <input type="text" class="form-control" id="Last" placeholder="Last Name" />
                                                </div>
                                                <div class="mb-3">
                                                    <label for="Last" class="form-label">Phone Number</label>
                                                    <input type="text" class="form-control" id="Last" placeholder="Phone Number" />
                                                </div>
                                                <div class="mb-3">
                                                    <label for="email" class="form-label">Email</label>
                                                    <input type="text" class="form-control" id="email" placeholder="john@gmail.com" />
                                                </div>
                                            </div>
                                            <div className='mt-4 mb-3'>
                                                <button className='done-css'>Done</button>
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

export default Profile;