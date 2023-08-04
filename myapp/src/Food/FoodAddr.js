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
            {/* 추가된 상세 주소 입력 */}
            <input type="text" value={address.extraAddress} className={style.moreAddr} onChange={handleExtraAddressChange} placeholder="상세 주소를 입력하세요" />
            <div className={style.ButtonGroup}>
              {/* 팝업 닫기 버튼 */}
              <button className={style.ClosePopupButton} onClick={handleClosePopup}>
                닫기
              </button>
              {/* 제출 버튼 */}
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