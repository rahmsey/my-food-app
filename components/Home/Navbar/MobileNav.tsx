import { Navlinks } from "@/constant/constant";
import Link from "next/link";
import React from "react";
import { CgClose } from "react-icons/cg";

type Props = {
  showNav: boolean;
  closeNav: () => void;
};

const MobileNav = ({ closeNav, showNav }: Props) => {
  const navOpen = showNav ? "translate-x-0" : "-translate-x-full";

  return (
    <div>
      {/* Overlay background */}
      <div
        className={`fixed inset-0 transition-all duration-500 z-[1001] bg-black opacity-70 ${
          showNav ? "visible opacity-70" : "invisible opacity-0"
        }`}
        onClick={closeNav} // allows closing when clicking the background
      ></div>

      {/* Side menu */}
      <div
        className={`text-white fixed flex flex-col justify-center h-full transform transition-transform duration-500 delay-100 w-[80%] sm:w-[60%]
        bg-blue-950 space-y-6 z-[1060] px-12 ${navOpen}`}
      >
        {Navlinks.map((link) => (
          <Link key={link.id} href={link.url}>
            <p className="text-white w-fit text-[20px] sm:text-[30px] border-b-[1.5px] pb-1 border-white">
              {link.Label}
            </p>
          </Link>
        ))}

        {/* Close icon */}
        <CgClose
          onClick={closeNav}
          className="absolute top-4 right-6 sm:w-8 sm:h-8 w-6 h-6 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default MobileNav;
