"use client";

import React from "react";
import NewClient from "@/component/Clients/AddClient";
import Statsclients from "@/component/Clients/Stats";
import Listclients from "@/component/Clients/list";
import Search from "@/component/Clients/SearchClientes";


const Client = () => {
  return (
    <div className="">
        
      <NewClient />
      <Search />
      <Statsclients /> 
      <Listclients />
    </div>
  );
};

export default Client;