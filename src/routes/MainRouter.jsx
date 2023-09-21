import React from "react";
 import { BrowserRouter, Routes, Route } from "react-router-dom";
 import Home from "../components/pages/home";
 import Category from "../components/pages/Category";
 import NavBarComponent from "../components/NavBarComponents/NavBarComponents";
 import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
 import ItemDetailsContainer from "../components/ItemDetailsContainer/ItemListContainer";

const MainRouter = () => {

     return (
        <BrowserRouter>
          < NavBarComponent />
         <Routes>
         <Route path="/" element={< Home />}></Route>
       
         <Route path="/category/:categoryId" element={<Category />} />
         <Route path="/item/:productId" element={<ItemDetailsContainer />} />
           
         
        </Routes>
         </BrowserRouter>
    )
    
 }

 export default MainRouter
