import style from './Food.module.css';
import { useEffect, useState } from 'react';
import FoodMap from './FoodMap';
import FoodFound from './FoodFound';
import { Link } from 'react-router-dom';

const FoodList = () => {
  const [foodList, setFoodList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedFoodId, setSelectedFoodId] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [filteredFoodList, setFilteredFoodList] = useState([]);
  const [selectedFood, setSelectedFood] = useState(null);
  const itemsPerPage = 15;
  let pagesToShow = 6;

  useEffect(() => {
    fetch('http://localhost:8080/getFoods')
      .then((response) => response.json())
      .then((data) => {
        setFoodList(data);
        setFilteredFoodList(data);
      })
      .catch((error) => console.error('데이터 불러오기 오류:', error));
  }, []);

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

  const renderTableRows = () => {
    const filteredData = filterTableData();
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, filteredData.length);

    return (
      <div className={style.Listdiv}>
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
        <table className={style.Listtabel}>
          <thead>
            <tr>
              <th className={style.Listhead}>번호</th>
              <th className={style.Listhead}>이름</th>
              <th className={style.Listhead}>주소</th>
              <th className={style.Listhead}>전화번호</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.slice(startIndex, endIndex).map((item) => (
              <tr key={item.id}>
                <td className={style.Listcell}>{item.id}</td>
                <td className={`${style.Listcell} ${selectedFoodId === item.id ? style.SelectedFood : ''}`}>
                    <span onClick={() => setSelectedFoodId(item.id)} style={{ cursor: 'pointer' }}>
                      {item.name}
                    </span>
                  </td>
                  <td className={style.Listcell}>{item.addr_do}</td>
                  <td className={style.Listcell}>{item.contact}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className={style.PaginationContainer}>
          {renderPaginationButtons()}
        </div>
        <div className={style.semiBt}>
          {selectedFoodId && (
            <button className={style.ListDetail} onClick={() => setSelectedFood(filteredData.find(item => item.id === selectedFoodId))}>
              상세보기
            </button>
          )}
          <FoodMap foodList={foodList} selectedFoodId={selectedFoodId} />
        </div>
      </div>
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
      <div key="pagination" className={style.PaginationContainer}>
        <button key={'first'} onClick={() => setCurrentPage(1)} className={style.ListCateBt}>
          처음페이지로
        </button>
        <button
          key={'prev'}
          onClick={() => setCurrentPage((prevPage) => Math.max(prevPage - 1, 1))}
          className={style.ListCateBt}
        >
          이전
        </button>
        {[...Array(endPage - startPage + 1).keys()].map((index) => {
          const page = startPage + index;
          return (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={currentPage === page ? style['active-ListCateBt'] : style['ListCateBt']}
            >
              {page}
            </button>
          );
        })}
        <button
          key={'next'}
          onClick={() => setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages))}
          className={style.ListCateBt}
        >
          다음
        </button>
      </div>
    );

    return buttons;
  };

  const categoryNames = foodList.map((item) => item.category);
  const uniqueCategoryNames = Array.from(new Set(categoryNames));

  return (
    <div className={style.ListImg}>
      <div className={style.RownPageBt}>
        {renderTableRows()}
      </div>
      <FoodFound selectedFood={selectedFood} onBackButtonClick={() => setSelectedFood(null)} />
    </div>
  );
};

export default FoodList;
