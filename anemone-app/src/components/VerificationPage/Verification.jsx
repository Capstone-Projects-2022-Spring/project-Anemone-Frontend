import React, { memo } from 'react';
import './Verification.css';
import Cancle from '../../image/cancelBtn.png';
import Icon from '../../image/appicon.svg';
import { useNavigate } from "react-router-dom";
const Verification = memo(() => {
  const navigate = useNavigate();
  function goHome(){
    navigate('/home');
  }
  return (
    <div className='container'>
      <div className='content clear-fix'>
        <div className='float-right'>
          <a href='' onClick={goHome}><img src={Cancle} alt="" /></a>
        </div>
        <div className='title'><h2>Dzień dobry!</h2></div>
        <div className='icon'><a href="" onClick={goHome}><img src={Icon} alt="" /></a></div>
        <div className='welcome'>
          <p>Thank you for registering with Anemone! To get you started, we need to confirm your email address. Follow the instructions in the email just sent in order to verify your account.</p>
          <p>Didn't receive an email yet? Please wait for a second.</p>
        </div>
      </div>
    </div>
  )
})

export default Verification