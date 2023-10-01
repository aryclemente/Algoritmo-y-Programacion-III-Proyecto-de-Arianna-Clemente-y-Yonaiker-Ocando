"use client";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const CustomerStatistics = () => {
  const [countProduct, setCountProduct] = useState(0);

  const getTotalProduct = async () => {
    try {
      const res = await fetch("api/products");
      const product = await res.json();
      console.log("productA", product);

      if (!product.data) {
        toast.error("Ocurrió un error al obtener los productos", error);
      }

      const count = product.data.length;
      setCountProduct(count);
    } catch (error) {
      console.error("Error al obtener los productos:", error);
      toast.error("Ocurrió un error al obtener los productos", error);
    }
  };

  useEffect(() => {
    getTotalProduct();
  }, []);

  return (
    <>
      <div className="px-6 pt-6 2xl:container">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="md:col-span-2 lg:col-span-1">
            <div className="h-full space-y-6 group p-6 sm:p-8 rounded-3xl bg-white border border-gray-200/50 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
              <h5 className="text-xl text-gray-700 dark:text-gray-300">
                Total de Productos
              </h5>
              <div className="my-8">
                <h1 className="text-5xl font-bold text-gray-800 dark:text-white">
                  {countProduct}
                </h1>
              </div>
            </div>
          </div>

          <div className="md:col-span-2 lg:col-span-1">
            <div className="h-full space-y-6 group p-6 sm:p-8 rounded-3xl bg-white border border-gray-200/50 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
              <h5 className="text-xl text-gray-700 dark:text-gray-300">
                Marca con más Productos
              </h5>
              <div className="my-8">
                <h1 className="text-5xl  text-gray-800 dark:text-white">
                  Nike
                </h1>
              </div>
            </div>
          </div>

          <div className="md:col-span-2 lg:col-span-1">
            <div className="h-full space-y-6 group p-6 sm:p-8 rounded-3xl bg-white border border-gray-200/50 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
              <h5 className="text-xl text-gray-700 dark:text-gray-300">
                Categoría con más productos
              </h5>
              <div className="my-8">
                <h1 className="text-5xl font-bold text-gray-800 dark:text-white">
                  Masonry
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomerStatistics;
