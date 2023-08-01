import style from "./Food.module.css";
import Login from "../Img/FoodLogin/Login.png";
import LoginsubBack from "../Img/FoodLogin/LoginsubBack.png"
import LoginBt from "../Img/FoodLogin/LoginBt.png";
import LoginCreate from "../Img/FoodLogin/LoginCreate.png"




const FoodLogin = () => {

  return (
    <main className={style.LoginBackImg}>
      <div><img src={LoginsubBack} className={style.LoginsubBack} /></div>
      <form>
        <div className={style.Inputdiv}>
          <div className={style.LoginsubId} >
            <input type="email" id="Email" placeholder="Email" img src={Login} required />
          </div>
          <div className={style.LoginsubPw} style={{ backgroundImage: `url(${Login})` }}>
            <input type="password" id="pw" name="pw" placeholder="Password" required />
          </div>
        </div>

        <button className={style.LoginBt} />
        <button className={style.LoginCreate} />
      </form>
    </main>
  );
};

export default FoodLogin;