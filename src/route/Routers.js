import React from "react";
import {Routes, Route} from "react-router-dom";
import {routers} from "../config/config"
import Login from "../views/01.log/Login";
import Signup from "../views/01.log/Signup";
import Forgot from "../views/01.log/Forgot";
import Home from "../views/02.home/Home";
import Summary from "../views/03.summary/summary";
import NoticeAnalytics from "../views/05.notice_analytics/notice_analytics";
import YourAssets from "../views/06.your_assets/your_assets";
import ViewData from "../views/07.view_data/view_data";
import ReviewPannel from "../views/08.review_pannel/review_pannel";
import SubmitContent from "../views/10.submit_content/submit_content";
import AddGroup from "../views/12.add_group/add_group";

export const Routers = () => (
    <Routes>
        <Route path={routers.home} element={<Home/>}/>
        <Route path={routers.summary} element={<Summary/>}/>
        <Route path={routers.noticeanalytics} element={<NoticeAnalytics/>}/>
        <Route path={routers.yourassets} element={<YourAssets/>}/>
        <Route path={routers.viewdata} element={<ViewData/>}/>
        <Route path={routers.reviewpannel} element={<ReviewPannel/>}/>
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