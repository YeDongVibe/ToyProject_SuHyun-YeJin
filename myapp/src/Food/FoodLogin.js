import style from "./Food.module.css";
import LoginBt from "../Img/FoodLogin/LoginBt.png";
import LoginID from "../Img/FoodLogin/LoginID.png";
import LoginPW from "../Img/FoodLogin/LoginPW.png";




const FoodLogin = () => {

  return (
    <main className={style.LoginBackImg}>
      <form>
        <div className={style.Inputdiv}>
          <div className={style.Loginsub} style={{ backgroundImage: `url(${LoginID})` }}>
            <input type="text" id="ID" placeholder="ID" required />
          </div>
          <div className={style.Loginsub} style={{ backgroundImage: `url(${LoginPW})` }}>
            <input type="password" id="pw" name="pw" placeholder="pw" required />
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