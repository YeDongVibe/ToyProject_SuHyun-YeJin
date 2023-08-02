import React, { useState } from 'react';
import DaumPostcode from 'react-daum-postcode';
import style from './Food.module.css';

const FoodAddr = ({ setAddress }) => {
  const [showPopup, setShowPopup] = useState(false);

  const handleComplete = (data) => {
    setAddress({
      postcode: data.zonecode,
      roadAddress: data.roadAddress,
      jibunAddress: data.jibunAddress,
      extraAddress: data.buildingName,
    });
    setShowPopup(false); // Close the popup after address selection
  };

  const handleOpenPopup = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleSubmit = () => {
    // Perform any additional logic or submit actions here before closing the popup
    handleClosePopup();
  };

  return (
    <main>
      {/* Address search button */}
      <button className={style.AddressFindBt} onClick={handleOpenPopup}>
      </button>
      {/* Popup window */}
      {showPopup && (
        <div className={style.PopupOverlay}>
          <div className={style.PopupContent}>

            <DaumPostcode onComplete={handleComplete} autoClose={true} animation={true} />
            <div className={style.ButtonGroup}>
              <button className={style.ClosePopupButton} onClick={handleClosePopup}>
                닫기
              </button>
              <button className={style.SubmitButton} onClick={handleSubmit}>
                제출
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default FoodAddr;
