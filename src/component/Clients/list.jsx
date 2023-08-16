"use client";
import React, { useState } from "react";
import clients from "../../data/user.json";
/* use client */
const list = () => {
  const [currencyClient, setcurrencyClient] = useState(clients);

  console.log(currencyClient);
  return (
    <div className="p-8">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
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
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
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
              <th></th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Cedula</th>
              <th></th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default list;
