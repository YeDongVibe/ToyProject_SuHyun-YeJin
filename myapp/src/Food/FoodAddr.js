import React, { useState } from 'react';
import DaumPostcode from 'react-daum-postcode';
import style from './Food.module.css';

const FoodAddr = ({ setAddress }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [address, setAddressState] = useState({
    roadAddress: '',
    jibunAddress: '',
    extraAddress: '',
  });

  const handleComplete = (data) => {
    setAddressState({
      roadAddress: data.roadAddress,
      jibunAddress: data.jibunAddress,
    });
    setShowPopup(true); // Show the popup to get extra address
  };

  const handleOpenPopup = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    // setAddress 함수를 호출하여 전체 주소 정보를 FoodJoin.js로 전달
    setAddress(address);
  };

  const handleExtraAddressChange = (event) => {
    setAddressState({
      ...address,
      extraAddress: event.target.value,
    });
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
            {/* 추가된 상세 주소 입력 */}
            <input type="text" value={address.extraAddress} className={style.moreAddr} onChange={handleExtraAddressChange} placeholder="상세 주소를 입력하세요" />
            <button className={style.ClosePopupButton} onClick={handleClosePopup}>
              Submit
            </button>
          </div>
        </div>
      )}
    </main>
  );
};

export default FoodAddr;