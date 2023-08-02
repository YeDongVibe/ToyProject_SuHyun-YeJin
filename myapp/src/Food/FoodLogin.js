import style from "./Food.module.css";
import Login from "../Img/FoodLogin/Login.png";
import LoginsubBack from "../Img/FoodLogin/LoginsubBack.png"
import { Link } from "react-router-dom";




const FoodLogin = () => {
  const handleCreateClick = () => {
    alert("회원가입은 웹페이지에서만 가능합니다.");
  };

  return (
    <main className={style.LoginBackImg}>
      <div>
        <img src={LoginsubBack} className={style.LoginsubBack} />
      </div>
      <form>
        <div className={style.Inputdiv}>
          <div className={style.LoginsubId}>
            <input
              type="email"
              id="Email"
              placeholder="Email"
              img
              src={Login}
              required
            />
          </div>
          <div
            className={style.LoginsubPw}
            style={{ backgroundImage: `url(${Login})` }}
          >
            <input
              type="password"
              id="pw"
              name="pw"
              placeholder="Password"
              required
            />
          </div>
        </div>

        <button className={style.LoginBt} />
        {/* 'LoginCreate' 버튼을 누를 때 경고창을 띄우고, FoodJoin.js로 연결 */}
        <Link to="/foodjoin">
          <button className={style.LoginCreate} onClick={handleCreateClick} />
        </Link>
      </form>
    </main>
  );
};

export default FoodLogin;