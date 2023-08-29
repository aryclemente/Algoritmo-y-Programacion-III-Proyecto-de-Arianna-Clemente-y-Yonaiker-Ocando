"use client";
import React, { useState } from "react";
import Button from "../Button";
import categories from "../../data/category.json";
import clients from "../../data/user.json";
import { AiFillPlusCircle } from "react-icons/ai";
import Link from "next/link";
const AddFactura = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedClient, setSelectedClient] = useState(null);

  const handleClientSearch = (event) => {
    const cedula = event.target.value;

    const foundClient = clients.find((client) =>
      client.ci.toString().startsWith(cedula)
    );

    if (foundClient) {
      setSelectedClient(foundClient);
    } else {
      alert("nada");
    }
  };
  const click = () => {
    console.log("hola mundo", selectedClient);
  };
  return (
    <div className="px-16 py-10 h-full">
      <div className="text-3xl font-semibold pb-6">Facturar Producto</div>
      <div className="grid grid-cols-1 gap-10">
        {/* columna izqueirda */}
        <div className="">
          <form>
            <div className="grid md:grid-cols-3 md:gap-6">
              <div className="relative z-0 w-full group">
                <div className="flex">
                  <input
                    list="listClient"
                    name="browser"
                    id="browser"
                    type="text"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                    autoComplete="true"
                    onInput={handleClientSearch}
                  />
                  <datalist className="" id="listClient">
                    {clients.map((client) => (
                      <option value={client.ci} />
                    ))}
                  </datalist>
                  <label
                    for="floating_first_name"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Cédula de Identidad
                  </label>

                  <div className=" text-2xl p-2">
                    <Link href={"http://localhost:3001/clients"}>
                      <AiFillPlusCircle />
                    </Link>
                  </div>
                </div>
              </div>
              {/* ... */}
              {selectedClient && (
                <div className="mt-4">
                  <h3>Cliente Encontrado:</h3>
                  <p>Nombre: {selectedClient.first_name}</p>
                  <p>Nombre: {selectedClient.last_name}</p>
                  <p>Cédula: {selectedClient.ci}</p>
                  {/* Resto de los detalles del cliente */}
                </div>
              )}
              {/* Resto del código... */}
              <div class="relative z-0 w-full mb-6 group">
                <select className="select select-ghost w-full   appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600">
                  <option disabled selected>
                    Tipo
                  </option>
                  <option>Factura</option>
                </select>
              </div>
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
                  Compañía
                </label>
              </div>

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
                  Cliente
                </label>
              </div>
              <div class="relative z-0 w-full mb-10 group">
                <input
                  type="date"
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
                  Fecha
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
                  Precio
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
                  Cantidad
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
                  Descuento
                </label>
              </div>
              <div class="relative z-0 w-full mb-6 group">
                <select className="select select-ghost w-full   appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600">
                  <option disabled selected>
                    Categoría
                  </option>
                  {categories.map((category, i) => (
                    <option>{category.name}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="py-8">
              <Button onClick={click}>Facturar</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddFactura;
