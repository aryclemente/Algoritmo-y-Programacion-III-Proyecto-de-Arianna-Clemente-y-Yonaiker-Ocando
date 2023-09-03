/* use client */


import Listproduct from "@/component/Product/List";
import Newproduct from "@/component/Product/AddProduct";
import Statsproducts from "@/component/Product/StatsProducts";
import React from "react";

const ProductPage = () => {
  return (
    <div className="">
      
        <Newproduct />
        
        <Statsproducts />

        <Listproduct />
    </div>
  );
};

export default ProductPage;
