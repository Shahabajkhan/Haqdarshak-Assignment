import React, { useState } from 'react';
import './Language.css';
import { Link } from 'react-router-dom';
import arrowImage from '../../Images/Arrow.png'; // Import your arrow image


const Language = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const languages = {
    option1: 'English',
    option2: 'हिंदी',
    option3: 'मराठी',
    // Add more languages as needed
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <div className='textbox'>
      <Link to="/secondFlyer"><button className='btn-lng'>
      <img src={arrowImage} alt="Arrow" className="btn-with-logo" /></button></Link>
      {/* <Link to="/secondFlyer" className="btn-with-logo">
          
        </Link> */}
        <p>Which language <br/>do you prefer?</p>
      </div>
      <div className='whiteBox'>
        {Object.keys(languages).map((option, index) => (
          <div className='boxfields' key={index}>
            <label>
              <input
                type="radio"
                value={option}
                checked={selectedOption === option}
                onChange={handleOptionChange}
              />
              {languages[option]}
            </label>
          </div>
        ))}
        <p className='box-fl-txt'>This allows you to experience the app in a language of your preference.</p>
        <Link to="/LoginOptions"><button className='btn-nxt'>NEXT</button></Link>
      </div>
    </div>
  );
};

export default Language;
