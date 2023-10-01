"use client";
import React, { useState } from "react";
import clients from "../../data/clients.json";
import Step1 from "../Steps/Step1";

const AddFactura = () => {
  return (
    <div className="px-16 py-10 h-full">
      <div className="text-3xl font-semibold pb-6">Facturar Producto</div>

      <div className="grid grid-cols-1 gap-10 pb-4">
        <ul className="steps">
          <li className="step step-primary">Datos de la Factura</li>
          <li className="step ">Método de Pago</li>
          <li className="step">Finalizar</li>
        </ul>
      </div>

      <Step1 />
    </div>
  );
};

export default AddFactura;
