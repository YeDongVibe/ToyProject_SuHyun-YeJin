import style from "./Food.module.css"

import LoginBt from "../Img/FoodLogin/LoginBt.png"
import LoginID from "../Img/FoodLogin/LoginID.png"
import LoginPW from "../Img/FoodLogin/LoginPW.png"

const FoodLogin = () => {

    return (
        <main className={style.LoginBackImg}>
            <form>
                <div class="grid">
                    <label for="ID" >
                        <input type="text" id="ID" name="ID" placeholder="ID" required />
                    </label>

                    <label for="pw">
                        <input type="text" id="pw" name="pw" placeholder="pw" required />
                    </label>
                </div>
                <button  type="submit"><img src={LoginBt} alt="LoginBt" className={style.LoginBt}/></button>
            </form>
        </main>

    );
};

export default FoodLogin;