import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaCircle } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/router";

const SideNavBarItem = ({ MenuItem, isSidebarOpen }) => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const isActive = (link) => router.asPath === link;

  return (
    <div className="flex flex-col  cursor-pointer mx-2">
      {/* Main Menu */}
      <Link href={MenuItem.link || "#"}>
        <div
          className={`group flex gap-3 mb-1 items-center ${
            isActive(MenuItem.link)
              ? "bg-white text-black"
              : "hover:bg-white text-black"
          } rounded-md p-3 transition-all duration-300 ease-in-out`}
          onClick={() => setOpen(!open)}
        >
          {MenuItem.img ? (
            <img src={MenuItem?.img} alt="" className="w-5 h-5" />
          ) : (
            <span>
              <MenuItem.icon className="w-5 h-5" />
            </span>
          )}
          {isSidebarOpen && (
            <span className="hidden lg:block text-lg font-semibold">
              {MenuItem.title}
            </span>
          )}
          {MenuItem.subMenu && (
            <MdKeyboardArrowDown
              className={`ml-auto text-xl ${
                open ? "rotate-180" : ""
              } transition-transform duration-300`}
            />
          )}
        </div>
      </Link>

      {/* Submenu Container */}
      {MenuItem?.subMenu && (
        <div
          className={`ml-6 flex flex-col gap-2 ${open ? "block" : "hidden"}`}
        >
          {/* Vertical Line */}
          <div className="bg-gray-400 w-[2px] h-full relative">
            <span className="absolute top-0 right-0 -left-[3px]">
              <FaCircle className="text-[7px] text-gray-400" />
            </span>
            <span className="absolute bottom-0 -left-[3px]">
              <FaCircle className="text-[7px] text-gray-400" />
            </span>
          </div>

          {/* Submenu Items */}
          <div className="flex flex-col gap-3">
            {MenuItem.subMenu.map((subMenuItem, index) => (
              <Link key={index} href={subMenuItem.link}>
                <div
                  className={`flex gap-3 px-4 py-2 text-gray-700 ${
                    isActive(subMenuItem.link)
                      ? "bg-blue-300 text-black"
                      : "hover:bg-blue-200 hover:text-black"
                  } rounded-md transition-all duration-300 ease-in-out`}
                >
                  {subMenuItem.img ? (
                    <img
                      src={subMenuItem.img}
                      alt={index}
                      className="w-4 h-4"
                    />
                  ) : (
                    <subMenuItem.icon className="w-5 h-5" />
                  )}
                  {isSidebarOpen && (
                    <span className="hidden lg:block text-sm">
                      {subMenuItem.title}
                    </span>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SideNavBarItem;
