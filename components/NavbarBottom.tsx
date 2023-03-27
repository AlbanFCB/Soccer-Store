import React from "react";
import { FiChevronDown } from "react-icons/fi";
import { FaPlaceOfWorship } from "react-icons/fa";
import { MdOutlineLocationOn } from "react-icons/md";
import phoneImg from "../public/assets/images/phoneImg.webp";
import Image from "next/image";

const NavbarBottom = () => {
  return (
    <div className="hidden max-w-container mx-auto py-2 px-6 lg:flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <Image className="w-6" src={phoneImg} alt="phoneImg" />
          <p className="text-sm font-semibold">How do you want your items?</p>
          <FiChevronDown />
          <span className="w-[1px] h-4 bg-white inline-flex ml-2"></span>
        </div>

        <div className="flex items-center gap-2">
          <MdOutlineLocationOn />
          <p className="text-sm text-zinc-100">Paris, 95500</p>
          <FaPlaceOfWorship />
          <p className="text-sm text-zinc-100">Paris Supercenter</p>
        </div>
      </div>
      <ul className="flex gap-6 text-sm font-semibold">
        <li className="bottomNavLi">France</li>
        <li className="bottomNavLi">Allemagne</li>
        <li className="bottomNavLi">Espagne</li>
        <li className="bottomNavLi">Angleterre</li>
        <li className="bottomNavLi">Italie</li>
      </ul>
    </div>
  );
};

export default NavbarBottom;
