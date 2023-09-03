import React from 'react';
import products from "../../data/product.json";

const CustomerStatistics = () => {
   
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
                            {products.length}
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


