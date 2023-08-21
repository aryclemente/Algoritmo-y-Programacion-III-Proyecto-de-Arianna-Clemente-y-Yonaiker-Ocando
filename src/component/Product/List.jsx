"use client";
import React, { useState } from "react";
import products from "../../data/product.json";
/* use client */
const List = () => {
  const [currentProduct, setCurrentProduct] = useState(products);

  // console.log(currencyProduct);
  return (
    <div className="p-8">
      {/* // */}
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal ">
        <div className="modal-box">
          <div className="card lg:card-side bg-base-100 ">
            <figure>
              <img src={currentProduct.imagen} alt="img" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{currentProduct.name}</h2>
              <p>Precio: {currentProduct.price}</p>
            </div>
          </div>
          <div className="card-actions justify-end">
            <label className="btn btn-primary" htmlFor="my-modal">
              Cerrar
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
              <th>Nombre</th>
              <th>Precio</th>
              <th>Categoría</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {products.map((product) => (
              <tr>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={product.imagen}
                          alt="Avatar Tailwind CSS Component"
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
                    onClick={() => setCurrentProduct(product)}
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
              <th>Nombre</th>
              <th>Precio</th>
              <th>Categoría</th>
              <th></th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default List;
