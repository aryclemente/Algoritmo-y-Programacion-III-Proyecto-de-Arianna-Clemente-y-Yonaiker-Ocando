"use client";
import React, { useState } from "react";
import clients from "../../data/user.json";
import Modal from "../Clients/NewClient";

/* use client */
const list = () => {
  const [currencyClient, setcurrencyClient] = useState(clients);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const clientsPerPage = 15;
  const totalPages = Math.ceil(clients.length / clientsPerPage);

  // Calcula el índice inicial y final de los clientes a mostrar en la página actual
  const indexOfLastClient = currentPage * clientsPerPage;
  const indexOfFirstClient = indexOfLastClient - clientsPerPage;
  const currentNowclients = clients.slice(
    indexOfFirstClient,
    indexOfLastClient
  );


  console.log(currencyClient);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  
  
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
              <th>
                ID
              </th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Cedula</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {currencyClient.map((clients) => (
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
                <th>
                  <button className="btn btn-ghost btn-xs">Ver más</button>
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
              <th>Cedula</th>
              <th></th>
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
