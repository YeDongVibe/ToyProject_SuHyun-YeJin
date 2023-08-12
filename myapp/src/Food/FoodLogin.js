import style from "./Food.module.css";
import Login from "../Img/FoodLogin/Login.png";
import LoginsubBack from "../Img/FoodLogin/LoginsubBack.png"
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";


const FoodLogin = () => {
  const handleCreateClick = () => {
    alert("회원가입은 웹페이지에서만 가능합니다.");
  };

  const navigate = useNavigate();

  // 로그인 필요 정보
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  // 로그인 상태 여부 상태 관리
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if(token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLoginButtonClick = () => {
    const data = {
      userEmail,
      userPassword
    };
    axios.post('http://localhost:4000/signIn', data)
      .then((res) => {
        localStorage.setItem('token', res.data.token);
        setIsLoggedIn(true);
        alert('로그인 성공');
        navigate("/FoodList");
      })
      .catch((err) => {
        alert('잘못된 아이디 혹은 패스워드 입니다')
      });
  };

  const handleLogoutButtonClick = () => {
    // 로컬 스토리지에서 토큰 삭제
    localStorage.removeItem('token');
    setIsLoggedIn(false); // 로그아웃 상태로 변경
    alert('로그아웃 성공');
    navigate("/");
  };

  return (
    <main className={style.LoginBackImg}>
      <div>
        <img src={LoginsubBack} alt="loginSubback" className={style.LoginsubBack} />
      </div>

      <div className={style.Inputdiv}>
        <div className={style.LoginsubId}>
          <input type="email" id="Email" placeholder="Email" img src={Login} onChange={(e) => setUserEmail(e.target.value)} required />
        </div>
        <div className={style.LoginsubPw} style={{ backgroundImage: `url(${Login})` }}>
          <input type="password" id="pw" name="pw" placeholder="Password" onChange={(e) => setUserPassword(e.target.value)} required />
        </div>
      </div>
      <div className={style.LogBtset}>
        {isLoggedIn ? (<button className={style.LogoutBt} onClick={handleLogoutButtonClick}/>)
        : (<button className={style.LoginBt} onClick={handleLoginButtonClick} />)}        

      </div>
      <Link to="/foodjoin">
        <button className={style.LoginCreate} onClick={handleCreateClick} />
      </Link>
    </main>
  );
};

export default FoodLogin;