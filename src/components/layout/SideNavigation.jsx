import React, { useEffect, useState } from "react";
import SideNavBarItem from "../SideNavBarItem";
import Image from "next/image";
import { FaRegHandshake } from "react-icons/fa";
import { LuUsers } from "react-icons/lu";
import { MdMenu, MdClose } from "react-icons/md";
import { useRouter } from "next/router";

// sidebar navigation items data
const sideNavItemsData = {
  sidebaritems: [
    {
      title: "Tanks",
      icon: LuUsers,
      link: "/dashboard/tanks",
    },
    {
      title: "Motors",
      icon: FaRegHandshake,
      link: "/dashboard/motors",
    },
  ],
};

const SideNavigation = ({ path }) => {
  const router = useRouter();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    return () => {};
  }, []);

  const userMenu = sideNavItemsData.sidebaritems;

  return (
    <div
      className={`bg-white h-screen text-black flex flex-col select-none z-50 sticky left-0 top-0 bottom-0 border-r-gray-500 transition-width duration-300 ${
        isSidebarOpen ? "w-54" : "w-10"
      }`}
    >
      {/* Toggle Button */}
      <div className="flex items-center justify-end p-2">
        <button onClick={toggleSidebar} className=" 2xl:focus:outline-none">
          {isSidebarOpen ? "" : <MdMenu size={24} />}
        </button>
      </div>

      {/* Logo */}
      <div className="flex items-center justify-center mt-2 mb-5">
        <Image
          src={"/asserts/icons/testogo.png"}
          alt="Logo"
          draggable="false"
          height={50}
          width={50}
        />
      </div>
      {/* Menu Container */}
      <>
        {userMenu.map((menuItem, index) => (
          <SideNavBarItem
            key={index}
            MenuItem={menuItem}
            path={path}
            isSidebarOpen={isSidebarOpen}
          />
        ))}
      </>
    </div>
  );
};

export default SideNavigation;
