import style from "./Food.module.css";

const FoodFoundChk = ({id, name}) => {
    return (
        <div>
            <label for={id} className={style.checkboxLabel} >
                <input type="checkbox" id={id} name="check1"/>
                {name}
            </label>
        </div>
    )
}

export default FoodFoundChk;