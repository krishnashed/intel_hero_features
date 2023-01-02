import React from "react";
import Logo from "../Assets/Intel-nav.svg";

const Header = () => {
  return (
    <nav class="px-28  py-6 bg-white text-[#0068B5] text-xl">
      <div class="container flex flex-wrap items-center justify-between px-6 mx-auto">
        <a href="/#" class="flex items-center">
          <img
            src={Logo}
            class="self-center font-bold text-xl font-semibold whitespace-nowrap dark:text-white"
          />
        </a>
      </div>
    </nav>
  );
};

export default Header;
