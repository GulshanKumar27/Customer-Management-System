import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Registration from "./Components/Registration";
import Items from "./Components/Items";
import Billing from "./Components/Billing";

const App = () => {
  return (  
  <>
  <BrowserRouter>
   <Routes>   
 <Route path="/" element={<Registration/>}/>
 <Route path="/Login" element={<Login/>}/>
 <Route path="/Home" element={<Home/>}/>
 <Route path="/Items" element={<Items/>}/>
 <Route path="/Billing" element={<Billing/>}/>

   </Routes>
  </BrowserRouter> 
 </> 
  )
}
export default App ;