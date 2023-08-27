/* use client */

/* import Newproduct from "@/component/product/Newproduct";
import Statsproducts from "@/component/product/Statsproducts";
 */
import Listproduct from "@/component/Product/List";
import Link from "next/link";
import React from "react";
import { AiFillPlusCircle } from "react-icons/ai";

const ProductPage = () => {
  return (
    <div className="">
      {/*  <Newproduct />
      <Statsproducts /> */}
      <div className="pe-8 pt-8 text-end ">
        <Link href={"/product/add"}>
          <button className="btn text-2xl ">
            <AiFillPlusCircle />
          </button>
        </Link>
      </div>
      <Listproduct />
    </div>
  );
};

export default ProductPage;
