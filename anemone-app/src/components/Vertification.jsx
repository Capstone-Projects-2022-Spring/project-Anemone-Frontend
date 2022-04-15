import React, { memo } from 'react';
import '../vertification.css';
import Cancle from '../image/cancle.svg';
import Icon from '../image/appicon.svg';
const Vertification = memo(() => {
  return (
    <div className='container'>
      <div className='content clear-fix'>
        <div className='float-right'>
          <a href='#'><img src={Cancle} alt="" /></a>
        </div>
        <div className='title'><h2>Dzień dobry!</h2></div>
        <div className='icon'><a href=""><img src={Icon} alt="" /></a></div>
        <div className='welcome'>
          <p>Thank you for registering with Anemone! To get you started, we need to confirm your email address. Follow the instructions in the email just sent in order to verify your account.</p>
          <p>Didn't receive an email yet? Click the button below to resend.</p>
        </div>
        <div className='resend'><a href="#">Resend</a></div>
        <div></div>
      </div>
    </div>
  )
})

export default Vertification