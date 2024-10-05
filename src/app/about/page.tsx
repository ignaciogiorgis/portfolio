import Link from "next/link";
import { IoIosAttach, IoIosBriefcase, IoLogoGithub } from "react-icons/io";
import { IoSchoolSharp, IoPersonCircleSharp } from "react-icons/io5";
import { HiArrowUturnLeft } from "react-icons/hi2";

const QuienSoyPage = () => {
  return (
    <div>
      <div className="flex">
        <div className="absolute left-10 top-7">
          <Link href="/">
            <HiArrowUturnLeft
              size={50}
              className="text-white transition duration-300 hover:text-white hover:brightness-200 hover:shadow-[0_0_30px_rgba(255,255,255,0.7)] rounded-lg"
            />
          </Link>
        </div>
        <div className="w-full">
          <h2 className="text-4xl font-bold flex flex-col justify-center items-center p-10 bg-slate-900 text-white">
            Sobre mí
          </h2>
        </div>
      </div>
      <div className="bg-slate-400 p-6">
        <div className="flex flex-row items-center my-2">
          <IoIosAttach size={50} />
          <div>
            ¡Hola! Soy Ignacio,{" "}
            <span className="font-bold">
              desarrollador web Full Stack junior
            </span>{" "}
            con un enfoque en la creación de aplicaciones web modernas y
            eficientes.
          </div>
        </div>
        <div className="flex flex-row items-center mb-2">
          <IoIosBriefcase size={50} />
          <div className="ml-2">
            Tengo experiencia en el desarrollo utilizando tecnologías como{" "}
            <span className="font-bold">
              React, Next.js, Node.js, Express, MySQL y Sequelize
            </span>
            , lo que me permite manejar tanto el frontend como el backend de las
            aplicaciones.
          </div>
        </div>
        <div className="flex flex-row items-center">
          <IoLogoGithub size={50} />
          <div className="ml-2">
            Además, domino herramientas como{" "}
            <span className="font-bold">Git y GitHub </span> para la gestión de
            proyectos y control de versiones.
          </div>
        </div>
        <div className="flex flex-row items-center">
          <IoSchoolSharp size={100} />
          <div className="ml-3">
            Actualmente, estoy cursando el segundo año de la carrera de{" "}
            <span className="font-bold"> Analista en Sistemas </span>en la
            Universidad Siglo 21, lo que complementa mi formación técnica con
            una base sólida en análisis y diseño de sistemas. A lo largo de mi
            formación, he desarrollado un enfoque analítico y una gran capacidad
            para resolver problemas, lo que me permite abordar los desafíos de
            desarrollo con eficacia.
          </div>
        </div>
        <div className="flex flex-row items-center">
          <IoPersonCircleSharp size={150} />
          <div className="ml-3">
            Soy una persona apasionada por la tecnología y el aprendizaje
            continuo. Me gusta trabajar en equipo, compartir conocimientos y
            siempre estoy en busca de nuevas oportunidades para mejorar mis
            habilidades. En mi tiempo libre, suelo trabajar en proyectos
            personales para mantenerme actualizado con las últimas tendencias
            del desarrollo web. Si quieres conocer más sobre mis proyectos o
            explorar mi trayectoria, no dudes en descargar mi portafolio o mi CV
            en PDF. ¡Estoy emocionado por la oportunidad de seguir creciendo en
            esta industria y aportar mi granito de arena a cada proyecto en el
            que participe!
          </div>
        </div>
      </div>
      <section className="flex flex-col items-center justify-center p-10 bg-slate-300">
        <p className="mb-10">
          Aquí puedes descargar mi CV para más detalles sobre mi experiencia y
          habilidades.
        </p>
        <Link href="/cv.pdf" legacyBehavior>
          <a
            download="Mi_CV.pdf"
            className="bg-blue-800 text-white font-bold py-2 px-4 rounded hover:bg-blue-500 hover:text-black"
            target="_blank"
          >
            Descargar CV
          </a>
        </Link>
      </section>
    </div>
  );
};

export default QuienSoyPage;
