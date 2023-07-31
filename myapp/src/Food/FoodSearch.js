import style from "./Food.module.css"
import SearchList from "../Img/FoodSearch/SearchList.png"
import FoodMap from "./FoodMap";


const FoodSearch = () => {

    return (
        <main>
            <div className={style.Searchall}>
                <div className={style.Searchsub}>
                    <h1 className={style.SearchAddress}>주소(address)
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
            <div className={style.Mapdiv}>
                <FoodMap />
            </div>

        </main>
    )
}

export default FoodSearch;