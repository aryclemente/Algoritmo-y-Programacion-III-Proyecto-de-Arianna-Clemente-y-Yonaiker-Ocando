import NavBar from "@/component/NavBar";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/component/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sistema de Facturación",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
      <link
        href="https://cdn.jsdelivr.net/npm/daisyui@3.2.1/dist/full.css"
        rel="stylesheet"
        type="text/css"
      ></link>
      <script src="https://cdn.tailwindcss.com"></script>
      
      </head>
      <body className={inter.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
