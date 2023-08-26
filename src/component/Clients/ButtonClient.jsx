"use client";

import React, { useState } from 'react';

const ButtonWithModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para controlar si el modal está abierto o cerrado

  const openModal = () => {
    setIsModalOpen(true); // Abre el modal estableciendo el estado a true
  };

  const closeModal = () => {
    setIsModalOpen(false); // Cierra el modal estableciendo el estado a false
  };

  const [formData, setFormData] = useState({
    nombreApellido: '',
    ci: '',
    telefono: '',
    correoElectronico: '',
    direccion: '',
    fechaNacimiento: '',
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar los datos del formulario al servidor
  };

  return (
    <div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={openModal}>
        Click me
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white rounded shadow p-4">
            <h2 className="text-lg font-bold">Modal Content</h2>
            <form className="max-w-lg mx-auto" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombreApellido">
          Nombre y Apellido
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="nombreApellido"
          type="text"
          name="nombreApellido"
          value={formData.nombreApellido}
          onChange={handleInputChange}
        />
      </div>
      {/* Resto de los campos */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="ci">
          CI
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="ci"
          type="text"
          name="ci"
          value={formData.ci}
          onChange={handleInputChange}
        />
      </div>
      {/* Otros campos del formulario */}
      <div className="flex items-center justify-between">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Crear Cliente
        </button>
      </div>
    </form>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 modal_cerrar" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ButtonWithModal;
