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
          <Link to={"/FoodLogin"} className={style.NavSub}>
            Login
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default FoodNav;
