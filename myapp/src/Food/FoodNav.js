import React from "react";
import { Link } from "react-router-dom";
import style from "./Food.module.css";

const FoodNav = () => {
  return (
    <div className={style.navBar}>
      <ul className={style.navBar_menus}>
        <li>
          <Link to={"/"} className={style.navBar_menus_menu}>
            Main
          </Link>
        </li>
        <li>
          <Link to={"/FoodList"} className={style.navBar_menus_menu}>
            List
          </Link>
        </li>
        <li>
          <Link to={"/FoodLogin"} className={style.navBar_menus_menu}>
            Login
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default FoodNav;
