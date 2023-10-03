"use client";
import React, { useEffect, useState } from "react";
import { BiSolidFilePdf } from "react-icons/bi";
import { TbListDetails } from "react-icons/tb";

/* use client */
const list = () => {
  const [currentClients, setCurrentClients] = useState([]);
  const [currentClient, setCurrentClient] = useState(null);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const clientsPerPage = 15;

  const totalPages = Math.ceil(
    ((currentClients && currentClients.length) || 0) / clientsPerPage
  );

  // Calcula el índice inicial y final de los clientes a mostrar en la página actual
  const indexOfLastClient = currentPage * clientsPerPage;
  const indexOfFirstClient = indexOfLastClient - clientsPerPage;
  const currentNowProducts = currentClients
    ? currentClients.slice(indexOfFirstClient, indexOfLastClient)
    : [];

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  //obtener clientes reales de DB
  const getClients = async () => {
    try {
      const res = await fetch("api/clients");
      const product = await res.json();
      console.log("res", res);
      console.log("clients", product);

      if (res.status !== 200) {
        throw new Error(
          `Error al obtener los clientes: ${product.error.message}`
        );
      }

      setCurrentClients(product.data);
    } catch (error) {
      console.error("Error en la petición Fetch:", error);

      toast.error(`Ocurrió un error: ${error.message}`);
      setCurrentClients([]);
    }
  };

  useEffect(() => {
    getClients();
  }, []);

  return (
    <>
      <div className="p-8">
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
                <th>ID</th>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Cédula</th>
                <th>Correo</th>
                <th>Celular</th>
                <th>Dirección</th>
                <th>Acción</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {currentNowProducts.map((clients) => (
                <tr>
                  <td>{clients.id}</td>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div>
                        <div className="font-bold">{clients.first_name}</div>
                      </div>
                    </div>
                  </td>
                  <td>{clients.last_name}</td>
                  <td>{clients.ci}</td>
                  <td>{clients.email}</td>
                  <td>{clients.phone}</td>
                  <td>{clients.address}</td>

                  <th>
                    <div className="d-flex flex-row gap-4">
                      <label
                        htmlFor="my-modal"
                        className="btn p-2 text-3xl"
                        onClick={() => setCurrentClient(clients)}
                      >
                        <BiSolidFilePdf />
                      </label>
                      <label
                        htmlFor="my-modal"
                        className="btn p-2 text-3xl"
                        onClick={() => setCurrentClient(clients)}
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
                <th>ID</th>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Cédula</th>
                <th>Correo</th>
                <th>Celular</th>
                <th>Dirección</th>
                <th>Acción</th>
              </tr>
            </tfoot>
          </table>
        </div>
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
    </>
  );
};

export default list;
