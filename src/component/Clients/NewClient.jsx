import React, { useState } from "react";
import clients from "../../data/user.json";

const Modal = ({ onClose }) => {
    return (
      <dialog className="modal">
        <form method="dialog" className="modal-box">
          {/* Aquí puedes agregar los campos del formulario */}
          <h3 className="font-bold text-lg">Nuevo cliente</h3>
          <button className="btn" onClick={onClose}>
            Cerrar
          </button>
        </form>
      </dialog>
    );
  };

  export default Modal;

  