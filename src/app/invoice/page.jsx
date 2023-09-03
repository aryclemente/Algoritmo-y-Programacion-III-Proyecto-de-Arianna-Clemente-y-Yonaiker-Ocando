import ListDocument from "@/component/Invoice/ListDocument";
import React from "react";
import { AiOutlineFileText } from "react-icons/ai";
import Link from "next/link";

const DocumentPage = () => {
  return (
    <div className="">
      <div className="flex-row items-center p-8">
        <Link href={"/invoice/add"}>
          <button className="flex drop-shadow-md bg-gradient-to-r from-sky-600 to-cyan-400 text-white font-bold px-5 py-4 rounded-full">
            <AiOutlineFileText className="mr-2" /> Nueva Factura
          </button>
        </Link>
      </div>

      <ListDocument />
    </div>
  );
};

export default DocumentPage;
