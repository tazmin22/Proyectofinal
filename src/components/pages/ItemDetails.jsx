import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";

import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import ItemDetailsContainer from "../components/ItemDetailsContainer/ItemListContainer";

const ItemDetails = () => {
    const [product, setProduct] = useState({});
    const { itemId } = useParams();
  
    useEffect(() => {
     
      const db = getFirestore();
  
      
      const productItem = doc(db, "products", itemId);
  
      
      getDoc(productItem).then((snapshot) => {
        setProduct({ id: snapshot.id, ...snapshot.data() });
      });
    }, [itemId]);
  
    return <ItemDetailsContainer productData={product} />;
  };
  
  export default ItemDetails;