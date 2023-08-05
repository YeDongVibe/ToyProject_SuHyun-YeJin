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
                        storefront <i className={style.foundtxt}>{selectedFood.name}</i>
                    </span>
                </div>
                <div className={style.Searchsub}>
                    <span className="material-symbols-outlined">
                        call <i className={style.foundtxt}>{selectedFood.contact}</i>
                    </span>
                </div>
                <div className={style.Searchsub}>
                    <span className="material-symbols-outlined">
                        location_on <i className={style.foundtxt}>{selectedFood.addr_do}</i>
                    </span>
                </div>
                <div className={style.Searchsub}>
                    <span className="material-symbols-outlined">
                        local_parking <i className={style.foundtxt}>{selectedFood.parking}</i>
                    </span>                   
                </div>
                <div className={style.Searchsub}>
                    <span className="material-symbols-outlined">
                        pets <i className={style.foundtxt}>{selectedFood.pet}</i>
                    </span>                   
                </div>
                <div className={style.Searchsub}>
                    <span className="material-symbols-outlined">
                        menu_book <i className={style.foundtxt}>(English Menu) {selectedFood.englishmenu}</i>
                    </span>
                </div>
            </div>
            <div>
            {/* {selectedFood.foodimg} */}
            </div>
            <button className={style.BackButton} onClick={onBackButtonClick}>돌아가기</button>
        </main>
    )
}

export default FoodFound;
