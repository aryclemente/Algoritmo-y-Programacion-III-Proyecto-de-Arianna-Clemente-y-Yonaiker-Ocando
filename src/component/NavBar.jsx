import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const NavBar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">IUJO Systems</a>
      </div>

      <div className="flex-1 px-2 text-center ">
        <a className="btn btn-ghost ">Inicio</a>
        <a className="btn btn-ghost">Facturación</a>
        <a className="btn btn-ghost">Productos</a>
        <a className="btn btn-ghost">Contacto</a>
      </div>

      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="https://www.flaticon.es/icono-gratis/usuario_1177568?term=usuario&page=1&position=2&origin=tag&related_id=1177568" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-center">
                Perfil
                
              </a>
            </li>
            <li>
            <a className="justify-center">Configuración</a>
            </li>
            <li>
            <a className="justify-center">Cerrar Sesión</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
