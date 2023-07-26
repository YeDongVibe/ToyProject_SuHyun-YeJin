const FoodFoundChk = ({id, name}) => {
    return (
        <div>
            <label for={id} >
                <input type="checkbox" id={id} name="check1" />
                {name}
            </label>
        </div>
    )
}

export default FoodFoundChk;