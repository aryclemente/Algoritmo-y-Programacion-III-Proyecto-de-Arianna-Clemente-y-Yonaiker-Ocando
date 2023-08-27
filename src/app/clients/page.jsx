"use client";

import React from "react";
import Button from "@/component/Clients/AddClient";
import Listclients from "@/component/Clients/List";

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