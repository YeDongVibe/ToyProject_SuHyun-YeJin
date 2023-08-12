import React, { useState } from 'react';
import style from "./Food.module.css";
import FoodAddr from "./FoodAddr";
import axios from 'axios';


const FoodJoin = () => {
    const [address, setAddress] = useState({
        postcode: '',
        roadAddress: '',
        jibunAddress: '',
        extraAddress: '',
    });
    // 회원가입 정보
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [userPasswordCheck, setUserPasswordCheck] = useState('');
    const [userNickname, setUserNickname] = useState('');
    const [userPhoneNumber, setUserPhoneNumber] = useState('');
    const [userAddress, setUserAddress] = useState('');
    const [userAddressDetail, setUserAddressDetail] = useState('');


    const handleJoinButtonClick = () => {
        const data = {
            userEmail,
            userPassword,
            userPasswordCheck,
            userNickname,
            userPhoneNumber,
            userAddress: `${address.roadAddress} ${address.extraAddress}`,
            userAddressDetail
        };
        axios.post('http://localhost:4000/signUp', data)
            .then((res) => {
<<<<<<< HEAD
                alert("회원가입 성공!")
=======
                alert("회원가입 성공")
>>>>>>> 6f4e50c9a454fab8034f6f55532e60816d9130a6
            })
            .catch((err) => {
            });

    };

    const handleAddressChange = (data) => {
        setAddress(data);
    };

    return (
        <main className={style.JoinImg}>
            <div className={style.JoinAll}>
                <div className={style.JoinEmail}>
                    <input type="email" id="Email" placeholder="Email" onChange={(e) => setUserEmail(e.target.value)} required />
                </div>
                <div className={style.JoinPW}>
                    <input type="password" id="password" placeholder="password" onChange={(e) => setUserPassword(e.target.value)} required />
                </div>
                <div className={style.JoinConfirmPw}>
                    <input type="password" id="passwordC" placeholder="password" onChange={(e) => setUserPasswordCheck(e.target.value)} required />
                </div>
                <div className={style.JoinNick}>
                    <input type="text" id="Nickname" placeholder="Nickname" onChange={(e) => setUserNickname(e.target.value)} required />
                </div>
                <div className={style.JoinPhoneN}>
                    <input type="text" id="PhNum" placeholder="Phone Number" onChange={(e) => setUserPhoneNumber(e.target.value)} required />
                </div>
                <div className={style.JoinAddr}>
                    {address.jibunAddress && (
                        <div className={style.JoinAddrtxt} >
                            <input type='text' readOnly value={`${address.roadAddress} ${address.extraAddress}`} onChange={(e) => setUserAddress(e.target.value)} />
                        </div>
                    )}
                </div>
                {/* 가입 버튼 */}
                <button className={style.JoinBt} onClick={handleJoinButtonClick} />
            </div>
            {/* 주소 검색 컴포넌트를 사용하고, setAddress 함수를 전달하여 주소 정보를 업데이트 */}
            <FoodAddr setAddress={handleAddressChange} />

        </main>
    );
};

export default FoodJoin;