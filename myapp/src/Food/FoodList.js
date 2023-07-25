import { Link } from "react-router-dom"

import style from "./Food.module.css"
import ListFindButtomImg from "../Img/FoodList/ListFindButton.png"

const FoodList = () => {

    return (
        <main>
            <div className={style.ListCon} >
                <div className={style.Listborder}>
                    <Link to="/FoodSearch">
                        <div>
                            <img src={ListFindButtomImg} alt="ListFindButton" className={style.ListFindButtom} />
                        </div>
                    </Link>
                </div>
            </div>
        </main >
    )
}

export default FoodList;