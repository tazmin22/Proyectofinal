import { useState, useEffect} from "react";
import ItemListContainer from "../ItemListContainer/ItemListContainer"
import axios from "axios"
import { productsData } from "../../json/productsData";
import { collection, getDocs, getFirestore, onSnapshot } from "firebase/firestore";

import React from 'react'


const Home = () => {
 

  const [products, setProducts] = useState([]);
  useEffect(() => {
    
    const db = getFirestore();

   
    const productsCollection = collection(db, "products");

    
    getDocs(productsCollection).then((snapshot) => {
      setProducts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
  }, []);

  return <ItemListContainer productsData={products} />;
};

export default Home;