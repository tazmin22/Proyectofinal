import { useState, useEffect} from "react";
import ItemListContainer from "../ItemListContainer/ItemListContainer"
import { useParams } from "react-router-dom";
import LoaderComponent from "../LoaderComponent/LoaderComponent";
import { useItemCollection } from "../hooks/useItemCollection";
import React from 'react'

const Category = () => {
  const [productsFiltered, setProductsFiltered] = React.useState([]);

  const { categoryName } = useParams();
  const { data, loading } = useItemCollection("products");

  React.useEffect(() => {
    const productsFiltered = data.filter((product) => {
      return product.category === categoryName;
    });
    setProductsFiltered(productsFiltered);
  }, [data, categoryName]);

  return loading ? (
    <LoaderComponent />
  ) : (
    <ItemListContainer productsData={productsFiltered} />
  );
};

export default Category;