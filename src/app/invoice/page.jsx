import ListDocument from "@/component/Invoice/ListDocument";
import React from "react";
import { AiOutlineFileText } from "react-icons/ai";
import Link from "next/link";

const DocumentPage = () => {
  return (
    <div className="">
      <div className="pe-8 pt-8 text-end ">
        <Link href={"/invoice/add"}>
          <button className="btn text-2xl">
            <AiOutlineFileText />
          </button>
        </Link>
      </div>

      <ListDocument />
    </div>
  );
};

export default DocumentPage;
