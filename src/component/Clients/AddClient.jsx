"use client";
import React, { useState } from 'react';
import { GrClose } from 'react-icons/gr';
import { FaUserPlus } from 'react-icons/fa';



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
    // Agregar la lógica para enviar los datos del formulario al servidor
  };

  return (
    <div>
      <div className=" flex items-center p-8">
        <button className=" drop-shadow-md bg-gradient-to-r from-sky-600 to-cyan-400 text-white font-bold px-5 py-4 rounded-full" onClick={openModal}><FaUserPlus className="mr-2" />Nuevo Cliente</button>
      </div>
      {isModalOpen && (
        
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg drop-shadow-xl p-8">
            <button className="btn btn-circle float-right" onClick={closeModal}> 
            <GrClose />
            </button>
              <h2 className="text-2xl font-bold mb-6 ">Nuevo Cliente</h2>
                <form className="max-w-lg mx-auto p-6 bg-white" onSubmit={handleSubmit}>
                  <div class="grid md:grid-cols-2 md:gap-6">
                  {/* Nombres y Apellidos */}

                    <div class="relative z-0 w-full mb-10 group">
                      <label className="block text-gray-700 text-md font-bold mb-3" htmlFor="name"> Nombre y Apellido
                      </label>
          
                      <input
                        id="name"
                        type="text"
                        name="name"
                        value={formData.name}
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder="Yonaiker Ocando "            required
                        onChange={handleInputChange}
                      />
                    </div>
                  {/*CI */}

                  <div className="mb-4">
                    <label className="block text-gray-700 text-md font-bold mb-3" htmlFor="ci">
                      Cedula de Identidad (CI)
                    </label>
                    <input
                      
                      id="ci"
                      type="text"
                      name="ci"
                      value={formData.ci}
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder="00 000 000 "
                      required
                      onChange={handleInputChange}
                    />
                  </div>
                  {/*Telefono */}

                  <div className="mb-4">
                    <label className="block text-gray-700 text-md font-bold mb-3" htmlFor="ci">
                      Telefono
                    </label>
                    <input
                      
                      id="phone"
                      type="text"
                      name="ci"
                      value={formData.ci}
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder="+58 000 000 0000 "
                      required
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block text-gray-700 text-md font-bold mb-3" htmlFor="correo">
                      Correo Electrónico
                    </label>
                    <input
                      className=" block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      id="correo"
                      type="email"
                      name="correo"
                      placeholder="info@site.com"
                      value={formData.correo}
                      onChange={handleInputChange}
                    />
                  </div>
        {/* Otros campos del formulario */}
        <div className="flex items-center justify-between">
          <button
            className=" bg-gradient-to-r from-green-700 to-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Crear Cliente
          </button>
        </div>
      </div>
    </form>
 
          </div>
        </div>
      )}
    </div>
  );
};

export default ButtonWithModal;
