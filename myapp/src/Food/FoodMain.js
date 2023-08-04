import { Link } from "react-router-dom"
import style from './Food.module.css';
import Maintxt from "../Img/FoodMain/Maintxt.png"
import MainCenter from "../Img/FoodMain/MainCenter.png"
import MainBt from "../Img/FoodMain/MainBt.png"

const FoodMain = () => {

    return (

        <div className={style.MainDesk}>
            <div className={style.MainBack}>
                <div className={style.AllMain}>
                    <img className={style.Maintxt} alt="Maintxt" src={Maintxt} />
                    <img className={style.MainCenter} alt="Maincenterimg" src={MainCenter} />
                    <Link to="/FoodList">
                        <img className={style.MainBt} alt="Main button img" src={MainBt} />
                    </Link>
                </div>
            </div>
        </div>

    )
}

export default FoodMain;