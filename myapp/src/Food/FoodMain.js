import { Link } from "react-router-dom"

import style from "./Food.module.css"
import MainCenterImg from "../Img/FoodMain/MainCenterImg.png"
import MainTextImg from "../Img/FoodMain/MainTextImg.png"
import MainButtonImg from "../Img/FoodMain/MainButtonImg.png"

const FoodMain = () => {

    return (
        <main>
            <div className={style.MainImg}>
                <div className={style.CenterCon}>
                    <img src={MainCenterImg} alt="MainCenterImg" className={style.MainCenterImg} />
                    <img src={MainTextImg} alt="MainTextImg" className={style.Maintext} />
                </div>
                <Link to="/FoodList">
                    <div>
                        <img src={MainButtonImg} alt="MainButtonImg" className={style.MainButtonImg} />
                    </div>
                </Link>
            </div>

        </main>
    )
}

export default FoodMain;