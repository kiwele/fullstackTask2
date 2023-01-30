import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Home from "./pages/Home";
import { Route, Routes, Link, BrowserRouter } from "react-router-dom";
import Register from './pages/register';
import UserDashboard from './pages/user/userDashboard';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <div>     
      <BrowserRouter>

         <Routes>
           <Route path="/home" element ={<Home />}/>
           <Route path="/register" element ={<Register />}/>
           {/* <Route path="/books" element ={<Dashboard />}/> */}
           <Route path="/user_dashboard" element ={<UserDashboard />}/>       
           <Route  path='/*' element = {<App />}/>
         </Routes>
     </BrowserRouter> 
  
    </div>

   
   
);
