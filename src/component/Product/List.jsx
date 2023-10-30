"use client";
import React, { useEffect, useState } from "react";
import { BiSolidFilePdf } from "react-icons/bi";
import { TbListDetails } from "react-icons/tb";
import toast from "react-hot-toast";

// const error = {
//   "relation \\"public.Producta\\" does not exist": "Credenciales Invalidas",
// };

const List = () => {
  const [currentProducts, setCurrentProducts] = useState([]);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const productsPerPage = 15;

  const totalPages = Math.ceil(
    ((currentProducts && currentProducts.length) || 0) / productsPerPage
  );

  // Calcula el índice inicial y final de los productos a mostrar en la página actual
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentNowProducts = currentProducts
    ? currentProducts.slice(indexOfFirstProduct, indexOfLastProduct)
    : [];

  //obtener productos reales de DB
  const getProducts = async () => {
    try {
      const res = await fetch("api/products");
      const product = await res.json();
      // console.log("res", res);
      console.log("product", product);

      if (res.status !== 200) {
        throw new Error(
          `Error al obtener los productos: ${product.error.message}`
        );
      }

      setCurrentProducts(product.data);
    } catch (error) {
      console.error("Error en la petición Fetch:", error);

      toast.error(`Ocurrió un error: ${error.message}`);
      setCurrentProducts([]);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  // console.log(currencyProduct);
  return (
    <div className="p-8 ">
      {/* /detalles/ */}
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
              <th>Categorías</th>
              <th>Acción</th>
            </tr>
          </thead>
          <tbody>
            {currentNowProducts.map((product, i) => (
              <tr key={product.id_product}>
                <td>
                  <div className="">{product.id_product}</div>
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
                      <div className="font-bold">{product.Name}</div>
                    </div>
                  </div>
                </td>
                <td>{product.Price}</td>

                <td>
                  {product.Category.map((c) => (
                    <div className="" key={c.Name}>
                      - {c.Name}
                    </div>
                  ))}
                </td>
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
              <th className="text-center">Nombre</th>
              <th>Precio</th>
              <th>Categorías</th>
              <th>Acción</th>
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
