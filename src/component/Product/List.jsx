"use client";
import React, { useState } from "react";
import product from "../../data/product.json";
/* use client */
const List = () => {
  const [currencyProduct, setcurrencyProduct] = useState(product);

  // console.log(currencyProduct);
  return (
    <div className="p-8">
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
              <th>Nombre</th>
              <th>Precio</th>
              <th>Categoría</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {currencyProduct.map((product) => (
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
    </div>
  );
};

export default List;
