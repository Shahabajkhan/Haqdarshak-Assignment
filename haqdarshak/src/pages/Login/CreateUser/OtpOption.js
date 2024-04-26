import React from 'react';
import '../Language.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import arrowImage from "../../../Images/Arrow.png";

const OtpOption = (props) =>{
  const {state,district,pincode,phone} = useParams()
  const [selectedOption, setSelectedOption] = useState('');
 
  
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
return(
  <div>
    <div className='textbox'>
    <Link to="/ChoosePhone/:state/:district/:pincode">
          <button className="btn-lng">
            <img src={arrowImage} alt="Arrow" className="btn-with-logo" />
          </button>
        </Link>
    <p>Do you want to <br/>proceed without<br/> OTP verification?</p>
    </div>
    <div className='whiteBox'>
        <div className='boxfields'>
          <label>
            <input
              type="radio"
              value="option1"
              checked={selectedOption === 'option1'}
              onChange={handleOptionChange}
            />
            Yes
      </label>
      </div>
      <div className='boxfields'>
          <label>
            <input
              type="radio"
              value="option2"
              checked={selectedOption === 'option2'}
              onChange={handleOptionChange}
            />
             No, I want to complete OTP verification
      </label>
      </div>
      
        <p className='box-fl-txt'>Proceed without OTP if you live in an area with low network connectivity.</p>
        <Link to={selectedOption==='option1'?"target":`/PersonalDetails/${state}/${district}/${pincode}/${phone}/`}><button className='btn-nxt'>NEXT</button></Link>
    </div>
  </div>
)
}
export default OtpOption;