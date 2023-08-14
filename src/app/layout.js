import "./globals.css";
import { Inter } from "next/font/google";
import Aside from "@/component/Aside";
import MenuHorizontal from "@/component/ManuHorizontal";

import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sistema de Facturación",
  description: "",
};

//rutas publicass
// const publicRoutes = ["/login/", "404"];

export default function RootLayout({ children }) {
  //permite leer la url de la ruta
  // const pathName = usePathname();

  //la variable isPublic se incluye la ruta que obtengamos actualmente
  // const isPublic = publicRoutes.includes(pathName);

  return (
    <html lang="es">
      {/* <link
        href="https://cdn.jsdelivr.net/npm/daisyui@3.2.1/dist/full.css"
        rel="stylesheet"
        type="text/css"
      ></link>
      <script src="https://cdn.tailwindcss.com"></script> */}

      <body className="bg-gray-100 dark:bg-gray-900">
        {/* {!isPublic && <Aside />} */}
        <Aside />
        <div className="h-full ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
          <MenuHorizontal />

          {children}
        </div>
      </body>
    </html>
  );
}
