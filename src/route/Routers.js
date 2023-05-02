import React from "react";
import {Routes, Route} from "react-router-dom";
import {routers} from "../config/config"
import Login from "../views/01.log/Login";
import Signup from "../views/01.log/Signup";
import Forgot from "../views/01.log/Forgot";
import YourAssets from "../views/06.your_assets/your_assets";
import SubmitContent from "../views/10.submit_content/submit_content";
import AddGroup from "../views/12.add_group/add_group";

export const Routers = () => (
    <Routes>
        <Route path={routers.yourassets} element={<YourAssets/>}/>
        <Route path={routers.submitcontent} element={<SubmitContent/>}/>
        <Route path={routers.addgroup} element={<AddGroup/>}/>
    </Routes>
);

export const RoutersLog = () => (
    <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path={routers.login} element={<Login/>}/>
        <Route path={routers.signup} element={<Signup/>}/>
        <Route path={routers.forgot} element={<Forgot/>}/>
    </Routes>
);