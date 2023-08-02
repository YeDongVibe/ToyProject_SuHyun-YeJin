import style from "./Food.module.css";
import LoginBt from "../Img/FoodLogin/LoginBt.png";
import LoginID from "../Img/FoodLogin/LoginID.png";
import LoginPW from "../Img/FoodLogin/LoginPW.png";

import { useState } from "react"; // Import useState to handle login validation state
import { createRoutesFromChildren, useNavigate } from "react-router-dom";
import axios from "axios";




const FoodLogin = () => {
  // front에서 id와 password 가져오기
  const [inputId, setInputId] = useState("");
  const [inputPw, setInputPw] = useState("");
  console.log("FoodLogin");
  const handleInputId = (e) => {
    setInputId(e.target.value);
  };

  const handleInputPw = (e) => {
    setInputPw(e.target.value);
  }

  const onClickLogin = () => {
    console.log("click login");
    console.log("ID: ", inputId);
    console.log("PW: ", inputPw);
    axios
      .post("http://localhost:8080/api/login", {
        id: inputId,
        password: inputPw
      })
      .then((res) => {
        console.log(res);
        console.log("res.data.userId:: ", res.data.userId);
        console.log("res.data.msg:: ", res.data.msg);
        if (res.data.userId === undefined) {
          // id 일치하지 않는 경우 userId = undefined, msg = '입력하신 id가 일치하지 않습니다.'
          console.log("=========================================", res.data.msg);
          alert("입력하신 id가 일치하지 않습니다.")
        } else if (res.data.userId === null) {
          // id는 있지만, pw는 다른 경우 userId = null, msg = undefined
          console.log("=========================================", "입력하신 비밀번호 가 일치하지 않습니다.");
          alert("입력하신 비밀번호 가 일치하지 않습니다.")
        } else if (res.data.id === inputId) {
          // id, pw 모두 일치 userId = userId1, msg = undefined
          console.log("=========================================", "로그인 성공");
          sessionStorage.setItem("user_id", inputId); // sessionStorage에 id를 user_id라는 key 값으로 저장
          sessionStorage.setItem("name", res.data.name);
        }
        // 작업 완료 되면 페이지 이동(새로고침)
        document.location.href = "/FoodList";
      })
      .catch();
  }

  return (
    <main className={style.LoginBackImg}>
      <button type="button" onClick={() => onClickLogin()}>확인</button>
      <form>
        <div className={style.Inputdiv}>
          <div className={style.Loginsub} style={{ backgroundImage: `url(${LoginID})` }}>
            <input type="text"
              id="ID"
              className="form-control"
              placeholder="Enter ID"
              name="input_id"
              value={inputId}
              onChange={handleInputId}
              required />
          </div>
          <div className={style.Loginsub} style={{ backgroundImage: `url(${LoginPW})` }}>
            <input type="password"
              id="pw"
              className="form-control"
              placeholder="Enter Password"
              name="input_pw"
              value={inputPw}
              onChange={handleInputPw}
              required />
          </div>
        </div>
        <div className={style.LoginBtdiv}>
          <img src={LoginBt} alt="LoginBt" className={style.LoginBt} />
        </div>
      </form>
    </main>
  );
};

export default FoodLogin;