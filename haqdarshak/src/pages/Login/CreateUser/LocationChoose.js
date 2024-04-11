import React, { useState } from "react";
import "../Language.css";
import { Link } from "react-router-dom";
import arrowImage from "../../../Images/Arrow.png"; // Import your arrow image

const LocationChoose = () => {
  const [state, setState] = useState("");
  const [district, setDistrict] = useState("");
  const [pincode, setPincode] = useState("");
  const [isOpenS, setIsOpenS] = useState(false);
  const [isOpenD, setIsOpenD] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const onStateSelect = (state) => {
    setState(state);
    setIsOpenS(false);
    setIsVisible(true);
  };

  const onDistrictSelect = (state) => {
    setDistrict(state);
    setIsOpenD(false);
  };

  const onPincodeChange = (event) => {
    setPincode(event.target.value);
  };

  const handleUseCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // Retrieve latitude and longitude
          const { latitude, longitude } = position.coords;

          // Now you have latitude and longitude, you can use it to fetch location data
          // For simplicity, let's just log the coordinates
          console.log("Latitude:", latitude);
          console.log("Longitude:", longitude);

          // Here you can further process the retrieved location data
          // For example, you might want to fetch the city or country based on the coordinates
        },
        (error) => {
          // Handle error if geolocation retrieval fails
          console.error("Error getting geolocation:", error);
        }
      );
    } else {
      // Geolocation is not supported by this browser
      console.error("Geolocation is not supported by this browser");
    }
  };

  return (
    <div>
      <div className="textbox">
        <Link to="/LoginOptions">
          <button className="btn-lng">
            <img src={arrowImage} alt="Arrow" className="btn-with-logo" />
          </button>
        </Link>
        <p>
          Where are you <br />
          from?
        </p>
      </div>
      <div className="whiteBox">
        <div>
          <button
            className="boxfields dropdown-btn"
            onClick={() => setIsOpenS(!isOpenS)}
          >
            <input
              className="state-ip-fld"
              type="text"
              placeholder="Select State"
              value={state}
            />
            <p></p>
          </button>
          {isOpenS && (
            <div>
              <p onClick={() => onStateSelect("Maharashtra")}>Maharashtra</p>
              <p onClick={() => onStateSelect("Madhya Pradesh")}>
                Madhya Pradesh
              </p>
              <p onClick={() => onStateSelect("Punjab")}>Punjab</p>
            </div>
          )}
        </div>

        {isVisible && (
          <div>
            <button
              className="boxfields dropdown-btn"
              onClick={() => setIsOpenD(!isOpenD)}
            >
              <input
                className="state-ip-fld"
                type="text"
                placeholder="Select State"
                value={district}
              />
              <p> 1</p>
            </button>
            {isOpenD && (
              <div>
                <p onClick={() => onDistrictSelect("Pune")}>Pune</p>
                <p onClick={() => onDistrictSelect("Mumbai")}>Mumbai</p>
                <p onClick={() => onDistrictSelect("Nagpur")}>Nagpur</p>
              </div>
            )}
            <div>
              <input
                className="input-fields"
                placeholder="Enter Pincode"
                type="text"
                onChange={onPincodeChange}
              />
            </div>
          </div>
        )}

        {!isVisible && (
          <div className="dropdown-btn">
            <hr />
            <p>or</p>
            <hr />
          </div>
        )}

        {/* Use Current Location button */}
        <button className="btn-use-current-location" onClick={handleUseCurrentLocation}>
          Use Current Location
        </button>

        <Link to={`/ChoosePhone/${state}/${district}/${pincode}/`}>
          <button className="btn-nxt">NEXT</button>
        </Link>
      </div>
    </div>
  );
};

export default LocationChoose;
