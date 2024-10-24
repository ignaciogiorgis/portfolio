import React from "react";
import { BsPcDisplayHorizontal } from "react-icons/bs";
import { FaJsSquare } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { FaNode } from "react-icons/fa6";

const separator = () => {
  return (
    <div className="bg-slate-50 flex-1 py-5 flex  justify-around px-4 w-full">
      <BsPcDisplayHorizontal size={30} />
      <FaJsSquare size={30} />
      <RiReactjsLine size={30} />
      <FaNode size={30} />
    </div>
  );
};

export default separator;
