const FoodList = () => {

    return(
        <main>
            <div>
                <input type="text" placeholder="키워드를 입력하세요" />
                <button type="submit">Search</button>
            </div>
            <div>
            <table>
                    <thead>
                        <tr>
                            <th scope="col">자료구분 코드</th>
                            <th scope="col">예측일자</th>
                            <th scope="col">예측시간</th>
                            <th scope="col">예보 값</th>
                        </tr>                        
                    </thead>
                </table>
            </div>
            

        </main>
    )
}

export default FoodList;