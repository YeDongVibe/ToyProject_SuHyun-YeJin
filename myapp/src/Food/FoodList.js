import React from 'react';
import { Link } from 'react-router-dom';
import style from './Food.module.css';
import ListFindButton from '../Img/FoodList/ListFindButton.png';

const FoodList = () => {
  return (
    <main className={style.ListBackImg}>
      <Link to="/FoodFound">
        <img src={ListFindButton} alt="ListFindButton" className={style.ListFindButton} />
      </Link>
    </main>
  );
};

export default FoodList;
