import style from './Food.module.css';
import { useEffect, useState } from 'react';
import FoodMap from './FoodMap';

const FoodList = () => {
  const [foodList, setFoodList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedFoodId, setSelectedFoodId] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [filteredFoodList, setFilteredFoodList] = useState([]);

  // 데이터 불러오기
  useEffect(() => {
    fetch('http://192.168.0.103:8080/getFoods')
      .then((response) => response.json())
      .then((data) => {
        setFoodList(data);
        setFilteredFoodList(data);
      })
      .catch((error) => console.error('데이터 불러오기 오류:', error));
  }, []);

  // 반응형 조건에 따라 itemsPerPage 값 조정
  const [itemsPerPage, setItemsPerPage] = useState(13);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 767) {
        // 모바일 화면일 경우 5개씩 보여주기
        setItemsPerPage(5);
      } else if (width <= 991) {
        // 테블릿 세로와 가로일 경우 10개씩 보여주기
        setItemsPerPage(10);
      } else {
        // 기본값인 13개씩 보여주기
        setItemsPerPage(15);
      }
    };

    handleResize(); // 컴포넌트가 마운트되면 한번 실행하여 초기값 설정

    // 윈도우 리사이즈 이벤트에 리스너 추가
    window.addEventListener('resize', handleResize);
    // 컴포넌트 언마운트 시 리스너 제거
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  let pagesToShow = 6;
  if (window.innerWidth <= 767) {
    // 모바일 화면일 경우 페이지 숫자를 0으로 줄이기
    pagesToShow = 0;
  } else if (window.innerWidth <= 991) {
    // 테블릿 세로나 가로일 경우 페이지 숫자를 3으로 줄이기
    pagesToShow = 3;
  }

  const filterTableData = () => {
    return selectedCategory === null
      ? filteredFoodList
      : filteredFoodList.filter((item) => item.category === selectedCategory);
  };

  const handleFoodNameClick = (foodId) => {
    setSelectedFoodId(foodId);
  };

  const renderTableRows = () => {
    const filteredData = filterTableData();
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, filteredData.length);

    return (
      <div className={style.Listdiv}>
        <table className={style.Listtabel}>
          <colgroup>
            <col width="15%" />
            <col width="30%" />
            <col width="35%" />
            <col width="25%" />
          </colgroup>
          <th className={style.Listhead}>번호</th>
          <th className={style.Listhead}>이름</th>
          <th className={style.Listhead}>주소</th>
        <th className={style.Listhead}>전화번호</th>
        {filteredData.slice(startIndex, endIndex).map((item) => (
          <tr key={item.id}>
            <td className={style.Listcell}>{item.id}</td>
            <td className={style.Listcell} onClick={() => handleFoodNameClick(item.id)} style={{ cursor: 'pointer' }}>
              {item.name}
            </td>
            <td className={style.Listcell}>{item.addr_do}</td>
            <td className={style.Listcell}>{item.contact}</td>
          </tr>
        ))}
      </table>
      </div >
    );
  };


const handleCategoryClick = (categoryName) => {
  if (categoryName === null) {
    setFilteredFoodList(foodList);
  } else {
    const filteredData = foodList.filter((item) => item.category === categoryName);
    setFilteredFoodList(filteredData);
  }

  setCurrentPage(1);
  setSelectedCategory(categoryName);
};

const renderPaginationButtons = () => {
  const totalPages = Math.ceil(filteredFoodList.length / itemsPerPage);
  const buttons = [];
  const startPage = Math.max(currentPage - Math.floor(pagesToShow / 2), 1);
  const endPage = Math.min(startPage + pagesToShow - 1, totalPages);

  buttons.push(
    <button key={'first'} onClick={() => setCurrentPage(1)} className={style.ListCateBt}>
      처음페이지로
    </button>
  );

  buttons.push(
    <button
      key={'prev'}
      onClick={() => setCurrentPage((prevPage) => Math.max(prevPage - 1, 1))}
      className={style.ListCateBt}
    >
      이전
    </button>
  );

  for (let i = startPage; i <= endPage; i++) {
    buttons.push(
      <button
        key={i}
        onClick={() => setCurrentPage(i)}
        className={currentPage === i ? style['active-ListCateBt'] : style['ListCateBt']}
      >
        {i}
      </button>
    );
  }

  buttons.push(
    <button
      key={'next'}
      onClick={() => setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages))}
      className={style.ListCateBt}
    >
      다음
    </button>
  );

  return buttons;
};

const categoryNames = foodList.map((item) => item.category);
const uniqueCategoryNames = Array.from(new Set(categoryNames));

return (
  <div className={style.ListImg}>
    <div className={style.ListCateBtPo}>
      <button
        key={'all'}
        onClick={() => handleCategoryClick(null)}
        className={selectedCategory === null ? style['active-ListCateBt'] : style['ListCateBt']}
      >
        전체
      </button>
      {uniqueCategoryNames.map((name) => (
        <button
          key={name}
          onClick={() => handleCategoryClick(name)}
          className={selectedCategory === name ? style['active-ListCateBt'] : style['ListCateBt']}
        >
          {name}
        </button>
      ))}
    </div>
    {renderTableRows()}
    <div className={style.PageBt}>
      {renderPaginationButtons()}
    </div>
    <FoodMap foodList={foodList} selectedFoodId={selectedFoodId} />
  </div>
);
};

export default FoodList;



