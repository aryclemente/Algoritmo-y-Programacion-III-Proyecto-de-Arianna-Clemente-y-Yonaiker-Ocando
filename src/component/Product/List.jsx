"use client";
import React, { useState } from "react";
import products from "../../data/product.json";
import { AiFillPlusCircle } from "react-icons/ai";
const List = () => {
  const [currentProduct, setCurrentProduct] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const productsPerPage = 15;

  const totalPages = Math.ceil(products.length / productsPerPage);

  // Calcula el índice inicial y final de los productos a mostrar en la página actual
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentNowProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // console.log(currencyProduct);
  return (
    <div className="p-8 ">
      {/* // */}
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal ">
        <div className="modal-box">
          {currentProduct && (
            <div className="card lg:card-side bg-base-100 ">
              <figure>
                <img src={currentProduct.image} alt="img" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{currentProduct.name}</h2>
                <p>Precio: {currentProduct.price}</p>
              </div>
            </div>
          )}
          <div className="card-actions justify-end">
            <label className="btn btn-primary" htmlFor="my-modal">
              Cerrar
            </label>
          </div>
        </div>
      </div>
      {/* // */}
      <div className="overflow-x-auto">
        <div className="text-center pb-5">
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
            {currentNowProducts.map((product, i) => (
              <tr key={product.id}>
                <td>
                  <div className="">{product.id}</div>
                </td>
                <td>
                  <div className="flex items-center space-x-14">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={"https://picsum.photos/200/30" + i}
                          alt="photo product"
                        />
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
                  <label
                    htmlFor="my-modal"
                    className="btn"
                    onClick={() =>
                      setCurrentProduct({
                        ...product,
                        image: "https://picsum.photos/200/30" + i,
                      })
                    }
                  >
                    Detalles
                  </label>
                </th>
              </tr>
            ))}
          </tbody>
          {/* foot */}
          <tfoot>
            <tr>
              <th className="">ID</th>
              <th className="text-center">Nombre</th>

              <th>Nombre</th>

              <th>Precio</th>
              <th>Categoría</th>
              <th></th>
            </tr>
          </tfoot>
        </table>
      </div>

      {/* paginado */}
      <div className="text-center pt-5">
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