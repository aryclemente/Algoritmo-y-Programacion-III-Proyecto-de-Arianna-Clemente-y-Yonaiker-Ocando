"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaDoorOpen } from "react-icons/fa";
import router from "@/router/router";

const Aside = () => {
  const pathName = usePathname();
  return (
    <aside className="fixed top-0 z-10 ml-[-100%] flex h-screen w-full flex-col justify-between border-r bg-white px-6 pb-3 transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%] dark:bg-gray-800 dark:border-gray-700">
      <div>
        <div className="mt-8 text-center">
          <img
            src="https://images.pexels.com/photos/7533347/pexels-photo-7533347.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="m-auto h-10 w-10 rounded-full object-cover lg:h-28 lg:w-28"
          />
          <h5 className="mt-4 hidden text-xl font-semibold text-gray-600 lg:block dark:text-gray-300">
            Cynthia J. Watts
          </h5>
          <span className="hidden text-gray-400 lg:block">Admin</span>
        </div>

        <ul className="mt-8 space-y-5 tracking-wide">
          {router.map((route) => {
            const isActive = route.path === pathName;

            return (
              <li>
                <Link
                  href={route.path}
                  aria-label="dashboard"
                  className={
                    "flex items-center space-x-4 rounded-xl " +
                    (isActive
                      ? "relative bg-gradient-to-r from-sky-600 to-cyan-400 px-4 py-3 text-white"
                      : "group text-gray-600 dark:text-gray-300")
                  }
                >
                  <div className="text-xl">{route.icon}</div>
                  <span className="-mr-1 font-medium">{route.name}</span>
                </Link>
              </li>
            );
          })}

        </ul>
      </div>

      <div className="-mx-6 flex items-center justify-between border-t px-6 pt-4 dark:border-gray-700">
        <button className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600 dark:text-gray-300">
          <FaDoorOpen />
          <span className="group-hover:text-gray-700 dark:group-hover:text-white">
            Cerrar Sesión
          </span>
        </button>
      </div>
    </aside>
  );
};

export default Aside;
