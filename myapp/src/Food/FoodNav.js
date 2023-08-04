import React from "react";
import { Link } from "react-router-dom";
import style from "./Food.module.css";

const FoodNav = () => {
  return (
    <div className={style.NavAll}>
      <ul className={style.NavSubtop}>
        <li>
          <Link to={"/"} className={style.NavSub}>
            Main
          </Link>
        </li>
        <li>
          <Link to={"/FoodList"} className={style.NavSub}>
            List
          </Link>
        </li>
        <li>
          <Link to={"/FoodSearch"} className={style.NavSub}>
            Search
          </Link>
        </li>
        <li>
          <Link to={"/FoodFound"} className={style.NavSub}>
            Found
          </Link>
        </li>
        <li>
          <Link to={"/FoodLogin"} className={style.NavSub}>
            Login
          </Link>
        </li>
        <li>
          <Link to={"/FoodJoin"} className={style.NavSub}>
            Join
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default FoodNav;
