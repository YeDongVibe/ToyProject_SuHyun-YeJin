import style from "./Food.module.css";
import "./FoodIcon.css";


const FoodFound = ({ selectedFood, onBackButtonClick }) => {
    if (!selectedFood) {
        return null;
    }

    return (
        <main className={style.FoundImg}>
            <div className={style.Searchall}>
                <div className={style.Searchsub}>
                    <span className="material-symbols-outlined">
                        storefront</span>
                    <span className={style.foundtxt}>  {selectedFood.name}</span>
                </div>
                <div className={style.Searchsub}>
                    <span className="material-symbols-outlined">
                        call</span>
                    <span className={style.foundtxt}>  {selectedFood.contact}</span>
                </div>
                <div className={style.Searchsub}>
                    <span className="material-symbols-outlined">
                        location_on</span>
                    <span className={style.foundtxt}>  {selectedFood.addr_do}</span>
                </div>
                <div className={style.Searchsub}>
                    <span className="material-symbols-outlined">
                        local_parking</span>
                    <span className={style.foundtxt}>  {selectedFood.parking}</span>
                </div>
                <div className={style.Searchsub}>
                    <span className="material-symbols-outlined">
                        pets</span>
                    <span className={style.foundtxt}>  {selectedFood.pet}</span>
                </div>
                <div className={style.Searchsub}>
                    <span className="material-symbols-outlined">
                        menu_book</span>
                    <span className={style.foundtxt}>  (English Menu) {selectedFood.englishmenu}</span>
                </div>
                <div className={style.FoundBtset}>
                    <button className={style.BackButton} onClick={onBackButtonClick}>돌아가기</button>
                </div>
            </div>
        </main>
    )
}

export default FoodFound;