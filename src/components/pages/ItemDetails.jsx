import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";



const ItemDetails = () => {
    const [product, setProduct] = useState({});
    const { productId } = useParams();
  
    useEffect(() => {
     
      const db = getFirestore();
  
      
      const productItem = doc(db, "products", productId);
  
      
      getDoc(productItem).then((snapshot) => {
        setProduct({ id: snapshot.id, ...snapshot.data() });
      });
    }, [itemId]);
  
    return <ItemDetailsContainer productData={product} />;
  };
  
  export default ItemDetails;