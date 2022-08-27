import React from 'react'
import syakban from '../../assets/profile.jpg'
import './avatar.css'

function Avatar() {
  return (
    <>
    <div className="container mt-5">
    <div className="row d-flex justify-content-center">
    <div className="col-md-7 ">
    {/* <div className="card p-3 py-4"> */}
                
    <div className="text-center">
    <img src={syakban} className='aku' alt='syakban' />
    </div>

    <div className="text-center mt-3">
        <h4 className="text">Hallo</h4>
        <h3 className="text">Saya Ahmad Syakban</h3>
        <span></span>
    </div>

    </div>
    </div>
    </div>
    </>
  )
}

export default Avatar;

    
