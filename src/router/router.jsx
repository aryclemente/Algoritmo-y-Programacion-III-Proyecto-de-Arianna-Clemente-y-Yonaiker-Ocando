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
    name: "Facturar",
    icon: "",
    path: "/facturar",
  },
  {
    name: "Productos",
    icon: <AiFillShop />,
    path: "/product",
  },
  {
    name: "Facturas",
    icon: <AiOutlineFileText />,
    path: "/invoice",
  },

  {
    name: "Configuración",
    icon: <BsFillGearFill />,
    path: "/config",
  },
];
