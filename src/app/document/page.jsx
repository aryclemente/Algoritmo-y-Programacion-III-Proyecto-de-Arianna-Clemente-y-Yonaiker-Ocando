import ListDocument from "@/component/Document/ListDocument";
import React from "react";
import { AiOutlineFileText } from "react-icons/ai";

const DocumentPage = () => {
  return (
    <div className="">
      <div className="pe-8 pt-8 text-end  ">
        <button className="btn text-2xl ">
          <AiOutlineFileText />
        </button>
      </div>
      <ListDocument />
    </div>
  );
};

export default DocumentPage;
