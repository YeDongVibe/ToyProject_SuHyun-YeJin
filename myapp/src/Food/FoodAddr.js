import React, { useState } from 'react';
import DaumPostcode from 'react-daum-postcode';
import style from "./Food.module.css";

const FoodAddr = ({ setAddress }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const handleComplete = (data) => {
    const roadAddress = data.roadAddress;
    const jibunAddress = data.jibunAddress;
    const extraAddress = data.bname !== '' && /[동|로|가]$/g.test(data.bname)
      ? `(${data.bname})`
      : '';

    setAddress({
      postcode: data.zonecode,
      roadAddress: roadAddress,
      jibunAddress: jibunAddress,
      extraAddress: extraAddress,
    });
    handleClosePopup();
  };

  return (
    <div className={style.JoinAddr}>
      <input type="text" id="sample4_postcode" placeholder="우편번호" readOnly />
      <input type="button" onClick={handleOpenPopup} value="우편번호 찾기" /><br />
      <input type="text" id="sample4_roadAddress" placeholder="도로명주소" readOnly />
      <input type="text" id="sample4_jibunAddress" placeholder="지번주소" readOnly />
      <span id="guide" style={{ color: '#999', display: 'none' }}></span>
      <input type="text" id="sample4_detailAddress" placeholder="상세주소" />
      <input type="text" id="sample4_extraAddress" placeholder="참고항목" readOnly />

      {isPopupOpen && (
        <div
          className="custom-postcode-container"
          style={{
            position: 'fixed',
            width: '400px',
            height: '600px',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            border: '2px solid black', // 테두리를 검정색으로 지정
            borderRadius: '10px', // 테두리를 둥글게 지정
            zIndex: 100000, // 팝업이 위에 표시되도록 z-index 설정
            overflow: 'hidden', // 스크롤 바 감추기
          }}
        >
          <DaumPostcode
            onComplete={handleComplete}
            autoClose
            style={{ width: '100%', height: '100%' }}
          />
        </div>
      )}
    </div>
  );
};

export default FoodAddr;
