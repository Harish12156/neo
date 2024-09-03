import React from 'react';
// import './assets/css/var.css';

function Business() {
  return (
    <div className='business'>
        <div className='custom'>
            <div className='container  py-4 whl-business-form-box'>
            <h4 className='mb-auto text-center business-title'>Onboarding form</h4>

                <div className='row business-form-00'>
                <div className='col-lg-11 mx-auto  mt-lg-4'>
                    <div>
                        <h6 className='mb-4'>1.Name of the Company:</h6>
                        <form>
                        <div className='mb-4'>
                            <label className='business-names mb-2'>first name</label><br/>
                            <input className='business-input-box' placeholder='first name'></input>
                        </div>
                        <div className='mb-4'>
                        <label className='business-names mb-2'>Abbreviate name</label><br/>
                            <input className='business-input-box' placeholder='Abbreviate name'></input>
                        </div>
                        <div className='mb-4'>
                        <label className='mb-2'>Foreign languages name (if applicable)</label><br/>
                            <input className='business-input-box' placeholder='languges'></input>
                        </div>
                        
                        <div>

                        </div>
                        </form>
                    </div>
                </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Business