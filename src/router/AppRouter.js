import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PrivateRouter from './PrivateRouter';
import TravelPlan from '../pages/TravelPlan/TravelPlan';
import MainPage from '../pages/Main/Main';
import SignUp from '../pages/Member/SignUp';
import SignIn from '../pages/Member/SignIn';
import PasswordChangePage from '../pages/Member/PwChange';
const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<MainPage />}></Route>
      <Route path='/members/sign-up' element={<SignUp />}></Route>
      <Route path='/members/sign-in' element={<SignIn />}></Route>
      <Route path='/members/pw-change' element={<PasswordChangePage />}></Route>
      {/* <Route
        path='/travelplan'
        element={<PrivateRouter element={<TravelPlan />} />}
      ></Route> */}
      {/* 
      <Route path='/travelplan' element={<TravelPlan />}></Route>
      <Route path='/my-page' element={<MyPage />}></Route>
      <Route path='/mypage/account' element={< />}></Route>
      <Route path='/mypage/travelboard' element={< />}></Route>
    <Route path='/mypage/mytravel' element={<Main />}></Route>
    <Route path='/mypage/mytravel/write' element={<Main />}></Route>
    <Route path='/mypage/favorite' element={<Main />}></Route>
      <Route path='/travelboard/list' element={<TravelBoard />}></Route>
      <Route path='/travelboard/info' element={<TravelDetail />}></Route> */}
    </Routes>
  );
};

export default AppRouter;
