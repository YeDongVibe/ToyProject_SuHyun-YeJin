import React, { useState } from "react";
import axios from "axios";

import style from "./Food.module.css"

import LoginBt from "../Img/FoodLogin/LoginBt.png"
import LoginID from "../Img/FoodLogin/LoginID.png"
import LoginPW from "../Img/FoodLogin/LoginPW.png"

const FoodLogin = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("/api/login", {
                username,
                password,
            });
            // 로그인 성공 시 처리
        } catch (error) {
            // 로그인 실패 시 처리
        }
    };

    return (
        <div className={style.LoginBackImg}>
            <div className={style.inputcontainer}>
                <img src={LoginID} alt="LoginID" className="LoginID" />
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"
                    className="login-input"
                />
            </div>
            <div className={style.inputcontainer}>
                <img src={LoginPW} alt="LoginPW" className="LoginPW" />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    className="login-input"
                />
            </div>
            <button type="submit" onClick={handleLogin} className={style.loginButton}>
                <img src={LoginBt} alt="LoginBt" className="LoginBt" />
            </button>
        </div>
    );
};

export default FoodLogin;