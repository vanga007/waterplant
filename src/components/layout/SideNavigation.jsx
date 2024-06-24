import React, { useEffect, useState } from "react";
import SideNavBarItem from "../SideNavBarItem";
import { FaRegHandshake } from "react-icons/fa";
import { LuUsers } from "react-icons/lu";
import { MdMenu } from "react-icons/md";
import { useRouter } from "next/router";

// sidebar navigation items data
const sideNavItemsData = {
  sidebaritems: [
    {
      title: "Dashboard",
      icon: LuUsers,
      link: "/dashboard",
    },
    {
      title: "Tanks",
      icon: LuUsers,
      link: "/dashboard/tanks",
    },
    {
      title: "Motors",
      icon: FaRegHandshake,
      link: "#",
    },
    {
      title: "Data Analytics",
      icon: FaRegHandshake,
      link: "/dashboard/data",
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
      className={`bg-[#6FDCE3] h-screen  m-2 rounded-lg text-black flex flex-col select-none z-50 sticky left-0 top-2 bottom-0 border-r-gray-500 transition-width duration-300 ${
        isSidebarOpen ? "w-54" : "w-10"
      }`}
    >
      {/* Logo */}
      <div className="flex items-center justify-center mt-6 font-bold mb-5">
        {/* <Image
          src={"/asserts/icons/testogo.png"}
          alt="Logo"
          draggable="false"
          height={50}
          width={50}
        /> */}
        Menu
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
