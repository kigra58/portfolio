import React from 'react';
import { Outlet,Navigate, BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Navbar';
// import Login from './Login';
import NotFound from './NotFound';
import Profile from '../views/Profile';
import { ROUTES } from '../utils/constant';
import NewPortfolio from '../views/NewPortfolio';
import ContactUs from '../views/ContactUs';





 
const PublicRoutes:React.FC=()=>{
  const isLogin=true;

  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      {/* <Route path={ROUTES.LOGIN}  element={isLogin ?  
      <Navigate to={ROUTES} /> : <Login/>}></Route>  */}
      <Route path={ROUTES.PORTFOLIO} element={<Profile />}></Route> 
      <Route path={ROUTES.REGISTER_PORTFOLIO} element={<NewPortfolio />}></Route>
      <Route path={ROUTES.CONTACT} element={<ContactUs />}></Route>


      <Route element={<ProtectedRoute isLogin={isLogin} />}>
        <Route path={ROUTES.NOTFOUND} element={<NotFound />}></Route>           
        <Route path={ROUTES.REGISTER_PORTFOLIO} element={<NewPortfolio />}></Route>

         {/* ADMIN ROUTE */}
      </Route>
    </Routes>
  </BrowserRouter>
  )
};


interface IProps{
    isLogin:boolean
}

const ProtectedRoute:React.FC<IProps> = ({isLogin}) => 
    isLogin ?<Outlet/>:<Navigate to={ROUTES.LOGIN} />
 
export default PublicRoutes;