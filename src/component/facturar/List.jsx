"use client";
import React, { useState } from "react";
import Factura from "../../data/factura.json";

/* use client */
const List = () => {
  const [currencyFactura, setcurrencyFactura] = useState(Factura);

  console.log(currencyFactura);
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
              <th>Id</th>
              <th>Numero</th>
              <th>Compañia</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {currencyFactura.map((Factura) => (
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    
                    <div>
                      <div className="font-bold">{Factura.id}</div>
                    </div>
                  </div>
                </td>
                <td>{Factura.FacturaNumber}</td>
                <td>{Factura.company}</td>

                <th>
                  <button className="btn btn-ghost btn-xs">Detalles</button>
                </th>
              </tr>
            ))}
          </tbody>
          {/* foot */}
          <tfoot>
            <tr>
            <th>Id</th>
              <th>Numero</th>
              <th>Compañia</th>
              <th></th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default List;
