/* use client */

/* import Newclient from "@/component/Clients/Newclient";
import Statsclient from "@/component/Clients/Statsclient";
 */
import Button from "@/component/Clients/ButtonClient";
import Listclients from "@/component/Clients/List";
import React from "react";

const Client = () => {
  return (
    <div className="">
      {/*  <Newclient />
      <Statsclients /> */}
      <Button /> 
      <Listclients />
    </div>
  );
};

export default Client;