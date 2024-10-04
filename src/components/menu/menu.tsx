import Link from "next/link";
import React from "react";

const menu = () => {
  return (
    <div className=" flex flex-row items-center justify-center mt-28">
      <div className="flex items-center justify-center">
        <Link
          href="/about"
          className="text-white bg-transparent flex items-center gap-2 rounded-full font-bold px-6 py-4 text-xl  transition duration-250"
        >
          <span className="relative hover:text-white hover:brightness-200 transition duration-250">
            <span className="relative z-10 text-white hover:text-shadow">
              Sobre mi
            </span>
          </span>
        </Link>
        <Link
          href="/proyects"
          className="text-white bg-transparent flex items-center gap-2 rounded-full px-6 py-4 text-xl font-bold transition duration-250"
        >
          <span className="relative hover:text-white hover:brightness-200 transition duration-250">
            <span className="relative z-10 text-white hover:text-shadow">
              Proyectos
            </span>
          </span>
        </Link>
        <Link
          href="/technologies"
          className="text-white bg-transparent flex items-center gap-2 rounded-full px-6 py-4 text-xl font-bold transition duration-250"
        >
          <span className="relative hover:text-white hover:brightness-200 transition duration-250">
            <span className="relative z-10 text-white hover:text-shadow">
              Tecnologias
            </span>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default menu;
