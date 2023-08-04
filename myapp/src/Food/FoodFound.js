import style from "./Food.module.css";
// import { Link } from "react-router-dom"

// import FoodFoundChk from "./FoodFoundChk";
// import FoundBackImg from "../Img/FoodFound/FoundBackImg.png"; // 이미지 파일 경로 수정
// import FoundFindBt from "../Img/FoodFound/FoundfindBt.png"


const FoodFound = () => {

    return (
        <main className={style.FoundImg}>
            <div className={style.Searchall}>
                <div className={style.Searchsub}>
                    <h1 className={style.SearchAddress}>식당명(Name)
                    </h1>
                </div>
                <div className={style.Searchsub}>
                    <h1 className={style.SearchAddress}>전화번호(Number)
                    </h1>
                </div>
                <div className={style.Searchsub}>
                    <h1 className={style.SearchAddress}>주소(Address)
                    </h1>
                </div>
                <div className={style.Searchsub}>
                    <h1 className={style.SearchParking}>주차장(Parking lot)</h1>
                </div>
                <div className={style.Searchsub}>
                    <h1 className={style.SearchPet}>반려동물 동반(with pet)</h1>
                </div>
                <div className={style.Searchsub}>
                    <h1 className={style.SearchMenu}>다국어 메뉴(English Menu)</h1>
                </div>
            </div>
        </main>
    )
}

export default FoodFound;