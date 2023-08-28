"use client";

import React from "react";
import NewClient from "@/component/Clients/AddClient";

import Listclients from "@/component/Clients/list";

const Client = () => {
  return (
    <div className="">
      {/*  <Newclient />
      <Statsclients /> */}
      <NewClient />
      
      <Listclients />
    </div>
  );
};

export default Client;