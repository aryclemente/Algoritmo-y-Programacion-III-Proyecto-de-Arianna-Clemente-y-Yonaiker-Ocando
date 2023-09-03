"use client";
import React, { useState } from "react";
import Button from "../Button";
import categories from "../../data/category.json";
import img_generic from "../../assets/generic/img-generic.png";
import { useSearchParams } from "next/navigation";
import { AiFillPlusCircle } from "react-icons/ai";
import { GrClose } from "react-icons/gr";

const AddProduct = () => {
  const [currentCategorys, setCurrentCategorys] = useState(null);

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

  const [selectedImage, setSelectedImage] = useState(null);

  const classInput = "";

  const click = () => {
    console.log("hola mundo");
  };
  return (
    <div>
      <div className=" flex-row items-center p-8">
        <button
          className="flex drop-shadow-md bg-gradient-to-r from-sky-600 to-cyan-400 text-white font-bold px-5 py-4 rounded-full"
          onClick={openModal}
        >
          <AiFillPlusCircle className="mr-2" /> Nuevo Producto
        </button>
      </div>
      {isModalOpen && (
        // el otro
        <div className="fixed inset-0 flex items-center justify-center z-50 m-auto">
          <div className="bg-white dark:bg-base-200 rounded-lg drop-shadow-xl p-8">
            <button
              className="btn dark:btn-neutral btn-circle float-right"
              onClick={closeModal}
            >
              <GrClose />
            </button>
            <h2 className="text-2xl font-bold mb-6 ">Nuevo Producto</h2>
            <form>
              <div class="grid md:grid-cols-3 md:gap-10">
                <div class="relative z-0 w-full mb-10 group">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    for="floating_first_name"
                    class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Nombre
                  </label>
                </div>

                <div class="relative z-0 w-full mb-10 group">
                  <input
                    type="text"
                    name="marca"
                    id="marca"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    for="floating_first_name"
                    class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Marca
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

                <div class="relative z-0 w-full mb-6 group">
                  <select className="select select-ghost w-full max-w-xs   appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600">
                    <option disabled selected>
                      Categoría
                    </option>
                    {categories.map((category, i) => (
                      <option>{category.name}</option>
                    ))}
                  </select>
                </div>

                <div class="relative z-0 w-full mb-10 group">
                  <textarea
                    type="description"
                    name="description"
                    id="description"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=""
                    required
                  />
                  <label
                    for="description"
                    class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Descripción
                  </label>
                </div>
              </div>

              <div className="grid md:grid-cols-2 md:gap-6">
                <div className="text-center">
                  <div className="avatar">
                    <div className="w-32 rounded-lg">
                      <img
                        className="object-cover"
                        src={selectedImage || img_generic.src}
                      />
                    </div>
                  </div>
                  <div class="relative z-0 w-full  group">
                    <input
                      type="file"
                      className="file-input w-full max-w-xs text-sm"
                      onChange={(e) =>
                        setSelectedImage(URL.createObjectURL(e.target.files[0]))
                      }
                    />
                  </div>
                </div>
              </div>

              <div className="py-8 text-end ">
                <Button onClick={click}>Agregar</Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddProduct;
