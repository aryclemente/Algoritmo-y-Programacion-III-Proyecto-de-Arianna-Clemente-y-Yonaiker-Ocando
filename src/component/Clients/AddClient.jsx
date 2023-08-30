"use client";
import React, { useState } from "react";
import { GrClose } from "react-icons/gr";
import { FaUserPlus } from "react-icons/fa";
import Button from "../Button";
import { useSearchParams } from "next/navigation";

const ButtonWithModal = () => {
  const searchParams = useSearchParams(); // agarro lo que venga en la url y lo convierte en obj

  const [isModalOpen, setIsModalOpen] = useState(
    !!searchParams.get("modalAddClient")
  ); // Estado para controlar si el modal está abierto o cerrado

  const openModal = () => {
    setIsModalOpen(true); // Abre el modal estableciendo el estado a true
  };

  const closeModal = () => {
    setIsModalOpen(false); // Cierra el modal estableciendo el estado a false
  };

  const [formData, setFormData] = useState({
    nombreApellido: "",
    ci: "",
    telefono: "",
    correoElectronico: "",
    direccion: "",
    fechaNacimiento: "",
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

  const click = () => {
    console.log("hola mundo");
  };

  return (
    <div>
      <div className=" flex items-center p-8">
        <button
          className=" drop-shadow-md bg-gradient-to-r from-sky-600 to-cyan-400 text-white font-bold px-5 py-4 rounded-full"
          onClick={openModal}
        >
          <FaUserPlus className="mr-2" /> Nuevo Cliente
        </button>
      </div>
      {isModalOpen && (
        // el otro
        <div className="fixed inset-0 flex items-center justify-center z-50 m-auto">
          <div className="bg-white rounded-lg drop-shadow-xl p-8">
            <button className="btn btn-circle float-right" onClick={closeModal}>
              <GrClose />
            </button>
            <h2 className="text-2xl font-bold mb-6 ">Nuevo Cliente</h2>
            <form>
              <div class="grid md:grid-cols-2 md:gap-10">
                <div class="relative z-0 w-full mb-10 group">
                  <input
                    type="text"
                    name="floating_first_name"
                    id="floating_first_name"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    for="floating_first_name"
                    class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Nombre y Apellido
                  </label>
                </div>
                <div class="relative z-0 w-full mb-10 group">
                  <input
                    type="number"
                    name="floating_last_name"
                    id="floating_last_name"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    for="floating_last_name"
                    class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Cédula de Identidad (CI)
                  </label>
                </div>

                <div class="relative z-0 w-full mb-10 group">
                  <input
                    type="text"
                    name="floating_last_name"
                    id="floating_last_name"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    for="floating_last_name"
                    class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Teléfono
                  </label>
                </div>

                <div class="relative z-0 w-full mb-10 group">
                  <input
                    type="email"
                    name="floating_last_name"
                    id="floating_last_name"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    for="floating_last_name"
                    class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Correo Electrónico
                  </label>
                </div>

                <div class="relative z-0 w-full mb-10 group">
                  <input
                    type="date"
                    name="date"
                    id="date"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    for="date"
                    class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Fecha de Nacimiento
                  </label>
                </div>

                <div class="relative z-0 w-full mb-10 group">
                  <input
                    type="text"
                    name="address

                    "
                    id="address

                    "
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    for="address

                    "
                    class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Dirección
                  </label>
                </div>
              </div>

              <div className="py-8">
                {/* <Button onClick={click}>Agregar</Button> */}
              </div>
            </form>

            <Button>Crear Cliente</Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ButtonWithModal;
