"use client";
import React, { useState } from "react";
import invoices from "../../data/factura.json";
import { TbListDetails } from "react-icons/tb";
import { BiSolidFilePdf } from "react-icons/bi";

const ListDocument = () => {
  const [currentProduct, setCurrentProduct] = useState(invoices);
  const [currentPage, setCurrentPage] = useState(1);

  const productsPerPage = 15;

  const totalPages = Math.ceil(invoices.length / productsPerPage);

  // Calcula el índice inicial y final de los productos a mostrar en la página actual
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentNowProducts = invoices.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  return (
    <div className="p-8 ">
      <div className="pb-2">
        <div className=" text-start  rounded-md bg-slate-800 p-3">
          <div className="font-bold text-xl pb-4">Busqueda</div>
          <div className="form-control d-flex flex-row gap-4">
            <select className="select select-bordered ">
              <option disabled selected>
                Tipo
              </option>
              <option>FA</option>
              <option>NC</option>
              <option>ND</option>
            </select>
            <input
              type="number"
              placeholder="N. Documento"
              className="input input-bordered w-40"
            />
            <input
              type="date"
              placeholder="Fecha "
              className="input input-bordered w-44"
            />
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-44"
            />
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-44"
            />
          </div>
        </div>
      </div>
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
              <th className="">Tipo</th>
              <th>Serie</th>
              <th>Documento</th>
              <th>Fecha Emisión</th>
              <th>Cliente</th>
              <th>Total</th>
              <th className="text-center">Acción</th>
            </tr>
          </thead>
          <tbody>
            {currentNowProducts.map((product) => (
              <tr key={product.id}>
                <td>
                  <div className="">{product.id}</div>
                </td>
                <td>
                  <div className="">{product.type}</div>
                </td>
                <td>{product.serie}</td>
                <td>{product.doc}</td>
                <td>{product.date}</td>
                <td>{product.client}</td>
                <td>{product.total}</td>
                <th>
                  <div className="d-flex flex-row gap-4">
                    <label
                      htmlFor="my-modal"
                      className="btn p-2 text-3xl"
                      onClick={() => setCurrentProduct(product)}
                    >
                      <BiSolidFilePdf />
                    </label>
                    <label
                      htmlFor="my-modal"
                      className="btn p-2 text-3xl"
                      onClick={() => setCurrentProduct(product)}
                    >
                      <TbListDetails />
                    </label>
                  </div>
                </th>
              </tr>
            ))}
          </tbody>
          {/* foot */}
          <tfoot>
            <tr>
              <th className="">ID</th>
              <th className="">Tipo</th>
              <th>Serie</th>
              <th>Documento</th>
              <th>Fecha Emisión</th>
              <th>Cliente</th>
              <th>Total</th>
              <th className="text-center">Acción</th>
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

export default ListDocument;
