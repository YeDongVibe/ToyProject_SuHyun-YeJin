import style from "./Food.module.css";
import FoodFoundChk from "./FoodFoundChk";
import FoundBackImg from "../Img/FoodFound/FoundBackImg.png"; // 이미지 파일 경로 수정

const FoodFound = () => {
    return (
        <main>
            <div className={style.FoundBackImg} style={{ backgroundImage: `url("${FoundBackImg}")` }}>
                <div className={style.FoundSq}>
                    <div>
                        <h1 className={style.FoundTextH1}>식 당 명 및 음 식 명 : </h1>
                        <h2 className={style.FoundTextH2}>---------------------------------------------------</h2>
                    </div>
                </div>
                <div>
                    <FoodFoundChk id="check1" name="강서구" />
                    <FoodFoundChk id="check2" name="금정구" />
                    <FoodFoundChk id="check3" name="기장군" />
                    <FoodFoundChk id="check4" name="남구" />
                    <FoodFoundChk id="check5" name="동구" />
                    <FoodFoundChk id="check6" name="동래구" />
                    <FoodFoundChk id="check7" name="부산진구" />
                    <FoodFoundChk id="check8" name="북구" />
                </div>
                <div>
                    <FoodFoundChk id="check9" name="사상구" />
                    <FoodFoundChk id="check10" name="사하구" />
                    <FoodFoundChk id="check11" name="서구" />
                    <FoodFoundChk id="check12" name="수영구" />
                    <FoodFoundChk id="check13" name="연제구" />
                    <FoodFoundChk id="check14" name="영도구" />
                    <FoodFoundChk id="check15" name="중구" />
                    <FoodFoundChk id="check16" name="해운대구" />
                </div>
            </div>
        </main>
    )
}

export default FoodFound;
