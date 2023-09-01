/* use client */

/* import Newproduct from "@/component/product/Newproduct";
import Statsproducts from "@/component/product/Statsproducts";
 */
import Listproduct from "@/component/Product/List";
import Newproduct from "@/component/Product/AddProduct";
import Link from "next/link";
import React from "react";

const ProductPage = () => {
  return (
    <div className="">
      <Newproduct />
      
      {/*  <Statsproducts /> */}
      <div className="pe-8 pt-8 text-end ">
        
      </div>
      <Listproduct />
    </div>
  );
};

export default ProductPage;
