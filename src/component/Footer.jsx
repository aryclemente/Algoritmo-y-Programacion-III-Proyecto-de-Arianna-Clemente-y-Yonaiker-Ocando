import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io";

const Footer = () => {
  return (
    <footer class="w-full bg-gray-100 dark:bg-gray-900 py-16">
      <div class="md:px-12 lg:px-28">
        <div class="container  m-auto space-y-6 text-gray-600 dark:text-gray-300">
          <img src="images/logo.svg" alt="logo tailus" class="m-auto w-40" />
          <ul
            role="list"
            class="flex flex-col items-center justify-center gap-4 py-4 sm:flex-row sm:gap-8"
          >
            <li role="listitem">
              <a href="#" class="hover:text-primary">
                Home
              </a>
            </li>
            <li role="listitem">
              <a href="#" class="hover:text-primary">
                Features
              </a>
            </li>
            <li role="listitem">
              <a href="#" class="hover:text-primary">
                Get started
              </a>
            </li>
            <li role="listitem">
              <a href="#" class="hover:text-primary">
                About us
              </a>
            </li>
          </ul>
          <div class="m-auto flex w-max items-center justify-center  space-x-4">
            <a href="tel:+243996660436" aria-label="call">
              <FaPhoneAlt />
            </a>
            <a href="mailto:hello@mail.com" aria-label="send mail">
              <IoMail />
            </a>
            <a href="#" title="facebook" target="blank" aria-label="facebook">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                class="m-auto w-5"
                viewBox="0 0 16 16"
              >
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"></path>
              </svg>
            </a>
            <a href="#" title="linkedin" target="blank" aria-label="linkedin">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                class="m-auto w-5"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"></path>
              </svg>
            </a>
          </div>

          <div class="text-center">
            <span class="text-sm tracking-wide">
              Copyright © tailus <span id="year"></span> | All right reserved
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
