import style from "./Food.module.css";
import Login from "../Img/FoodLogin/Login.png";
import LoginsubBack from "../Img/FoodLogin/LoginsubBack.png"
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";




const FoodLogin = () => {
  const handleCreateClick = () => {
    alert("회원가입은 웹페이지에서만 가능합니다.");
  };

  const navigate = useNavigate();

  // 로그인 필요 정보
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const handleLoginButtonClick = () => {
    const data = {
      userEmail,
      userPassword
    };
    axios.post('http://localhost:4000/members/signIn', data)
      .then((res) => {
        alert('로그인 성공')
        navigate("/FoodList")
      })
      .catch((err) => {
      });
    // fetch('http://localhost:4000/members/signIn', {method: 'POST'})
    //   .then(res => console.log(res))
    //   .catch(err => console.error(err))
  }

  return (
    <main className={style.LoginBackImg}>
      <div>
        <img src={LoginsubBack} className={style.LoginsubBack} />
      </div>

      <div className={style.Inputdiv}>
        <div className={style.LoginsubId}>
          <input type="email" id="Email" placeholder="Email" img src={Login} onChange={(e) => setUserEmail(e.target.value)} required />
        </div>
        <div className={style.LoginsubPw} style={{ backgroundImage: `url(${Login})` }}>
          <input type="password" id="pw" name="pw" placeholder="Password" onChange={(e) => setUserPassword(e.target.value)} required />
        </div>
      </div>
      <button className={style.LoginBt} onClick={handleLoginButtonClick} />
      {/* 'LoginCreate' 버튼을 누를 때 경고창을 띄우고, FoodJoin.js로 연결 */}
      <Link to="/foodjoin">
        <button className={style.LoginCreate} onClick={handleCreateClick} />
      </Link>

    </main>
  );
};

export default FoodLogin;