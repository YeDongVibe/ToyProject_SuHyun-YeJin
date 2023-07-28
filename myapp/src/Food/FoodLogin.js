import style from "./Food.module.css";
import LoginBt from "../Img/FoodLogin/LoginBt.png";
import LoginID from "../Img/FoodLogin/LoginID.png";
import LoginPW from "../Img/FoodLogin/LoginPW.png";
import { useState } from "react"; // Import useState to handle login validation state
import { useNavigate } from "react-router-dom";

const FoodLogin = () => {
  const navigate = useNavigate();

  // State to store login status (true for successful login, false for failed login)
  const [loginStatus, setLoginStatus] = useState(null);

  const handleLogin = () => {
    // 여기서 로그인 동작을 수행합니다.
    // 예시로 로그인이 성공했다고 가정하고 setTimeout을 사용하여 로그인 결과를 1초 뒤에 설정합니다.
    // 실제로는 서버와 통신하여 로그인 결과를 처리해야 합니다.
    setTimeout(() => {
      const loginResult = true; // 예시: 로그인 결과 (true: 성공, false: 실패)

      // 로그인 결과에 따라 처리
      if (loginResult) {
        setLoginStatus(true); // 로그인 성공
        navigate("/"); // FoodMain.js 경로로 페이지 이동
      } else {
        setLoginStatus(false); // 로그인 실패
      }
    }, 1000); // 1초 후에 로그인 결과를 설정합니다. (실제로는 서버와 통신해야 함)
  };

  return (
    <main className={style.LoginBackImg}>
      <form>
        <div className={style.Inputdiv}>
          <div className={style.Loginsub} style={{ backgroundImage: `url(${LoginID})` }}>
            <input type="text" id="ID" name="ID" placeholder="ID" required />
          </div>

          <div className={style.Loginsub} style={{ backgroundImage: `url(${LoginPW})` }}>
            <input type="password" id="pw" name="pw" placeholder="pw" required />
          </div>
        </div>
        <div className={style.LoginBtdiv}>
          <img src={LoginBt} alt="LoginBt" className={style.LoginBt} onClick={handleLogin} />
        </div>
        {loginStatus === false && <p>Login Failed. Please try again.</p>}
      </form>
    </main>
  );
};

export default FoodLogin;