import { useState, useEffect} from "react";
import ItemListContainer from "../ItemListContainer/ItemListContainer"
import axios from "axios"
import { useParams } from "react-router-dom";
import { productsData } from "../../json/productsData";


import React from 'react'

const category = () => {

  const {categoryId} = useParams();



    const filter = productsData.filter((item) => item.category === categoryId);

  return (
      <ItemListContainer productsData ={filter} />

   )
}

export default category