"use client";
import { useState } from "react";
import clients from "../../data/clients.json";

const SearchBar = () => {
  const [selectedClient, setSelectedClient] = useState(false);
  const [busqueda, setBusqueda] = useState("");
  const [filteredClients, setFilteredClients] = useState([]);

  const handleBuscarClick = () => {
    const busquedaMinuscula = busqueda.toLowerCase();
    const clientesFiltrados = clients.filter((cliente) => {
      return (
        cliente.nombre.toLowerCase().includes(busquedaMinuscula) ||
        cliente.email.toLowerCase().includes(busquedaMinuscula)
      );
    });
    setFilteredClients(clientesFiltrados);
  };

  const handleClientSearch = (event) => {
    const cedula = event.target.value;

    const foundClient = !!cedula
      ? clients.find((client) => client.ci.toString().startsWith(cedula))
      : undefined;

    setSelectedClient(foundClient);
  };

  return (
    <>
<<<<<<< HEAD
        
        <section class="bg-gray-50 dark:bg-gray-900 flex items-center">
            <div class="max-w-screen-xl px-4 mx-auto lg:px-12 w-full">            
                <div class="relative bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
                    <div class="flex flex-col items-center justify-between p-4 space-y-3 md:flex-row md:space-y-0 md:space-x-4">
                        <div className="w-full md:w-1/2">
                            <form className="flex items-center">
                                <label for="simple-search" class="sr-only">Search</label>
                                <div className="relative w-full">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                                        </svg>
                                    </div>
                                
                                    <input list="listClient" name="browser" id="browser"   type="number" className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Buscar Cedula" required="" 
                                    autoComplete="true"
                                    onInput={ handleBuscarClick}>
                                    </input>
                                    <datalist className="" id="listClient">
                                    {clients.map((client) => (
                                        <option value={client.ci} />
                                        
                                    ))}
                                    
                                </datalist>
                                
                                </div>
                            </form>
                        </div> 

                            {selectedClient === undefined && (
                                <div className="toast toast-top toast-center">
                                    <div className="alert alert-info">
                                        <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        className="stroke-current shrink-0 w-6 h-6"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                            ></path>
                                        </svg>
                                        <span>Cliente no encontrado</span>
                                    </div>
                                </div>
                            )}
                        
                        {filteredClients.map((client) => (
                                <div key={client.id}>
                                <p>{client.nombre}</p>
                                <p>{client.email}</p>
                                </div>
                            ))}
                                
                                            
                                                
                       
=======
      <section class="bg-gray-50 dark:bg-gray-900 flex items-center">
        <div class="max-w-screen-xl px-4 mx-auto lg:px-12 w-full">
          <div class="relative bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
            <div class="flex flex-col items-center justify-between p-4 space-y-3 md:flex-row md:space-y-0 md:space-x-4">
              <div className="w-full md:w-1/2">
                <form className="flex items-center">
                  <label for="simple-search" class="sr-only">
                    Search
                  </label>
                  <div className="relative w-full">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5 text-gray-500 dark:text-gray-400"
                        fill="currentColor"
                        viewbox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                          clip-rule="evenodd"
                        />
                      </svg>
>>>>>>> 79f88de4af785e53c1134658cd5b77ef6cefad75
                    </div>

                    <input
                      list="listClient"
                      name="browser"
                      id="browser"
                      type="number"
                      className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Buscar Cedula"
                      required=""
                      autoComplete="true"
                      onInput={handleBuscarClick}
                    ></input>
                    <datalist className="" id="listClient">
                      {clients.map((client) => (
                        <option value={client.ci} />
                      ))}
                    </datalist>
                  </div>
                </form>
              </div>

              {selectedClient === undefined && (
                <div className="toast toast-top toast-center">
                  <div className="alert alert-info">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="stroke-current shrink-0 w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                    <span>Cliente no encontrado</span>
                  </div>
                </div>
              )}
              <button onClick={handleBuscarClick}>Buscar</button>
              {filteredClients.map((client) => (
                <div key={client.id}>
                  <p>{client.nombre}</p>
                  <p>{client.email}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SearchBar;
