import style from './Food.module.css';
import { useEffect, useState } from 'react';
import FoodMap from "./FoodMap";

const FoodList = () => {
  const [foodList, setFoodList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20; // 한 페이지에 보여줄 항목 수를 정의합니다.
  const pagesToShow = 6; // 현재 페이지 주변에 보여줄 페이지 수를 정의합니다.

  useEffect(() => {
    fetch('http://192.168.0.64:8080/getFoods', { method: 'GET' })
      .then((response) => response.json())
      .then((data) => setFoodList(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const totalPages = Math.ceil(foodList.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const goToFirstPage = () => {
    setCurrentPage(1);
  };

  const renderTableRows = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, foodList.length);
    return foodList.slice(startIndex, endIndex).map((item) => (
      <tr key={item.id}>
        <td >{item.id}</td>
        <td>{item.name}</td>
        <td>{item.addr_do}</td>
        <td>{item.contact}</td>
      </tr>
    ));
  };

  const renderTableRowshead = () => (
    <thead>
      <tr>
        <th>아이디</th>
        <th>이름</th>
        <th>주소</th>
        <th>전화번호</th>
      </tr>
    </thead>
  );

  const renderPaginationButtons = () => {
    const buttons = [];
    const startPage = Math.max(currentPage - Math.floor(pagesToShow / 2), 1);
    const endPage = Math.min(startPage + pagesToShow - 1, totalPages);

    for (let i = startPage; i <= endPage; i++) {
      buttons.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={i === currentPage ? style.activePage : ''}
          style={i === currentPage ? activeButtonStyles : buttonStyles}
        >
          {i}
        </button>
      );
    }

    return buttons;
  };

  const buttonStyles = {
    borderColor: '#FD8A69',
    backgroundColor: 'transparent',
    padding: '5px 10px',
    margin: '1px',
    cursor: 'pointer',
    color: '#FD8A69',
  };

  const activeButtonStyles = {
    ...buttonStyles,
    color: '#FFF',
    backgroundColor: '#FD8A69',
  };

  return (
    <main>
      <div>
        <table>
          <div className={style.ListAll}>
          {renderTableRowshead()}
          <tbody className={style.ListRow}>{renderTableRows()}</tbody>
          </div>
        </table>
        <div className={style.PageBt}>
          <button onClick={goToFirstPage} style={buttonStyles}>처음페이지로</button>
          <button onClick={goToPreviousPage} style={buttonStyles}>이전</button>
          {renderPaginationButtons()}
          <button onClick={goToNextPage} style={buttonStyles}>다음</button>
        </div>
      </div>
      <div className={style.Mapdiv}>
        {foodList.length > 0 && <FoodMap foodList={foodList} />}
      </div>
    </main>
  );
};

export default FoodList;