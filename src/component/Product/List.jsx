"use client";
import React, { useState } from "react";
import product from "../../data/product.json";
import { AiFillPlusCircle } from "react-icons/ai";
/* use client */
const List = () => {
  const [currencyProduct, setCurrencyProduct] = useState(product);
  const [currentPage, setCurrentPage] = useState(1);

  const productsPerPage = 15;

  const totalPages = Math.ceil(currencyProduct.length / productsPerPage);

  // Calcula el índice inicial y final de los productos a mostrar en la página actual
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = currencyProduct.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // console.log(currencyProduct);
  return (
    <div className="p-8 ">
      <div className=" text-end pe-5">
        <button className="btn text-xl">
          <AiFillPlusCircle />
        </button>
      </div>
      {/* // */}
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Congratulations random Internet user!
          </h3>
          <p className="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
          <div className="modal-action">
            <label htmlFor="my-modal" className="btn">
              Yay!
            </label>
          </div>
        </div>
      </div>
      {/* // */}
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th className="">ID</th>
              <th className="text-center">Nombre</th>
              <th>Precio</th>
              <th>Categoría</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {currentProducts.map((product) => (
              <tr key={product.id}>
                <td>
                  <div className="">{product.id}</div>
                </td>
                <td>
                  <div className="flex items-center space-x-14">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={product.imagen} alt="photo product" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{product.name}</div>
                    </div>
                  </div>
                </td>
                <td>{product.price}</td>
                <td>{product.category}</td>
                <th>
                  <label className="btn btn-ghost btn-xs" htmlFor="my-modal">
                    detalles
                  </label>
                </th>
              </tr>
            ))}
          </tbody>
          {/* foot */}
          <tfoot>
            <tr>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Categoría</th>
              <th></th>
            </tr>
          </tfoot>
        </table>
      </div>

      {/* listado */}
      <div className="text-center">
        <div className="join">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              className={`join-item btn ${
                currentPage === index + 1 ? "btn-active" : ""
              }`}
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default List;
