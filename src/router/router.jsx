import { CiMenuKebab } from "react-icons/ci";
import { AiFillShop, AiOutlineFileText } from "react-icons/ai";
import { BsFillGearFill } from "react-icons/bs";

export default [
  {
    name: "Inicio",
    icon: <CiMenuKebab />,
    path: "/",
  },
  {
    name: "Clientes",
    icon: <BiSolidUser />,
    path: "/clientes",
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
