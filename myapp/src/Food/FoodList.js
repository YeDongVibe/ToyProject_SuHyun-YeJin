import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import style from './Food.module.css';
import ListFindButton from '../Img/FoodList/ListFindButton.png';

const FoodList = () => {

  // fetch 되는지 확인
  useEffect(() => {
    fetch('http://10.125.121.204:8080/getFoods', {method: 'GET'})
    .then(respose => respose.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <main>
    </main>
  );
};

export default FoodList;