"use client";

import React from "react";
import NewClient from "@/component/Clients/AddClient";
import clients from "../../data/user.json";
import Statsclients from "@/component/Clients/Stats";
import Listclients from "@/component/Clients/list";

const Client = () => {
  return (
    <div className="">
        
      <NewClient />
      <Statsclients /> 
      <Listclients />
    </div>
  );
};

export default Client;