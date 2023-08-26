import { CiMenuKebab } from "react-icons/ci";
import { AiFillShop, AiOutlineFileText } from "react-icons/ai";
import { BsFillGearFill } from "react-icons/bs";
import { BiSolidUser } from "react-icons/bi";


export default [
  {
    name: "Inicio",
    icon: <CiMenuKebab />,
    path: "/",
  },
  {
    name: "Clientes",
    icon: <BiSolidUser />,
    path: "/clients",
  },
  {
    name: "Productos",
    icon: <AiFillShop />,
    path: "/product",
  },
  {
    name: "Facturas",
    icon: <AiOutlineFileText />,
    path: "/document",
  },

  {
    name: "Configuración",
    icon: <BsFillGearFill />,
    path: "/config",
  },
];
