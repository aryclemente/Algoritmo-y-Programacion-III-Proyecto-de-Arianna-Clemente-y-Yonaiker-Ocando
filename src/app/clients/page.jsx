/* use client */

/* import Newclient from "@/component/Clients/Newclient";
import Statsclient from "@/component/Clients/Statsclient";
 */

import Listclients from "@/component/Clients/List";
import React from "react";



const Client = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const handleOpen = () => {
      setIsOpen(true);
    };
  
    const handleClose = () => {
      setIsOpen(false);
    };
    return (
      

        <>
        {/*  <Newclient />
      <Statsclients /> */}
        <button className="btn" onClick={handleOpen}>
        open modal
      </button>
      {isOpen && (
        <dialog className="modal">
          <form method="dialog" className="modal-box">
            <h3 className="font-bold text-lg">Hello!</h3>
            <p className="py-4">
              Press ESC key or click the button below to close
            </p>
            <div className="modal-action">
              <button className="btn" onClick={handleClose}>
                Close
              </button>
              <Listclients />

            </div>
          </form>
        </dialog>
      )}
      </>

    );
    
};

export default Client;


