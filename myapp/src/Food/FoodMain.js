import style from "./Food.module.css"
import MainCenterImg from "../Img/FoodMain/MainCenterImg.png"
import MainTextImg from "../Img/FoodMain/MainTextImg"
const FoodMain = () => {

    return (
        <main>
            <div className={style.MainImg}>
                <div className={style.CenterCon}>
                    <img src={MainCenterImg} alt="MainCenterImg" className={style.MainCenterImg} />
                    <img src={MainTextImg} alt="MainTextImg" className={style.Maintext} />
                </div>
            </div>
        </main>
    )
}

export default FoodMain;