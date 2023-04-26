import React from "react";
import {Routes, Route} from "react-router-dom";
import {routers} from "../data/config"
import Login from "../views/01.log/Login";
import Signup from "../views/01.log/Signup";
import Forgot from "../views/01.log/Forgot";

export const RoutersLog = () => (
    <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path={routers.login} element={<Login/>}/>
        <Route path={routers.signup} element={<Signup/>}/>
        <Route path={routers.forgot} element={<Forgot/>}/>
    </Routes>
);