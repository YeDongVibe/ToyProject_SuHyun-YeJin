import React, { useState } from 'react';
import style from "./Food.module.css";
import FoodAddr from "./FoodAddr";

const FoodJoin = () => {
    const [address, setAddress] = useState({
        postcode: '',
        roadAddress: '',
        jibunAddress: '',
        extraAddress: '',
    });

    const handleJoinButtonClick = () => {
        // 가입 버튼을 클릭할 때 해당 주소 정보를 사용하면 됩니다.
        // address 객체에는 postcode, roadAddress, jibunAddress, extraAddress가 들어있습니다.
        // 이 정보를 활용하여 가입 처리를 하시면 됩니다.

        console.log('가입 버튼 클릭 - 주소 정보:', address);
    };

    const handleAddressChange = (data) => {
        setAddress(data);
    };

    return (
        <main className={style.JoinImg}>
            <div className={style.JoinAll}>
                <div className={style.JoinEmail}>
                    <input type="email" id="Email" placeholder="Email" required />
                </div>
                <div className={style.JoinPW}>
                    <input type="password" id="password" placeholder="password" required />
                </div>
                <div className={style.JoinConfirmPw}>
                    <input type="password" id="passwordC" placeholder="password" required />
                </div>
                <div className={style.JoinNick}>
                    <input type="text" id="Nickname" placeholder="Nickname" required />
                </div>
                <div className={style.JoinPhoneN}>
                    <input type="text" id="PhNum" placeholder="Phone Number" required />
                </div>
                <div className={style.JoinAddr}>
                    {/* Display the selected address */}
                    {address.jibunAddress && (
                        <div className={style.JoinAddrtxt} >
                            {/* 텍스트로 주소 정보 표시 */}
                            <input type='text' readOnly value={`${address.postcode} ${address.roadAddress} ${address.extraAddress} ${address.extraAddress}`} />
                        </div>
                    )}
                </div>
                {/* 가입 버튼 */}
                <button className={style.JoinBt} onClick={handleJoinButtonClick} />
                {/* 주소 검색 컴포넌트를 사용하고, setAddress 함수를 전달하여 주소 정보를 업데이트 */}
                <FoodAddr setAddress={handleAddressChange} />
            </div>

        </main>
    );
};

export default FoodJoin;
